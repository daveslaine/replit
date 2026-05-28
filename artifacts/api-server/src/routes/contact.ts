import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn({ errors: parsed.error.message }, "Invalid contact form submission");
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  req.log.info(
    {
      name: parsed.data.name,
      email: parsed.data.email,
      trainingGoal: parsed.data.trainingGoal,
    },
    "New contact form submission received"
  );

  res.status(201).json({
    success: true,
    message:
      "Thank you for reaching out! We will contact you shortly to answer your questions.",
  });
});

export default router;
