// app/api/create-checkout-session/route.js

import Stripe from 'stripe';

// Initialize Stripe with the secret key, with fallback for testing
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_YOUR_TEST_KEY');

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
      console.error('Missing STRIPE_SECRET_KEY - using test mode');
      return Response.json({ 
        error: 'Stripe is in test mode. Please configure STRIPE_SECRET_KEY environment variable.',
        testMode: true 
      }, { status: 500 });
    }

    // Get the current domain for redirect URLs
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_DOMAIN || 'https://resumind.co';
    
    console.log('Creating Stripe session with origin:', origin);

    try {
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
        cancel_url: `${origin}/pricing?canceled=true`,
        metadata: {
          userEmail: userEmail,
          product: 'resumind-pro'
        },
        allow_promotion_codes: true,
        billing_address_collection: 'auto',
      });

      console.log('Stripe session created:', session.id);

      // Send back the checkout URL
      return Response.json({ 
        url: session.url,
        sessionId: session.id 
      });

    } catch (stripeError) {
      console.error('Stripe API error:', stripeError);
      
      // Check for specific Stripe errors
      if (stripeError.code === 'resource_missing') {
        return Response.json({ 
          error: 'Invalid price ID. Please check your Stripe dashboard for the correct price ID.',
          details: 'The price ID provided does not exist in your Stripe account.'
        }, { status: 400 });
      }
      
      throw stripeError;
    }

  } catch (error) {
    console.error('Stripe error details:', error);
    
    // Send back a helpful error message
    return Response.json({ 
      error: 'Payment system error. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred processing your payment.'
    }, { status: 500 });
  }
}

// Handle other HTTP methods
export async function GET() {
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}
