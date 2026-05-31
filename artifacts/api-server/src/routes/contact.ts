import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import { isMailerConfigured, sendContactNotification } from "../lib/mailer";

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

  if (!isMailerConfigured()) {
    req.log.error("Mailer is not configured; cannot send contact notification email");
    res.status(500).json({ error: "Unable to send your message right now. Please call or text us instead." });
    return;
  }

  try {
    await sendContactNotification({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email,
      trainingGoal: parsed.data.trainingGoal,
      questions: parsed.data.questions,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact notification email");
    res.status(502).json({ error: "Unable to send your message right now. Please call or text us instead." });
    return;
  }

  res.status(201).json({
    success: true,
    message:
      "Thank you for reaching out! We will contact you shortly to answer your questions.",
  });
});

export default router;
