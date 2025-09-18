'use client'

import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowLeft, Download, Mail, Sparkles, Crown } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Get session ID from URL params
    const urlParams = new URLSearchParams(window.location.search);
    setSessionId(urlParams.get('session_id') || '');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Resumind Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Resumind</h1>
                <p className="text-sm text-gray-600">AI that understands your mind</p>
              </div>
            </div>
            <Link 
              href="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to App</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Resumind Pro!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your subscription is active. You now have access to unlimited AI-enhanced resumes, 
            premium templates, and all pro features.
          </p>
          {sessionId && (
            <p className="text-sm text-gray-500 mt-4">
              Session ID: {sessionId}
            </p>
          )}
        </div>

        {/* Pro Features Unlocked */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Crown className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-gray-800">Pro Features Unlocked</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Unlimited AI Resumes</h3>
                  <p className="text-sm text-gray-600">Create as many resumes as you need with our multi-AI engine</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">PDF & DOCX Downloads</h3>
                  <p className="text-sm text-gray-600">Export your resume in professional formats</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">AI Cover Letters</h3>
                  <p className="text-sm text-gray-600">Generate matching cover letters for any job</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">LinkedIn Optimizer</h3>
                  <p className="text-sm text-gray-600">Optimize your LinkedIn profile to match your resume</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Premium Templates</h3>
                  <p className="text-sm text-gray-600">Access to all professional resume designs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Priority Support</h3>
                  <p className="text-sm text-gray-600">Get help when you need it most</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Create Your Resume</h3>
              <p className="text-sm opacity-90">Go back to the app and create your first AI-enhanced resume</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Download & Apply</h3>
              <p className="text-sm opacity-90">Export as PDF and start applying to your dream jobs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Get Results</h3>
              <p className="text-sm opacity-90">Track your applications and land more interviews</p>
            </div>
          </div>
        </div>

        {/* Email Confirmation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900">Check Your Email</h3>
              <p className="text-sm text-blue-700 mt-1">
                We've sent you a confirmation email with your subscription details and access instructions.
                If you don't see it, check your spam folder.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition text-lg"
          >
            <Sparkles className="w-5 h-5" />
            Start Creating Your Resume
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Need help? Contact us at support@resumind.com
          </p>
        </div>
      </div>
    </div>
  );
}
