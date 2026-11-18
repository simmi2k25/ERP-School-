import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Tiny "are you awake?" check used by the always-on wake-up page (wake/index.html).
// CORS is open so that page, hosted on another domain, can read the answer.
// Render's own "waking up" screen has no CORS header, so the check only succeeds once this app is running.
export function GET() {
  return NextResponse.json(
    { ok: true },
    { headers: { 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } },
  );
}
