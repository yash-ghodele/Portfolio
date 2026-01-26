"use server"




import { z } from "zod"

// Define validation schema inside action or import from a shared schema file
const FormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
    message: z.string().min(5, { message: "Message must be at least 5 characters." }),
})

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
    message: string
    success?: boolean
    fields?: Record<string, string>
    issues?: string[]
}

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
    const data = Object.fromEntries(formData)
    console.log("SERVER RECEIVED DATA:", data) // Debug log

    const parsed = FormSchema.safeParse(data)

    if (!parsed.success) {
        console.log("VALIDATION FAILED:", parsed.error.issues) // Debug log
        const fields: Record<string, string> = {}
        for (const key of Object.keys(data)) {
            fields[key] = data[key].toString()
        }
        return {
            message: "Invalid form data: " + parsed.error.issues[0].message, // Return specific error to UI
            issues: parsed.error.issues.map((issue) => issue.message),
            fields,
            success: false
        }
    }

    try {
        const { name, email, subject, message } = parsed.data

        // 1. Send Notification to Portfolio Owner (Yash)
        const ownerEmail = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            replyTo: email,
            to: process.env.CONTACT_EMAIL || 'ghodeleyash2004@gmail.com',
            subject: `Contact Form: ${subject}`,
            html: `
            <!DOCTYPE html>
            <html>
                <head>
                    <style>
                        body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #000000; color: #ffffff; }
                        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
                        .card { background-color: #111111; border: 1px solid #333333; border-radius: 8px; overflow: hidden; }
                        .header { padding: 24px; border-bottom: 1px solid #222222; background-color: #0a0a0a; }
                        .title { margin: 0; font-size: 18px; font-weight: 600; color: #ffffff; }
                        .content { padding: 32px; }
                        .row { margin-bottom: 20px; }
                        .label { font-size: 12px; text-transform: uppercase; color: #888888; margin-bottom: 6px; font-weight: 500; }
                        .value { font-size: 15px; color: #ffffff; line-height: 1.5; }
                        .message-box { background: #0a0a0a; border: 1px solid #222222; padding: 16px; border-radius: 6px; color: #cccccc; white-space: pre-wrap; font-size: 14px; }
                        .footer { font-size: 12px; color: #444444; margin-top: 24px; text-align: center; }
                        a { color: #ffffff; text-decoration: underline; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="card">
                            <div class="header">
                                <h1 class="title">New Contact Submission</h1>
                            </div>
                            <div class="content">
                                <div class="row">
                                    <div class="label">Name</div>
                                    <div class="value">${name}</div>
                                </div>
                                <div class="row">
                                    <div class="label">Email</div>
                                    <div class="value"><a href="mailto:${email}">${email}</a></div>
                                </div>
                                <div class="row">
                                    <div class="label">Subject</div>
                                    <div class="value">${subject}</div>
                                </div>
                                <div class="row">
                                    <div class="label">Message</div>
                                    <div class="message-box">${message}</div>
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            Sent from Portfolio Contact Form
                        </div>
                    </div>
                </body>
            </html>
            `
        })

        if (ownerEmail.error) throw new Error(ownerEmail.error.message)

        // 2. Send Confirmation to Visitor (Auto-Reply)
        try {
            await resend.emails.send({
                from: 'Yash Ghodele <onboarding@resend.dev>',
                to: email,
                subject: `Receipt: ${subject}`,
                html: `
                <!DOCTYPE html>
                <html>
                    <head>
                        <style>
                            body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #050505; color: #ffffff; }
                            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
                            .card { background-color: #0a0a0a; border: 1px solid #222222; border-radius: 8px; overflow: hidden; }
                            .header { padding: 30px; text-align: left; border-bottom: 1px solid #222; background-color: #111; }
                            .title { margin: 0; font-size: 20px; font-weight: 600; color: #ffffff; }
                            .content { padding: 30px; }
                            .text { font-size: 15px; line-height: 1.6; color: #cccccc; margin-bottom: 24px; }
                            .original-message { background: #111111; border: 1px solid #222222; padding: 16px; border-radius: 6px; margin-bottom: 24px; }
                            .label { font-size: 11px; text-transform: uppercase; color: #666666; margin-bottom: 4px; }
                            .message-text { font-size: 14px; color: #999999; font-style: italic; }
                            .btn { display: inline-block; background: #ffffff; color: #000000; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: 500; font-size: 14px; }
                            .footer { text-align: center; font-size: 12px; color: #444444; margin-top: 30px; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="card">
                                <div class="header">
                                    <h1 class="title">Message Received</h1>
                                </div>
                                <div class="content">
                                    <p class="text">
                                        Dear ${name},<br><br>
                                        Thank you for contacting me regarding <strong>"${subject}"</strong>. I have received your message and will review it shortly.
                                    </p>
                                    
                                    <div class="original-message">
                                        <div class="label">Your Message</div>
                                        <p class="message-text">"${message}"</p>
                                    </div>
                                    
                                    <a href="https://yash-ghodele.pages.dev" class="btn">Visit Portfolio</a>
                                </div>
                            </div>
                            <div class="footer">
                                &copy; ${new Date().getFullYear()} Yash Ghodele
                            </div>
                        </div>
                    </body>
                </html>
                `
            })
        } catch (autoReplyError) {
            console.warn("Auto-reply failed (likely due to unverified recipient):", autoReplyError)
            // Function continues; we consider the submission successful if the OWNER received the mail.
        }

        console.log("Email sent successfully via Resend")

        return {
            message: "Email sent successfully! I'll get back to you soon.",
            success: true,
        }
    } catch (error) {
        console.error("Resend Error Detailed:", JSON.stringify(error, null, 2))
        if (error instanceof Error) {
            console.error("Resend Error Message:", error.message)
        }
        return {
            message: "Failed to send email. Please try again.",
            success: false
        }
    }
}
