import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER, // your inbox
      subject: `Contact from ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 })
  }
}
