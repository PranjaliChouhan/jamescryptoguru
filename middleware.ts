import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect all course routes
  if (req.nextUrl.pathname.startsWith('/courses')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    // Check if user has active subscription
    const { data: subscription } = await supabase
      .from('subscriptions')
      .select('status')
      .eq('user_id', session.user.id)
      .single()

    if (!subscription || subscription.status !== 'active') {
      return NextResponse.redirect(new URL('/pricing', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/courses/:path*', '/dashboard/:path*'],
}

