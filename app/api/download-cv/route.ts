import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public/cv/HRIDAYA-GIRI-CV.pdf');

    if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: 'CV not found' }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="HRIDAYA-GIRI-CV.pdf"',
        },
    });
}
