import { NextResponse } from 'next/server';

export async function GET() {
  const users: any[] = []; 
  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();
  const newUser = { id: 'new-user', name: body.name };
  return NextResponse.json(newUser, { status: 201 });
}