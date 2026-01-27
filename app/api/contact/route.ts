import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

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

        const transporter = nodemailer.createTransport({
            service: 'gmail', // You can change this to your email provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'hridayagiri78@gmail.com',
            replyTo: validated.email,
            subject: `Contact Form: ${validated.subject}`,
            text: `
Name: ${validated.name}
Email: ${validated.email}
Subject: ${validated.subject}

Message:
${validated.message}
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ message: 'Failed to send message' }, { status: 400 });
    }
}
