import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return NextResponse.json(
        {
          error:
            "Contact form is not configured yet. Add WEB3FORMS_ACCESS_KEY to .env.local (free at web3forms.com).",
        },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        subject: `Portfolio contact from ${name.trim()}`,
        from_name: name.trim(),
        replyto: email.trim(),
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    }

    return NextResponse.json(
      { error: data.message || "Failed to send message. Please try again." },
      { status: 500 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
