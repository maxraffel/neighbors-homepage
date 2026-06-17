import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    const { data, error } = await resend.emails.send({
      from: 'Neighbors Notifications <onboarding@resend.dev>',
      to: [process.env.RESEND_TO_EMAIL],
      subject: `New message from ${name}`,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    if (error) {
      console.log("Error sending email:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.log("Error in POST handler:", error);
    return Response.json({ error }, { status: 500 });
  }
}
