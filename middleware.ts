import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/admin') && req.nextUrl.pathname !== '/admin/login') {
    const auth = req.cookies.get('auth')?.value
    if (auth !== 'true') {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }
}

export const config = {
  matcher: ['/admin/:path*']
}