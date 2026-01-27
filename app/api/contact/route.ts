import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(5),
    message: z.string().min(10),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validated = contactSchema.parse(body);

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['hridayagiri78@gmail.com'],
            subject: `Contact Form: ${validated.subject}`,
            replyTo: validated.email,
            text: `
Name: ${validated.name}
Email: ${validated.email}
Subject: ${validated.subject}

Message:
${validated.message}
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
        }

        return NextResponse.json({ message: 'Success', id: data?.id }, { status: 200 });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ message: 'Validation failed' }, { status: 400 });
    }
}
