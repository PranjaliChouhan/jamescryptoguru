import { Button } from '@/components/ui/button'
import { createSubscription } from '../../lib/actions/subscription'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

interface Session {
  user: {
    id: string;
    email: string;
    // Add other user properties as needed
  };
  // Add other session properties as needed
}

export async function getServerSideProps() {
  const { createClient } = await import('../../lib/supabase/server')
  const supabase = await createClient()
  const { data: { session }, error } = await supabase.auth.getSession()

  if (error || !session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}

export default function PricingPage({ session }: { session: Session }) {
  return (
    <div className="container mx-auto py-10">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-4xl font-bold">Simple, transparent pricing</h1>
        <p className="mt-4 text-lg text-gray-500">
          Get unlimited access to all courses with a single subscription
        </p>
      </div>
      <div className="mt-10 flex justify-center">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Monthly Subscription</CardTitle>
            <CardDescription>Access all courses</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$29/month</p>
            <ul className="mt-4 space-y-2">
              <li>✓ Unlimited course access</li>
              <li>✓ New courses monthly</li>
              <li>✓ Cancel anytime</li>
            </ul>
          </CardContent>
          <CardFooter>
            <form action={createSubscription} className="w-full">
              <Button className="w-full" size="lg">
                {session ? 'Subscribe Now' : 'Sign up to Subscribe'}
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

