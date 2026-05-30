import { Router } from "express";
import { db, instructorsTable } from "@workspace/db";
import { eq, asc } from "drizzle-orm";
import { requireAdmin } from "../../middleware/adminAuth";
import { z } from "zod";

const router = Router();

const instructorBodySchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  phone: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  teachingPhilosophy: z.string().optional().nullable(),
  rateStandard: z.number().int().optional(),
  rateBlock: z.number().int().optional(),
  certifications: z.array(z.string()).optional(),
  photoObjectPath: z.string().optional().nullable(),
  photoPosition: z.string().optional(),
  sortOrder: z.number().int().optional(),
  active: z.boolean().optional(),
});

router.get("/admin/instructors", requireAdmin, async (req, res) => {
  try {
    const rows = await db.select().from(instructorsTable).orderBy(asc(instructorsTable.sortOrder));
    res.json(rows);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/admin/instructors", requireAdmin, async (req, res) => {
  try {
    const data = instructorBodySchema.parse(req.body);
    const [row] = await db.insert(instructorsTable).values(data).returning();
    res.status(201).json(row);
  } catch (err) {
    req.log.error(err);
    res.status(400).json({ error: String(err) });
  }
});

router.put("/admin/instructors/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = instructorBodySchema.partial().parse(req.body);
    const [row] = await db.update(instructorsTable).set(data).where(eq(instructorsTable.id, id)).returning();
    if (!row) { res.status(404).json({ error: "Not found" }); return; }
    res.json(row);
  } catch (err) {
    req.log.error(err);
    res.status(400).json({ error: String(err) });
  }
});

router.delete("/admin/instructors/:id", requireAdmin, async (req, res) => {
  try {
    const id = Number(req.params.id);
    await db.delete(instructorsTable).where(eq(instructorsTable.id, id));
    res.json({ ok: true });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
