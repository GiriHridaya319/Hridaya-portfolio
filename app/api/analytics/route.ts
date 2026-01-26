import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { type, id } = body;

        // In a real app, log to a DB (e.g., Supabase, MongoDB)
        console.log(`Analytics: ${type} - ${id}`);

        return NextResponse.json({ status: 'tracked' });
    } catch (error) {
        return NextResponse.json({ status: 'error' }, { status: 500 });
    }
}
