import nodemailer, { type Transporter } from "nodemailer";
import { logger } from "./logger";

const SMTP_HOST = process.env.SMTP_HOST ?? "smtppro.zoho.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? "465");
const SMTP_USER = process.env.SMTP_USER ?? "";
const SMTP_PASSWORD = process.env.SMTP_PASSWORD ?? "";
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? SMTP_USER;

let transporter: Transporter | null = null;

export function isMailerConfigured(): boolean {
  return Boolean(SMTP_USER && SMTP_PASSWORD && CONTACT_TO_EMAIL);
}

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
  }
  return transporter;
}

export interface ContactNotification {
  name: string;
  phone: string;
  email: string;
  trainingGoal: string;
  questions?: string | null;
}

const TRAINING_GOAL_LABELS: Record<string, string> = {
  "private-pilot": "Private Pilot",
  "instrument-rating": "Instrument Rating",
  "commercial-pilot": "Commercial Pilot",
  "cfi-cfii": "CFI / CFII",
  "airline-pathway": "Airline Pathway",
  "aircraft-rental": "Aircraft Rental",
  "not-sure": "Not Sure Yet",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactNotification(data: ContactNotification): Promise<void> {
  const goalLabel = TRAINING_GOAL_LABELS[data.trainingGoal] ?? data.trainingGoal;
  const questions = data.questions?.trim() ? data.questions.trim() : "(none provided)";

  const rows: Array<[string, string]> = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Training Goal", goalLabel],
    ["Questions", questions],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px; background: #f3f4f6; font-weight: bold; border: 1px solid #e5e7eb; white-space: nowrap; vertical-align: top;">${escapeHtml(
              label
            )}</td>
            <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(value).replace(
              /\n/g,
              "<br />"
            )}</td>
          </tr>`
          )
          .join("")}
      </table>
    </div>
  `;

  await getTransporter().sendMail({
    from: `"Accelerated Flight School" <${SMTP_USER}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject: `New Inquiry: ${data.name} — ${goalLabel}`,
    text,
    html,
  });

  logger.info({ to: CONTACT_TO_EMAIL }, "Contact notification email sent");
}
