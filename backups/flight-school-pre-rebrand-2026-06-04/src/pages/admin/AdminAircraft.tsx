import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactCrop, { type Crop, type PixelCrop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { adminApi, type Aircraft } from "@/lib/adminApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, X, Upload, MoveUp, MoveDown, Check } from "lucide-react";

type FormData = Partial<Omit<Aircraft, "id">>;

function centerAspectCrop(w: number, h: number, aspect: number): Crop {
  return centerCrop(makeAspectCrop({ unit: "%", width: 90 }, aspect, w, h), w, h);
}

// crop is in CSS pixels (what react-image-crop's onComplete returns)
function getCroppedBlob(image: HTMLImageElement, crop: PixelCrop): Promise<Blob> {
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const x = Math.round(crop.x * scaleX);
  const y = Math.round(crop.y * scaleY);
  const w = Math.round(crop.width * scaleX);
  const h = Math.round(crop.height * scaleY);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(image, x, y, w, h, 0, 0, w, h);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Canvas empty"))), "image/jpeg", 0.92),
  );
}

function AircraftModal({ initial, onSave, onClose }: { initial: FormData | null; onSave: (d: FormData) => Promise<void>; onClose: () => void }) {
  const isNew = !initial;
  const [form, setForm] = useState<FormData>(
    initial ?? { name: "", description: "", specs: "", photoObjectPath: null, comingSoon: false, sortOrder: 0, active: true },
  );
  const [rawImageSrc, setRawImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const imgRef = useRef<HTMLImageElement>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof FormData>(k: K, v: FormData[K]) { setForm((f) => ({ ...f, [k]: v })); }

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
    const c = centerAspectCrop(width, height, 16 / 9);
    setCrop(c);
    // Convert percentage crop → pixel crop (matching what onComplete returns)
    setCompletedCrop({
      unit: "px",
      x: (c.x / 100) * width,
      y: (c.y / 100) * height,
      width: (c.width / 100) * width,
      height: (c.height / 100) * height,
    });
  }

  async function applyCrop() {
    if (!imgRef.current || !completedCrop) return;
    setUploading(true);
    try {
      const blob = await getCroppedBlob(imgRef.current, completedCrop);
      const file = new File([blob], "aircraft.jpg", { type: "image/jpeg" });
      const path = await adminApi.uploadImage(file);
      set("photoObjectPath", path);
      setRawImageSrc(null);
    } catch (e) { setError(String(e)); }
    finally { setUploading(false); }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try { await onSave(form); } catch (e) { setError(String(e)); } finally { setSaving(false); }
  }

  const photoUrl = form.photoObjectPath ? `/api/storage${form.photoObjectPath}` : null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
          <h2 className="font-bold text-lg text-slate-900">{isNew ? "Add Aircraft" : "Edit Aircraft"}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}><X className="w-4 h-4" /></Button>
        </div>
        <form onSubmit={handleSave} className="p-6 space-y-5">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Aircraft Photo</label>
            {rawImageSrc ? (
              <div className="space-y-3">
                <p className="text-xs text-slate-500">Drag to crop (16:9), then click Apply.</p>
                <ReactCrop crop={crop} onChange={setCrop} onComplete={setCompletedCrop} aspect={16 / 9} className="max-h-60">
                  <img ref={imgRef} src={rawImageSrc} onLoad={onImageLoad} className="max-h-60 w-auto block" alt="crop" />
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
                {photoUrl && <img src={photoUrl} className="h-20 w-32 object-cover rounded-lg border border-slate-200" alt="Aircraft" />}
                <label className="cursor-pointer flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                  <Upload className="w-4 h-4" />{photoUrl ? "Change Photo" : "Upload Photo"}
                  <input type="file" accept="image/*" onChange={onFileChange} className="hidden" />
                </label>
              </div>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Aircraft Name *</label>
            <Input value={form.name ?? ""} onChange={(e) => set("name", e.target.value)} required placeholder="e.g. Piper Cherokee PA-28" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Description</label>
            <Textarea rows={3} value={form.description ?? ""} onChange={(e) => set("description", e.target.value)} placeholder="Brief description of the aircraft…" />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">Specs / Details</label>
            <Textarea rows={3} value={form.specs ?? ""} onChange={(e) => set("specs", e.target.value)} placeholder="Engine, seats, range, etc…" />
          </div>

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
              <input type="checkbox" checked={form.comingSoon ?? false} onChange={(e) => set("comingSoon", e.target.checked)} className="h-4 w-4" />
              Coming Soon
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 cursor-pointer">
              <input type="checkbox" checked={form.active ?? true} onChange={(e) => set("active", e.target.checked)} className="h-4 w-4" />
              Active (show on website)
            </label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex justify-end gap-3 pt-2 border-t border-slate-100">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={saving} className="font-bold">{saving ? "Saving…" : "Save Aircraft"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function AdminAircraft() {
  const [aircraft, setAircraft] = useState<Aircraft[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Aircraft | null | "new">(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const load = useCallback(async () => {
    const data = await adminApi.aircraft.list();
    setAircraft(data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function handleSave(data: FormData) {
    if (editing === "new") await adminApi.aircraft.create(data as Partial<Aircraft>);
    else if (editing) await adminApi.aircraft.update(editing.id, data as Partial<Aircraft>);
    setEditing(null);
    load();
  }

  async function handleDelete(id: number) {
    await adminApi.aircraft.delete(id);
    setDeleteId(null);
    load();
  }

  async function move(id: number, dir: -1 | 1) {
    const idx = aircraft.findIndex((a) => a.id === id);
    const target = aircraft[idx + dir];
    if (!target) return;
    await Promise.all([
      adminApi.aircraft.update(id, { sortOrder: target.sortOrder }),
      adminApi.aircraft.update(target.id, { sortOrder: aircraft[idx].sortOrder }),
    ]);
    load();
  }

  if (loading) return <div className="p-8 text-slate-500">Loading…</div>;

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Aircraft</h1>
          <p className="text-slate-500 text-sm mt-1">Manage aircraft and fleet photos.</p>
        </div>
        <Button onClick={() => setEditing("new")} className="gap-2 font-bold"><Plus className="w-4 h-4" />Add Aircraft</Button>
      </div>

      <div className="space-y-3">
        {aircraft.length === 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-400">No aircraft yet. Click "Add Aircraft" to get started.</div>
        )}
        {aircraft.map((ac, idx) => {
          const photoUrl = ac.photoObjectPath ? `/api/storage${ac.photoObjectPath}` : null;
          return (
            <div key={ac.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex items-center gap-4">
              {photoUrl ? (
                <img src={photoUrl} className="w-24 h-16 object-cover rounded-lg shrink-0" alt={ac.name} />
              ) : (
                <div className="w-24 h-16 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center text-slate-400 text-xs">No photo</div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-bold text-slate-900">{ac.name}</p>
                  {ac.comingSoon && <span className="text-xs bg-amber-50 text-amber-600 border border-amber-200 px-2 py-0.5 rounded-full">Coming Soon</span>}
                  {!ac.active && <span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">Hidden</span>}
                </div>
                {ac.description && <p className="text-sm text-slate-500 truncate">{ac.description}</p>}
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => move(ac.id, -1)} disabled={idx === 0}><MoveUp className="w-3.5 h-3.5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => move(ac.id, 1)} disabled={idx === aircraft.length - 1}><MoveDown className="w-3.5 h-3.5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditing(ac)}><Pencil className="w-3.5 h-3.5" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-600 hover:bg-red-50" onClick={() => setDeleteId(ac.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
              </div>
            </div>
          );
        })}
      </div>

      {editing !== null && <AircraftModal initial={editing === "new" ? null : editing} onSave={handleSave} onClose={() => setEditing(null)} />}
      {deleteId !== null && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
            <h3 className="font-bold text-slate-900 mb-2">Delete Aircraft?</h3>
            <p className="text-sm text-slate-500 mb-6">This will permanently remove this aircraft from your website.</p>
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
