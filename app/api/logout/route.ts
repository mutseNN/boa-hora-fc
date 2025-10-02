import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  cookies().delete('auth')
  return NextResponse.redirect(new URL('/admin/login', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'))
}
