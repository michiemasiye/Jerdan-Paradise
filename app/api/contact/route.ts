import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${name}`
    const emailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `.trim()

    // Using mailto link approach (simpler, no email service needed)
    // In production, you'd use a service like Resend, SendGrid, or Nodemailer
    const mailtoLink = `mailto:paradisejerdan@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    // For now, we'll return success and the client can handle opening mailto
    // Or you can implement a proper email service here
    return NextResponse.json(
      { 
        success: true, 
        message: "Your message has been prepared. Please check your email client.",
        mailtoLink 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}

