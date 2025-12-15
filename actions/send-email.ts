"use server"




import { z } from "zod"

// Define validation schema inside action or import from a shared schema file
const FormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
        const { name, email, message } = parsed.data

        // 1. Send Notification to Portfolio Owner (Yash)
        const ownerEmail = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            replyTo: email,
            to: 'yashghodele.work@gmail.com',
            subject: `New Message from Portfolio: ${name}`,
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
                <h2 style="color: #333333; margin-top: 0; text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">New Portfolio Contact</h2>
                
                <div style="margin-top: 20px;">
                    <p style="font-size: 16px; color: #555;"><strong>Name:</strong> <span style="color: #000;">${name}</span></p>
                    <p style="font-size: 16px; color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0070f3; text-decoration: none;">${email}</a></p>
                </div>

                <div style="margin-top: 30px; background-color: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #0070f3;">
                    <p style="margin: 0; font-weight: bold; color: #333; margin-bottom: 10px;">Message:</p>
                    <p style="margin: 0; white-space: pre-wrap; color: #444; line-height: 1.6;">${message}</p>
                </div>
                
                <p style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
                    Sent from your Portfolio Contact Form
                </p>
            </div>
            `
        })

        if (ownerEmail.error) throw new Error(ownerEmail.error.message)

        // 2. Send Confirmation to Visitor (Auto-Reply)
        // NOTE: This will fail for unverified emails on the free/onboarding tier. 
        // We catch the error so it doesn't report "Failed" to the user just because the auto-reply failed.
        try {
            await resend.emails.send({
                from: 'Yash Ghodele <onboarding@resend.dev>',
                to: email, // The visitor's email
                subject: `Reviewing your message: ${name}`,
                html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff;">
                    <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px;">Thanks for reaching out!</h2>
                    <p style="color: #555; font-size: 16px; line-height: 1.6;">
                        Hi <strong>${name}</strong>,<br><br>
                        I've received your message and will get back to you as soon as possible.
                    </p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 6px; color: #666; font-size: 14px;">
                        <em>"${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"</em>
                    </div>
                    <p style="margin-top: 30px; font-size: 14px; color: #888;">
                        Best regards,<br>
                        <strong>Yash Ghodele</strong>
                    </p>
                </div>
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
