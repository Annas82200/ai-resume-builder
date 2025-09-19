'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, X, Zap, Shield, Users, Rocket, Star, Award, Brain, FileText, Target, Download, Linkedin, PenTool, MessageSquare, ChevronRight } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  // Calculate prices based on billing cycle
  const prices = {
    basic: 0,
    pro: billingCycle === 'monthly' ? 9.99 : 7.99,
    enterprise: billingCycle === 'monthly' ? 29.99 : 24.99
  };

  const handleStripeCheckout = async (priceId, planName) => {
    // This would integrate with your existing Stripe checkout
    alert(`Redirecting to checkout for ${planName} plan...`);
  };

  const plans = [
    {
      name: 'Basic',
      tagline: 'Perfect to get started',
      price: prices.basic,
      priceId: 'price_basic',
      features: [
        { name: '1 AI-enhanced resume per month', included: true },
        { name: '4 professional templates', included: true },
        { name: 'Basic ATS analysis', included: true },
        { name: 'Email support', included: true },
        { name: 'PDF/DOCX download', included: false },
        { name: 'Cover letter generator', included: false },
        { name: 'LinkedIn optimizer', included: false },
        { name: 'Unlimited resumes', included: false },
        { name: 'Priority support', included: false },
        { name: 'Resume tracking', included: false }
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Professional',
      tagline: 'Everything you need to land your dream job',
      price: prices.pro,
      priceId: 'price_1S8ORgFzgsFHkAQkppnLxKsD',
      features: [
        { name: 'Unlimited AI-enhanced resumes', included: true },
        { name: 'All premium templates', included: true },
        { name: 'Advanced ATS optimization', included: true },
        { name: 'Priority email support', included: true },
        { name: 'PDF/DOCX download', included: true },
        { name: 'AI cover letter generator', included: true },
        { name: 'LinkedIn profile optimizer', included: true },
        { name: 'Resume performance tracking', included: true },
        { name: 'Keyword suggestions', included: true },
        { name: 'Interview tips', included: true }
      ],
      cta: 'Start 7-Day Free Trial',
      popular: true,
      savings: billingCycle === 'yearly' ? 'Save $24/year' : null
    },
    {
      name: 'Enterprise',
      tagline: 'For teams & career professionals',
      price: prices.enterprise,
      priceId: 'price_enterprise',
      features: [
        { name: 'Everything in Professional', included: true },
        { name: '5 team member accounts', included: true },
        { name: '1-on-1 career coaching call', included: true },
        { name: 'Resume review by experts', included: true },
        { name: 'Custom templates', included: true },
        { name: 'API access', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Salary negotiation guide', included: true },
        { name: 'Interview preparation kit', included: true },
        { name: 'White-label options', included: true }
      ],
      cta: 'Contact Sales',
      popular: false,
      savings: billingCycle === 'yearly' ? 'Save $60/year' : null
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Software Engineer at Google',
      content: 'The AI suggestions were spot-on. I got interviews at 5 FAANG companies within a month.',
      rating: 5
    },
    {
      name: 'Michael Roberts',
      role: 'Marketing Director',
      content: 'Worth every penny. The LinkedIn optimizer alone helped me get 10x more recruiter views.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'Recent Graduate',
      content: 'As a new grad with little experience, Resumind helped me stand out. Got my dream job!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Resumind" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-semibold text-gray-900">Resumind</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/examples" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Examples
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/pricing" className="text-gray-900 font-medium">
                Pricing
              </Link>
              <Link 
                href="/"
                className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                billingCycle === 'monthly'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                billingCycle === 'yearly'
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              } flex items-center gap-2`}
            >
              Yearly
              <span className="text-green-600 text-sm font-normal">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-xl p-8 ${
                plan.popular 
                  ? 'shadow-xl border-2 border-gray-900' 
                  : 'shadow-sm border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.tagline}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === 0 ? 'Free' : `$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-gray-600 ml-2">/month</span>
                  )}
                </div>
                {plan.savings && (
                  <p className="text-green-600 text-sm font-medium">{plan.savings}</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <span className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0 text-center">–</span>
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleStripeCheckout(plan.priceId, plan.name)}
                className={`w-full py-3 rounded-lg font-medium transition ${
                  plan.popular
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : plan.name === 'Enterprise'
                    ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </button>

              {plan.name === 'Professional' && (
                <p className="text-center text-xs text-gray-500 mt-3">
                  7-day free trial • No credit card required
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Detailed Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left py-4 px-6 font-medium text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Basic</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Professional</th>
                  <th className="text-center py-4 px-6 font-medium text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'AI Resume Generation', basic: '1/month', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Resume Templates', basic: '4', pro: 'All Premium', enterprise: 'All + Custom' },
                  { feature: 'ATS Optimization', basic: 'Basic', pro: 'Advanced', enterprise: 'Advanced + Expert Review' },
                  { feature: 'Download Formats', basic: '–', pro: 'PDF, DOCX', enterprise: 'PDF, DOCX, HTML' },
                  { feature: 'Cover Letters', basic: '–', pro: 'Unlimited', enterprise: 'Unlimited + Templates' },
                  { feature: 'LinkedIn Optimizer', basic: '–', pro: '✓', enterprise: '✓' },
                  { feature: 'Team Members', basic: '1', pro: '1', enterprise: '5+' },
                  { feature: 'Support', basic: 'Email', pro: 'Priority Email', enterprise: 'Dedicated Manager' },
                  { feature: 'Career Coaching', basic: '–', pro: '–', enterprise: '1-on-1 Sessions' },
                  { feature: 'API Access', basic: '–', pro: '–', enterprise: '✓' },
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 text-gray-900">{row.feature}</td>
                    <td className="text-center py-4 px-6 text-gray-600">{row.basic}</td>
                    <td className="text-center py-4 px-6 text-gray-900 font-medium">{row.pro}</td>
                    <td className="text-center py-4 px-6 text-gray-600">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Loved by Job Seekers Worldwide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes! You can cancel your subscription anytime from your account settings. No questions asked.'
              },
              {
                q: 'Do I get charged during the free trial?',
                a: "No, we don't charge you during the 7-day free trial. You'll only be charged if you continue after the trial ends."
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, debit cards, and PayPal through our secure Stripe payment system.'
              },
              {
                q: 'Can I switch plans later?',
                a: 'Absolutely! You can upgrade or downgrade your plan anytime. Changes take effect on your next billing cycle.'
              },
              {
                q: 'Is my data secure?',
                a: 'Yes, we use bank-level encryption to protect your data. We never share your personal information with third parties.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-medium text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 127,000+ job seekers who've landed their dream jobs with Resumind
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <Rocket className="w-5 h-5" />
            Get Started Free
          </Link>
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-gray-600" />
              <span>SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-gray-600" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gray-600" />
              <span>Money-back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-600">
            © 2024 Resumind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
