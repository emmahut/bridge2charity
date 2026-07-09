import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, list } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // ── ADD NEWSLETTER LIST SYNC HERE ───────────────────────────────
    // When Gmail App Password / a mailing list provider (Mailchimp,
    // Resend Audiences, etc.) is ready, replace this block with the
    // real subscribe call.
    // ─────────────────────────────────────────────────────────────────

    console.log("Newsletter subscription:", { firstName, lastName, email, list })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
