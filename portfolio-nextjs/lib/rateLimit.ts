/**
 * Very lightweight in-memory rate limiter.
 *
 * Good enough for a personal-portfolio contact form. Limitation: this map
 * lives in the Node process's memory, so on serverless platforms (Vercel)
 * each function instance has its own counter, and it resets on cold start.
 * If you outgrow this, swap it for Upstash Redis's rate limiter — same
 * function signature, so nothing else needs to change.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.resetAt) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}
