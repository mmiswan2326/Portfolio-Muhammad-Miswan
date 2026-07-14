import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { isRateLimited } from "@/lib/rateLimit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  // Honeypot: a real visitor never fills this hidden field. Bots often do.
  const honeypot = typeof body.company === "string" ? body.company.trim() : "";

  if (honeypot) {
    // Pretend success so bots don't learn their submission was rejected.
    return NextResponse.json({ ok: true });
  }

  if (!name || name.length > 100) {
    return NextResponse.json({ ok: false, error: "Please enter a valid name." }, { status: 400 });
  }
  if (!email || email.length > 200 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Message should be between 10 and 5000 characters." },
      { status: 400 }
    );
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const result = await sendContactEmail({ name, email, message });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error ?? "Something went wrong." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
