import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, address, message } = await req.json();

  if (!name || !email || !phone || !address || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com", // ✅ Hostinger SMTP
      port: 465, // ✅ SSL Port (or use 587 + secure: false)
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // support@franciscosroofinginc.co
        pass: process.env.EMAIL_PASS, // Your Hostinger email password
      },
    });

    await transporter.sendMail({
      from: `"Francisco Roofing" <${process.env.EMAIL_USER}>`, // authenticated sender
      to: process.env.COMPANY_EMAIL, // where the message is delivered
      subject: "New Roofing Contact Request",
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
