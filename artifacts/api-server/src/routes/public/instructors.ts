import { Router } from "express";
import { db, instructorsTable } from "@workspace/db";
import { eq, asc } from "drizzle-orm";

const router = Router();

router.get("/instructors", async (req, res) => {
  try {
    const rows = await db
      .select()
      .from(instructorsTable)
      .where(eq(instructorsTable.active, true))
      .orderBy(asc(instructorsTable.sortOrder));
    res.json(rows);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
