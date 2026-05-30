import { Router } from "express";
import { db, aircraftTable } from "@workspace/db";
import { eq, asc } from "drizzle-orm";

const router = Router();

router.get("/aircraft", async (req, res) => {
  try {
    const rows = await db
      .select()
      .from(aircraftTable)
      .where(eq(aircraftTable.active, true))
      .orderBy(asc(aircraftTable.sortOrder));
    res.json(rows);
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
