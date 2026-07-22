import { NextResponse } from "next/server"
import { sendMail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, list } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await sendMail({
      to: process.env.NEWSLETTER_NOTIFICATION_EMAIL || "info@bridge2charity.org",
      subject: `[B2C Newsletter] New signup — ${firstName} ${lastName}`,
      text: `${firstName} ${lastName} <${email}> subscribed to: ${list}`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
