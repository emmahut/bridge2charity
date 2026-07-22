import nodemailer from "nodemailer"

let transporter: ReturnType<typeof nodemailer.createTransport> | null = null

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_FROM,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  }
  return transporter
}

export async function sendMail(options: {
  to: string
  cc?: string
  replyTo?: string
  subject: string
  text: string
}) {
  if (!process.env.GMAIL_APP_PASSWORD) {
    console.log("GMAIL_APP_PASSWORD not set — logging email instead of sending:", options)
    return
  }

  await getTransporter().sendMail({
    from: `"Bridge2Charity Website" <${process.env.GMAIL_FROM}>`,
    to: options.to,
    cc: options.cc,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
  })
}
