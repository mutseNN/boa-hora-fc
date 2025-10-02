import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'content.json')

export async function GET(req: Request) {
  const cookies = req.cookies;  // Acessa diretamente os cookies da requisição
  if (cookies.get('auth') !== 'true') { // Verifica o valor do cookie 'auth'
    return NextResponse.json({}, { status: 401 })
  }
  const raw = await fs.readFile(filePath, 'utf-8')
  return NextResponse.json(JSON.parse(raw))
}

export async function POST(req: Request) {
  const cookies = req.cookies;  // Acessa diretamente os cookies da requisição
  if (cookies.get('auth') !== 'true') { // Verifica o valor do cookie 'auth'
    return NextResponse.json({}, { status: 401 })
  }
  const body = await req.json()
  await fs.writeFile(filePath, JSON.stringify(body, null, 2))
  return NextResponse.json({ ok: true })
}
