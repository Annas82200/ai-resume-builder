'use client'

import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowLeft, Download, Mail, Sparkles, Crown, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState('');

  useEffect(() => {
    // Get session ID from URL params
    const urlParams = new URLSearchParams(window.location.search);
    setSessionId(urlParams.get('session_id') || '');
  }, []);

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
            <Link 
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to App</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Success Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Resumind Professional
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your subscription is active. You now have access to unlimited AI-enhanced resumes, 
            premium templates, and all professional features.
          </p>
          {sessionId && (
            <p className="text-sm text-gray-500 mt-4">
              Session ID: {sessionId}
            </p>
          )}
        </div>

        {/* Pro Features Unlocked */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Crown className="w-6 h-6 text-gray-900" />
            <h2 className="text-2xl font-semibold text-gray-900">Professional Features Unlocked</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Unlimited AI Resumes</h3>
                  <p className="text-sm text-gray-600">Create as many resumes as you need with our triple-AI engine</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">PDF & DOCX Downloads</h3>
                  <p className="text-sm text-gray-600">Export your resume in professional formats</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">AI Cover Letters</h3>
                  <p className="text-sm text-gray-600">Generate matching cover letters for any job</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">LinkedIn Optimizer</h3>
                  <p className="text-sm text-gray-600">Optimize your LinkedIn profile to match your resume</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Premium Templates</h3>
                  <p className="text-sm text-gray-600">Access to all professional resume designs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Priority Support</h3>
                  <p className="text-sm text-gray-600">Get help when you need it most</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-900 text-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Your Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Create Your Resume</h3>
              <p className="text-sm opacity-90">Go back to the app and create your first AI-enhanced resume</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">Download & Apply</h3>
              <p className="text-sm opacity-90">Export as PDF and start applying to your dream jobs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Get Results</h3>
              <p className="text-sm opacity-90">Track your applications and land more interviews</p>
            </div>
          </div>
        </div>

        {/* Email Confirmation */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900">Check Your Email</h3>
              <p className="text-sm text-blue-800 mt-1">
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
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <Sparkles className="w-5 h-5" />
            Start Creating Your Resume
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            Need help? Contact us at support@resumind.com
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-600">
            © 2024 Resumind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
