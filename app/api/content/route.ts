import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'
import { cookies as getCookies } from 'next/headers'
import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

const filePath = path.join(process.cwd(), 'data', 'content.json')

export async function GET() {
  const cookies = getCookies() as ReadonlyRequestCookies

  if (cookies.get('auth')?.value !== 'true') {
    return NextResponse.json({}, { status: 401 })
  }

  const raw = await fs.readFile(filePath, 'utf-8')
  return NextResponse.json(JSON.parse(raw))
}

export async function POST(req: Request) {
  const cookies = getCookies() as ReadonlyRequestCookies

  if (cookies.get('auth')?.value !== 'true') {
    return NextResponse.json({}, { status: 401 })
  }

  const body = await req.json()
  await fs.writeFile(filePath, JSON.stringify(body, null, 2))
  return NextResponse.json({ ok: true })
}
