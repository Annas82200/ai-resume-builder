// app/api/create-checkout-session/route.js

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { priceId, userEmail } = body;

    console.log('Received request:', { priceId, userEmail });

    // Check if we have the required information
    if (!priceId) {
      console.error('Missing priceId');
      return Response.json({ error: 'Price ID is required' }, { status: 400 });
    }

    if (!userEmail) {
      console.error('Missing userEmail');
      return Response.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if environment variables are set
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('Missing STRIPE_SECRET_KEY');
      return Response.json({ error: 'Stripe not configured' }, { status: 500 });
    }

    // Get the current domain for redirect URLs
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_DOMAIN || '';
    
    console.log('Creating Stripe session with origin:', origin);

    // Create the Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: userEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 7, // 7-day free trial
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/?canceled=true`,
      metadata: {
        userEmail: userEmail,
        product: 'resumind-pro'
      },
    });

    console.log('Stripe session created:', session.id);

    // Send back the checkout URL
    return Response.json({ 
      url: session.url,
      sessionId: session.id 
    });

  } catch (error) {
    console.error('Stripe error details:', error);
    
    // Send back a helpful error message
    return Response.json({ 
      error: 'Payment system error. Please try again.',
      details: error.message
    }, { status: 500 });
  }
}

// Handle other HTTP methods
export async function GET() {
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}
