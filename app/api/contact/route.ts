import { NextResponse } from "next/server"
import { sendMail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, area, message } = body

    if (!name || !email || !area || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await sendMail({
      to: process.env.CONTACT_NOTIFICATION_EMAIL || "info@bridge2charity.org",
      cc: process.env.CONTACT_CC_EMAIL,
      replyTo: email,
      subject: `[B2C Contact] ${area} — from ${name}`,
      text: `From: ${name} <${email}>\nArea of Interest: ${area}\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
