import { NextResponse } from 'next/server';
import { z } from 'zod';

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

        // In a real app, send email here (e.g., via Resend or Nodemailer)
        console.log('Contact form submission:', validated);

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Validation failed' }, { status: 400 });
    }
}
