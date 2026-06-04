const BASE = "/api";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || res.statusText);
  }
  return res.json();
}

export const adminApi = {
  login: (password: string) =>
    request("/admin/login", { method: "POST", body: JSON.stringify({ password }) }),
  logout: () => request("/admin/logout", { method: "POST" }),
  me: () => request<{ isAdmin: boolean }>("/admin/me"),

  instructors: {
    list: () => request<Instructor[]>("/admin/instructors"),
    create: (data: Partial<Instructor>) =>
      request<Instructor>("/admin/instructors", { method: "POST", body: JSON.stringify(data) }),
    update: (id: number, data: Partial<Instructor>) =>
      request<Instructor>(`/admin/instructors/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: number) =>
      request(`/admin/instructors/${id}`, { method: "DELETE" }),
  },

  aircraft: {
    list: () => request<Aircraft[]>("/admin/aircraft"),
    create: (data: Partial<Aircraft>) =>
      request<Aircraft>("/admin/aircraft", { method: "POST", body: JSON.stringify(data) }),
    update: (id: number, data: Partial<Aircraft>) =>
      request<Aircraft>(`/admin/aircraft/${id}`, { method: "PUT", body: JSON.stringify(data) }),
    delete: (id: number) =>
      request(`/admin/aircraft/${id}`, { method: "DELETE" }),
  },

  uploadImage: async (file: File): Promise<string> => {
    const urlRes = await request<{ uploadURL: string; objectPath: string }>(
      "/storage/uploads/request-url",
      {
        method: "POST",
        body: JSON.stringify({ name: file.name, size: file.size, contentType: file.type }),
      }
    );
    await fetch(urlRes.uploadURL, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    });
    return urlRes.objectPath;
  },
};

export interface Instructor {
  id: number;
  name: string;
  title: string;
  phone: string | null;
  bio: string | null;
  teachingPhilosophy: string | null;
  rateStandard: number;
  rateBlock: number;
  certifications: string[];
  photoObjectPath: string | null;
  photoPosition: string;
  sortOrder: number;
  active: boolean;
}

export interface Aircraft {
  id: number;
  name: string;
  description: string | null;
  specs: string | null;
  photoObjectPath: string | null;
  comingSoon: boolean;
  sortOrder: number;
  active: boolean;
}
