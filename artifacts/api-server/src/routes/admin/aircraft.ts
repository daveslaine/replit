import { Router } from "express";
import { db, aircraftTable } from "@workspace/db";
import { eq, asc } from "drizzle-orm";
import { requireAdmin } from "../../middleware/adminAuth";
import { z } from "zod";

const router = Router();

const aircraftBodySchema = z.object({
  name: z.string().min(1),
  description: z.string().optional().nullable(),
  specs: z.string().optional().nullable(),
  photoObjectPath: z.string().optional().nullable(),
  comingSoon: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  active: z.boolean().optional(),
});

router.get("/admin/aircraft", requireAdmin, async (req, res) => {
  try {
    const rows = await db.select().from(aircraftTable).orderBy(asc(aircraftTable.sortOrder));
    res.json(rows);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/admin/aircraft", requireAdmin, async (req, res) => {
  try {
    const data = aircraftBodySchema.parse(req.body);
    const [row] = await db.insert(aircraftTable).values(data).returning();
    res.status(201).json(row);
  } catch (err) {
    req.log.error(err);
    res.status(400).json({ error: String(err) });
  }
});

router.put("/admin/aircraft/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = aircraftBodySchema.partial().parse(req.body);
    const [row] = await db.update(aircraftTable).set(data).where(eq(aircraftTable.id, id)).returning();
    if (!row) { res.status(404).json({ error: "Not found" }); return; }
    res.json(row);
  } catch (err) {
    req.log.error(err);
    res.status(400).json({ error: String(err) });
  }
});

router.delete("/admin/aircraft/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    await db.delete(aircraftTable).where(eq(aircraftTable.id, id));
    res.json({ ok: true });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
