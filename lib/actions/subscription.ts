'use server';

import { redirect } from 'next/navigation';
import { stripe } from '../stripe';
import { createClient } from '../supabase/server';

export async function createSubscription() {
  try {
    const supabase = await createClient();

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return { error: 'Not authenticated' };
    }

    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID!,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing?canceled=true`,
      metadata: {
        userId: user.id,
      },
    });

    if (!session.url) {
      return { error: 'Could not create checkout session' };
    }

    redirect(session.url);
  } catch (error) {
    console.error('Error creating subscription:', error);
    return { error: 'An error occurred while creating the subscription' };
  }
}

export async function manageSubscription() {
  try {
    const supabase = await createClient();

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      return { error: 'Not authenticated' };
    }

    const { data: subscription, error: subscriptionError } = await supabase
      .from('subscriptions')
      .select('stripe_customer_id')
      .eq('user_id', user.id)
      .single();

    if (subscriptionError || !subscription?.stripe_customer_id) {
      return { error: 'No subscription found' };
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: subscription.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
    });

    redirect(session.url);
  } catch (error) {
    console.error('Error managing subscription:', error);
    return { error: 'An error occurred while managing the subscription' };
  }
}
