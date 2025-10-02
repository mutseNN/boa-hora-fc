import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { cookies } from 'next/headers'

const filePath = path.join(process.cwd(), 'data', 'content.json')

export async function GET() {
  const cookieStore = cookies(); // <- deve ser síncrono
  if (cookieStore.get('auth')?.value !== 'true') {
    return NextResponse.json({}, { status: 401 })
  }

  const raw = await fs.readFile(filePath, 'utf-8')
  return NextResponse.json(JSON.parse(raw))
}

export async function POST(req: Request) {
  const cookieStore = cookies();
  if (cookieStore.get('auth')?.value !== 'true') {
    return NextResponse.json({}, { status: 401 })
  }

  const body = await req.json()
  await fs.writeFile(filePath, JSON.stringify(body, null, 2))
  return NextResponse.json({ ok: true })
}
