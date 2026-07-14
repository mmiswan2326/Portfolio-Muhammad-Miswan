import { Resend } from "resend";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface EmailResult {
  ok: boolean;
  error?: string;
}

/**
 * Sends the contact-form submission to your inbox.
 *
 * Swappable by design: if you want to switch providers later (SendGrid,
 * Postmark, AWS SES, etc.), this is the only file that needs to change —
 * the API route only calls sendContactEmail().
 */
export async function sendContactEmail(payload: ContactPayload): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variables.");
    return { ok: false, error: "Email service is not configured." };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      reply_to: payload.email,
      subject: `New message from ${payload.name} (portfolio contact form)`,
      text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}`,
      html: `
        <div style="font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #111;">
          <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { ok: false, error: "Failed to send email." };
    }

    return { ok: true };
  } catch (err) {
    console.error("Unexpected email error:", err);
    return { ok: false, error: "Failed to send email." };
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
