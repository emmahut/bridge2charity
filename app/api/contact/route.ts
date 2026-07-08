import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, area, message } = body

    if (!name || !email || !area || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // ── ADD EMAIL SENDING HERE ──────────────────────────────────────
    // When Gmail App Password is ready, replace this block with nodemailer:
    //
    // import nodemailer from "nodemailer"
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: { user: "bridge2char@gmail.com", pass: process.env.GMAIL_APP_PASSWORD },
    // })
    // await transporter.sendMail({
    //   from: `"${name}" <${email}>`,
    //   to: "bridge2char@gmail.com",
    //   subject: `[B2C Contact] ${area} — from ${name}`,
    //   text: message,
    // })
    // ───────────────────────────────────────────────────────────────

    console.log("Contact form submission:", { name, email, area, message })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
