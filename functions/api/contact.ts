interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function onRequestPost(context: {
  request: Request;
  env: Record<string, string>;
}): Promise<Response> {
  try {
    const { request, env } = context;
    const body: ContactBody = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = env?.RESEND_API_KEY;
    const toEmail = env?.CONTACT_EMAIL || "yashghodele.work@gmail.com";

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, message: "Contact service is not configured with an API key." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [toEmail],
        reply_to: email,
        subject: `Contact Form: ${subject}`,
        html: `
          <div style="background-color: #0a0a0a; color: #fff; padding: 24px; font-family: sans-serif; border-radius: 8px;">
            <h2 style="margin-top: 0; color: #a855f7;">New Message from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top: 16px; padding: 16px; background: #171717; border-radius: 6px; border: 1px solid #333;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errData: any = await resendResponse.json().catch(() => ({}));
      return new Response(
        JSON.stringify({ success: false, message: errData?.message || "Failed to send email via mail server." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully! I'll get back to you soon." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
