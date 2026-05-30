import { Router } from "express";
import bcrypt from "bcryptjs";
import { requireAdmin } from "../../middleware/adminAuth";

const router = Router();

router.post("/admin/login", async (req, res) => {
  try {
    const { password } = req.body;
    if (!password) {
      res.status(400).json({ error: "Password required" });
      return;
    }
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      res.status(500).json({ error: "Admin not configured" });
      return;
    }
    const match = password === adminPassword;
    if (!match) {
      res.status(401).json({ error: "Invalid password" });
      return;
    }
    (req.session as any).isAdmin = true;
    res.json({ ok: true });
  } catch (err) {
    req.log.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/admin/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

router.get("/admin/me", requireAdmin, (req, res) => {
  res.json({ isAdmin: true });
});

export default router;
