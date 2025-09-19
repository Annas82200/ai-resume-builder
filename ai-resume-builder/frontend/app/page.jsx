'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Download, Sparkles, FileText, CheckCircle, Star, Lock, Zap, Target, Briefcase, TrendingUp, Brain, Award, Users, Clock, AlertCircle, Building2, GraduationCap, Wrench, ChevronRight, Globe, Linkedin, Mail, BarChart3, Shield, Rocket, PenTool, FileCheck, MessageSquare, Crown, DollarSign, Upload, X, Code } from 'lucide-react';

// API URL configuration
const getApiUrl = () => {
  if (typeof window !== 'undefined') {
    if (window.location.hostname === 'localhost') {
      return 'http://localhost:3000';
    }
    return window.location.origin;
  }
  return '';
};

const BACKEND_URL = 'https://ai-resume-builder-production-0a65.up.railway.app';
const FRONTEND_API_URL = getApiUrl();

// Exit Intent Popup Component
const ExitIntentPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-bounce-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Wait! Don't Leave Empty-Handed 🎁</h2>
          <p className="text-gray-600 mb-6">
            Get your resume reviewed by our AI for FREE! No credit card required.
          </p>
          
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4 mb-6">
            <p className="font-semibold text-yellow-800">Special Offer - Next 10 Minutes Only!</p>
            <p className="text-2xl font-bold text-yellow-900 mt-2">50% OFF First Month</p>
            <p className="text-sm text-yellow-700">Use code: COMEBACK50</p>
          </div>
          
          <a 
            href="#resume-form"
            onClick={onClose}
            className="w-full inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Claim My 50% Discount →
          </a>
          
          <p className="text-xs text-gray-500 mt-3">
            This offer expires when you leave this page
          </p>
        </div>
      </div>
    </div>
  );
};

// Urgency Timer Component
const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center">
      <p className="text-sm font-medium">
        🔥 Limited Time: 50% OFF ends in {hours}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
};

// Live Activity Component
const LiveActivity = () => {
  const activities = [
    "Sarah from New York just created a resume",
    "Michael from California got hired at Google!",
    "Emily from Texas downloaded her ATS-optimized resume",
    "James from Florida upgraded to Pro",
    "Lisa from Chicago got 3 interviews this week!"
  ];
  
  const [currentActivity, setCurrentActivity] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-green-50 border border-green-200 py-2 px-4 text-center">
      <p className="text-sm text-green-800 font-medium animate-fade-in">
        🎉 {activities[currentActivity]}
      </p>
    </div>
  );
};

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    industry: 'tech',
    jobTitle: '',
    jobDescription: ''
  });
  
  const [generatedResume, setGeneratedResume] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [showPricing, setShowPricing] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  
  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !localStorage.getItem('exitPopupShown')) {
        setShowExitPopup(true);
        localStorage.setItem('exitPopupShown', 'true');
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Here you would parse the file and populate formData
      alert('Resume uploaded! We\'ll extract your information.');
    }
  };

  const generateResume = async () => {
    setIsGenerating(true);
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/enhance-resume`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resumeData: formData,
          industry: formData.industry,
          jobTitle: formData.jobTitle,
          jobDescription: formData.jobDescription
        })
      });
      
      const data = await response.json();
      
      if (data.enhanced) {
        setGeneratedResume(data.enhanced);
      }
    } catch (error) {
      console.error('Error generating resume:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleStripeCheckout = async (priceId, userEmail) => {
    if (!userEmail) {
      alert('Please enter your email address first.');
      return;
    }

    try {
      const response = await fetch(`${FRONTEND_API_URL}/api/create-checkout-session`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          priceId: priceId,
          userEmail: userEmail
        })
      });
      
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Urgency Timer */}
      <UrgencyTimer />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Resumind Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Resumind</h1>
                <p className="text-sm text-gray-600">AI that understands your mind</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Blog
              </a>
              <a href="/examples" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Examples
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Pricing
              </a>
              <button 
                onClick={() => setShowPricing(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2 animate-pulse"
              >
                <Rocket className="w-4 h-4" />
                Start Free Trial
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-green-50 border-y border-green-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">🔥 52 resumes created in last hour</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span>4.9/5 from 2,341 reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span>SSL Secure • No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Activity */}
      <LiveActivity />

      {/* Testimonials Ticker */}
      <div className="bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">"Got 3 interviews in my first week!"</p>
                <p className="text-xs text-gray-500">- Sarah K., Software Engineer</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Mike" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium">"The AI suggestions were spot-on"</p>
                <p className="text-xs text-gray-500">- Mike T., Sales Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Hero */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              AI Resume Builder That Gets You Hired
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Used by 127,000+ professionals to land jobs at Google, Amazon, Microsoft
            </p>
            
            {/* Quick Start Options */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Start Your Resume in 30 Seconds</h2>
                
                {/* Quick Options */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <button 
                    onClick={() => {
                      setFormData({...formData, industry: 'tech', jobTitle: 'Software Engineer'});
                      document.getElementById('resume-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-left transition group"
                  >
                    <Code className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold">I'm in Tech</h3>
                    <p className="text-sm text-gray-600">Software, Data, DevOps roles</p>
                  </button>
                  
                  <button 
                    onClick={() => {
                      setFormData({...formData, industry: 'business', jobTitle: 'Business Professional'});
                      document.getElementById('resume-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-left transition group"
                  >
                    <Briefcase className="w-8 h-8 text-green-600 mb-2" />
                    <h3 className="font-semibold">I'm in Business</h3>
                    <p className="text-sm text-gray-600">Sales, Marketing, Finance roles</p>
                  </button>
                </div>
                
                {/* Or Upload Resume */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-white text-gray-500">or</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="w-full">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition cursor-pointer">
                      <Upload className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                      <p className="font-medium text-gray-700">Upload Your Current Resume</p>
                      <p className="text-sm text-gray-500 mt-1">We'll enhance it with AI in seconds</p>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.docx,.txt"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </label>
                </div>
                
                {/* Trust Badge */}
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span>Your data is secure and never shared</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Resumind Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-4">Why Resumind Beats The Competition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Brain className="w-12 h-12 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">3 AIs vs 1 AI</h4>
              <p className="text-sm opacity-90">We use Gemini + Claude + DeepSeek while others use just ChatGPT</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Real-Time ATS Score</h4>
              <p className="text-sm opacity-90">See your score instantly (competitors charge $49 extra)</p>
            </div>
            <div className="text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">75% Cheaper</h4>
              <p className="text-sm opacity-90">$9.99/mo vs $39.99 at Resume.io</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div id="resume-form" className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              Build Your Resume - Free Trial
            </h2>
            
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium">
                🎉 Special Offer: Start your 7-day free trial today! No credit card required.
              </p>
            </div>
            
            <div className="space-y-5">
              {/* Industry Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Your Industry <span className="text-red-500">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="tech">Technology</option>
                  <option value="business">Business</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="finance">Finance</option>
                </select>
              </div>
              
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Senior Software Engineer"
                />
              </div>
              
              {/* Personal Info Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Work Experience (Optional - AI will enhance)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Current job title and key achievements..."
                />
              </div>
              
              {/* Generate Button */}
              <button
                onClick={generateResume}
                disabled={!formData.fullName || !formData.email || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group animate-pulse"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>AI is crafting your perfect resume...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 group-hover:animate-pulse" />
                    <span>Generate My Free Resume Now</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="text-center text-sm text-gray-500">
                No credit card required • Cancel anytime
              </p>
            </div>
          </div>
          
          {/* Preview Section */}
          <div className="space-y-6">
            {generatedResume ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Your AI-Enhanced Resume</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-green-800">✅ Resume generated successfully!</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setShowPricing(true)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    Start Free Trial to Download
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <Sparkles className="w-20 h-20 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Your Resume Will Appear Here
                </h3>
                <p className="text-gray-600 mb-4">
                  Fill in the form and let our AI create a professional resume in seconds
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 font-medium">
                    🎯 Our AI optimizes for ATS systems automatically
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-8 max-w-6xl w-full my-8">
            <h2 className="text-3xl font-bold text-center mb-2">Choose Your Plan</h2>
            <p className="text-center text-gray-600 mb-8">Start free, upgrade when you're ready</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Basic Plan */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <p className="text-3xl font-bold mb-1">$0</p>
                <p className="text-gray-500 mb-6">Forever free</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>1 AI-enhanced resume</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    <X className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>PDF/DOCX download</span>
                  </li>
                </ul>
                <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium">
                  Current Plan
                </button>
              </div>
              
              {/* Pro Plan - Updated with Free Trial */}
              <div className="border-2 border-blue-500 rounded-xl p-6 relative transform scale-105 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <div className="mb-4">
                  <p className="text-3xl font-bold">
                    <span className="line-through text-gray-400 text-lg">$9.99</span> 
                    <span className="text-green-600"> FREE</span>
                  </p>
                  <p className="text-sm text-gray-600">for 7 days, then $9.99/mo</p>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-center mb-4">
                  <span className="font-semibold">🎉 No credit card required!</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Unlimited</strong> AI resumes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>PDF & DOCX downloads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>AI cover letters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>LinkedIn optimizer</span>
                  </li>
                </ul>
                <button 
                  onClick={() => handleStripeCheckout('price_1S8ORgFzgsFHkAQkppnLxKsD', formData.email)}
                  className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition animate-pulse"
                >
                  Start Free Trial Now →
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Join 12,847 professionals who upgraded this week
                </p>
              </div>
              
              {/* Enterprise Plan */}
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold mb-1">$29.99<span className="text-lg font-normal text-gray-500">/mo</span></p>
                <p className="text-gray-500 mb-6">For teams & career professionals</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Team collaboration</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition">
                  Contact Sales
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => setShowPricing(false)}
              className="mx-auto block mt-6 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <ExitIntentPopup onClose={() => setShowExitPopup(false)} />
      )}
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ResumeBuilder;
