import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'rentals.json')

export async function POST(req: Request) {
  const body = await req.json()
  const raw = await fs.readFile(filePath, 'utf-8').catch(() => '[]')
  const list = JSON.parse(raw)
  list.push({ ...body, createdAt: new Date().toISOString() })
  await fs.writeFile(filePath, JSON.stringify(list, null, 2))
  return NextResponse.json({ ok: true })
}
