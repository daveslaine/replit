import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactCrop, { type Crop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { adminApi, type Instructor } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, X, Upload, MoveUp, MoveDown, Check } from "lucide-react";

type FormData = Partial<Omit<Instructor, "id">>;

const CERT_OPTIONS = ["CFI", "CFII", "Commercial Multi-Engine", "Commercial Pilot", "ATP", "MEI"];

function centerAspectCrop(w: number, h: number, aspect: number): Crop {
  return centerCrop(makeAspectCrop({ unit: "%", width: 90 }, aspect, w, h), w, h);
}

function getCroppedBlob(image: HTMLImageElement, crop: Crop): Promise<Blob> {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const cropX = Math.round((crop.x / 100) * image.width * scaleX);
  const cropY = Math.round((crop.y / 100) * image.height * scaleY);
  const cropW = Math.round((crop.width / 100) * image.width * scaleX);
  const cropH = Math.round((crop.height / 100) * image.height * scaleY);
  canvas.width = cropW;
  canvas.height = cropH;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(image, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Canvas empty"))), "image/jpeg", 0.92),
  );
}

function InstructorModal({
  initial,
  onSave,
  onClose,
}: {
  initial: FormData | null;
  onSave: (data: FormData) => Promise<void>;
  onClose: () => void;
}) {
  const isNew = !initial;
  const [form, setForm] = useState<FormData>(
    initial ?? {
      name: "",
      title: "",
      phone: "",
      bio: "",
      teachingPhilosophy: "",
      rateStandard: 45,
      rateBlock: 35,
      certifications: [],
      photoObjectPath: null,
      photoPosition: "top",
      sortOrder: 0,
      active: true,
    },
  );

  const [rawImageSrc, setRawImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop>();
  const imgRef = useRef<HTMLImageElement>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof FormData>(k: K, v: FormData[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function toggleCert(c: string) {
    const certs = form.certifications ?? [];
    set("certifications", certs.includes(c) ? certs.filter((x) => x !== c) : [...certs, c]);
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setRawImageSrc(reader.result as string);
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    const c = centerAspectCrop(width, height, 3 / 4);
    setCrop(c);
    setCompletedCrop(c);
  }

  async function applyCrop() {
    if (!imgRef.current || !completedCrop) return;
    setUploading(true);
    setError("");
    try {
      const blob = await getCroppedBlob(imgRef.current, completedCrop);
      const file = new File([blob], "instructor.jpg", { type: "image/jpeg" });
      const path = await adminApi.uploadImage(file);
      set("photoObjectPath", path);
      setRawImageSrc(null);
    } catch (e) {
      setError(String(e));
    } finally {
      setUploading(false);
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await onSave(form);
    } catch (e) {
      setError(String(e));
    } finally {
      setSaving(false);
    }
  }

  const photoUrl = form.photoObjectPath ? `/api/storage${form.photoObjectPath}` : null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
          <h2 className="font-bold text-lg text-slate-900">{isNew ? "Add Instructor" : "Edit Instructor"}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}><X className="w-4 h-4" /></Button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-5">
          {/* Photo */}
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Profile Photo</label>
            {rawImageSrc ? (
              <div className="space-y-3">
                <p className="text-xs text-slate-500">Drag to crop, then click Apply.</p>
                <ReactCrop crop={crop} onChange={setCrop} onComplete={setCompletedCrop} aspect={3 / 4} className="max-h-72">
                  <img ref={imgRef} src={rawImageSrc} onLoad={onImageLoad} className="max-h-72 w-auto block" alt="crop preview" />
                </ReactCrop>
                <div className="flex gap-2">
                  <Button type="button" size="sm" onClick={applyCrop} disabled={uploading} className="gap-1.5">
                    <Check className="w-4 h-4" />{uploading ? "Uploading…" : "Apply Crop & Upload"}
                  </Button>
                  <Button type="button" size="sm" variant="ghost" onClick={() => setRawImageSrc(null)}>Cancel</Button>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-4">
                {photoUrl && (
                  <img src={photoUrl} className="h-24 w-18 object-cover rounded-xl border border-slate-200" style={{ objectPosition: form.photoPosition ?? "top" }} alt="Instructor" />
                )}
                <label className="cursor-pointer flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                  <Upload className="w-4 h-4" />
                  {photoUrl ? "Change Photo" : "Upload Photo"}
                  <input type="file" accept="image/*" onChange={onFileChange} className="hidden" />
                </label>
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Name *</label>
              <Input value={form.name ?? ""} onChange={(e) => set("name", e.target.value)} required placeholder="e.g. Reza S." />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Title *</label>
              <Input value={form.title ?? ""} onChange={(e) => set("title", e.target.value)} required placeholder="e.g. Owner & Instructor" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
            <Input value={form.phone ?? ""} onChange={(e) => set("phone", e.target.value)} placeholder="(310) 490-0402" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Standard Rate ($/hr)</label>
              <Input type="number" value={form.rateStandard ?? 45} onChange={(e) => set("rateStandard", Number(e.target.value))} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Block Rate ($/hr)</label>
              <Input type="number" value={form.rateBlock ?? 35} onChange={(e) => set("rateBlock", Number(e.target.value))} />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Certifications</label>
            <div className="flex flex-wrap gap-2">
              {CERT_OPTIONS.map((c) => (
                <button key={c} type="button" onClick={() => toggleCert(c)}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${(form.certifications ?? []).includes(c) ? "bg-primary text-white border-primary" : "border-slate-200 text-slate-600 hover:border-primary hover:text-primary"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Teaching Philosophy / Quote</label>
            <Textarea rows={3} value={form.teachingPhilosophy ?? ""} onChange={(e) => set("teachingPhilosophy", e.target.value)} placeholder="Instructor's teaching philosophy quote…" />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Bio / Additional Info</label>
            <Textarea rows={3} value={form.bio ?? ""} onChange={(e) => set("bio", e.target.value)} placeholder="Additional bio text…" />
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="active" checked={form.active ?? true} onChange={(e) => set("active", e.target.checked)} className="h-4 w-4" />
            <label htmlFor="active" className="text-sm font-medium text-slate-700">Active (show on website)</label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-end gap-3 pt-2 border-t border-slate-100">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={saving} className="font-bold">{saving ? "Saving…" : "Save Instructor"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AdminInstructors() {
  const [instructors, setInstructors] = useState<Instructor[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Instructor | null | "new">(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const load = useCallback(async () => {
    const data = await adminApi.instructors.list();
    setInstructors(data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function handleSave(data: FormData) {
    if (editing === "new") {
      await adminApi.instructors.create(data as Partial<Instructor>);
    } else if (editing) {
      await adminApi.instructors.update(editing.id, data as Partial<Instructor>);
    }
    setEditing(null);
    load();
  }

  async function handleDelete(id: number) {
    await adminApi.instructors.delete(id);
    setDeleteId(null);
    load();
  }

  async function move(id: number, dir: -1 | 1) {
    const idx = instructors.findIndex((i) => i.id === id);
    const target = instructors[idx + dir];
    if (!target) return;
    await Promise.all([
      adminApi.instructors.update(id, { sortOrder: target.sortOrder }),
      adminApi.instructors.update(target.id, { sortOrder: instructors[idx].sortOrder }),
    ]);
    load();
  }

  if (loading) return <div className="p-8 text-slate-500">Loading…</div>;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Instructors</h1>
          <p className="text-slate-500 text-sm mt-1">Manage instructor profiles and photos.</p>
        </div>
        <Button onClick={() => setEditing("new")} className="gap-2 font-bold">
          <Plus className="w-4 h-4" />Add Instructor
        </Button>
      </div>

      <div className="space-y-3">
        {instructors.length === 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-400">
            No instructors yet. Click "Add Instructor" to get started.
          </div>
        )}
        {instructors.map((inst, idx) => {
          const photoUrl = inst.photoObjectPath ? `/api/storage${inst.photoObjectPath}` : null;
          return (
            <div key={inst.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex items-center gap-4">
              {photoUrl ? (
                <img src={photoUrl} className="w-16 h-20 object-cover rounded-lg shrink-0" style={{ objectPosition: inst.photoPosition }} alt={inst.name} />
              ) : (
                <div className="w-16 h-20 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center text-slate-400 text-xs text-center">No photo</div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-bold text-slate-900">{inst.name}</p>
                  {!inst.active && <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Hidden</span>}
                </div>
                <p className="text-sm text-slate-500">{inst.title}</p>
                {inst.phone && <p className="text-xs text-slate-400">{inst.phone}</p>}
                <p className="text-xs text-slate-400 mt-1">${inst.rateStandard}/hr · ${inst.rateBlock}/hr block</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => move(inst.id, -1)} disabled={idx === 0}><MoveUp className="w-3.5 h-3.5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => move(inst.id, 1)} disabled={idx === instructors.length - 1}><MoveDown className="w-3.5 h-3.5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditing(inst)}><Pencil className="w-3.5 h-3.5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50" onClick={() => setDeleteId(inst.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
              </div>
            </div>
          );
        })}
      </div>

      {editing !== null && (
        <InstructorModal
          initial={editing === "new" ? null : editing}
          onSave={handleSave}
          onClose={() => setEditing(null)}
        />
      )}

      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
            <h3 className="font-bold text-slate-900 mb-2">Delete Instructor?</h3>
            <p className="text-sm text-slate-500 mb-6">This will permanently remove this instructor from your website.</p>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
              <Button variant="destructive" onClick={() => handleDelete(deleteId)}>Delete</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
