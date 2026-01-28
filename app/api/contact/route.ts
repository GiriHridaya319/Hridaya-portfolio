import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(5),
    message: z.string().min(10),
});

const RATE_LIMIT_COUNT = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export async function POST(req: Request) {
    try {
        // Simple Rate Limiting
        const ip = req.headers.get('x-forwarded-for') || 'unknown';
        const now = Date.now();
        const limitData = rateLimitMap.get(ip) || { count: 0, lastReset: now };

        if (now - limitData.lastReset > RATE_LIMIT_WINDOW) {
            limitData.count = 0;
            limitData.lastReset = now;
        }

        if (limitData.count >= RATE_LIMIT_COUNT) {
            return NextResponse.json(
                { message: 'Too many requests. Please try again in an hour.' },
                { status: 429 }
            );
        }

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

        // Increment rate limit count
        limitData.count += 1;
        rateLimitMap.set(ip, limitData);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { message: 'Validation failed', errors: error.issues.map((issue: z.ZodIssue) => issue.message) },
                { status: 400 }
            );
        }

        console.error('Contact API error:', error);
        return NextResponse.json(
            { message: error instanceof Error ? error.message : 'Failed to send message' },
            { status: 500 }
        );
    }
}
