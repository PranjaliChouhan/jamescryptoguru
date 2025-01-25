import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Retrieve the current session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const url = req.nextUrl;

  // Check if the user is accessing protected routes
  if (url.pathname.startsWith('/courses') || url.pathname.startsWith('/dashboard')) {
    // Redirect to login if not authenticated
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Check subscription status for course-related routes
    if (url.pathname.startsWith('/courses')) {
      const { data: subscription, error } = await supabase
        .from('subscriptions')
        .select('status')
        .eq('user_id', session.user.id)
        .single();

      if (error || !subscription || subscription.status !== 'active') {
        // Redirect to the pricing page if the user doesn't have an active subscription
        return NextResponse.redirect(new URL('/pricing', req.url));
      }
    }
  }

  return res;
}

export const config = {
  matcher: ['/courses/:path*', '/dashboard/:path*'],
};
