import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const { username, password } = await req.json()
  if (username === process.env.BOAHORA_USER && password === process.env.BOAHORA_PASS) {
    cookies().set('auth', 'true', { httpOnly: true })
    return NextResponse.json({ ok: true })
  }
  return NextResponse.json({ error: 'Invalid' }, { status: 401 })
}
