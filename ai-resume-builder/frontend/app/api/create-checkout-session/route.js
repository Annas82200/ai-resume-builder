// For pages/api/create-checkout-session.js (if you have a pages folder)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  try {
    const { priceId, userEmail } = req.body;

    // Check if we have the required information
    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    if (!userEmail) {
      return res.status(400).json({ error: 'Email is required' });
    }

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
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/?canceled=true`,
      metadata: {
        userEmail: userEmail,
        product: 'resumind-pro'
      },
    });

    // Send back the checkout URL
    res.status(200).json({ 
      url: session.url,
      sessionId: session.id 
    });

  } catch (error) {
    console.error('Stripe error:', error);
    
    // Send back a helpful error message
    res.status(500).json({ 
      error: 'Payment system error. Please try again.',
      details: error.message
    });
  }
}
