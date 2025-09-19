'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Upload, Check, Star, Shield, Users, FileText, Sparkles, TrendingUp, Award, ChevronRight, Zap, Building2, Clock, BarChart3 } from 'lucide-react';

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

// Professional testimonial data
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Resumind's AI understood exactly what tech recruiters look for. Got interviews at FAANG companies within two weeks.",
    rating: 5
  },
  {
    name: "Michael Roberts",
    role: "Marketing Director at Microsoft",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "The AI optimization is incredible. It transformed my generic resume into a compelling story that landed me my dream job.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "Product Manager at Amazon",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Worth every penny. The AI suggestions were spot-on and helped me transition from consulting to tech seamlessly.",
    rating: 5
  }
];

// Company logos (you would replace these with actual logo images)
const companyLogos = [
  { name: "Google", url: "/logos/google.png" },
  { name: "Microsoft", url: "/logos/microsoft.png" },
  { name: "Amazon", url: "/logos/amazon.png" },
  { name: "Apple", url: "/logos/apple.png" },
  { name: "Meta", url: "/logos/meta.png" },
];

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
  const [showPricing, setShowPricing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Resumind" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-semibold text-gray-900">Resumind</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/examples" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Examples
              </a>
              <a href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Resources
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Pricing
              </a>
              <button 
                onClick={() => setShowPricing(true)}
                className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Resumes That Get You Hired
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join over 3 million professionals using Resumind's triple-AI technology 
              to create resumes that pass ATS systems and impress hiring managers.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mb-10 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>3M+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Bank-Level Security</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => document.getElementById('resume-builder').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 group"
              >
                Build My Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/examples"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors font-medium"
              >
                View Examples
              </a>
            </div>

            {/* Company Logos */}
            <div className="pt-12 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-6">Our users work at</p>
              <div className="flex items-center justify-center gap-12 opacity-60">
                {['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta'].map((company) => (
                  <span key={company} className="text-gray-400 font-medium">{company}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Resumind Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Professionals Choose Resumind
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique triple-AI approach delivers superior results compared to single-AI competitors
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Triple-AI Technology
              </h3>
              <p className="text-gray-600 mb-4">
                We combine Gemini, Claude, and DeepSeek AI to optimize every aspect of your resume, 
                while competitors use only one AI model.
              </p>
              <a href="/technology" className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Real-Time ATS Scoring
              </h3>
              <p className="text-gray-600 mb-4">
                Get instant feedback on how well your resume matches job descriptions. 
                Feature included free, while others charge $49 extra.
              </p>
              <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                <Check className="w-4 h-4" />
                <span>Included in all plans</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                75% More Affordable
              </h3>
              <p className="text-gray-600 mb-4">
                Professional plan at $9.99/month vs. $39.99 at competitors. 
                Start with a 7-day free trial, no credit card required.
              </p>
              <button 
                onClick={() => setShowPricing(true)}
                className="text-purple-600 font-medium hover:text-purple-700 flex items-center gap-1"
              >
                View pricing <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Builder Section */}
      <section id="resume-builder" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Start Building Your Resume
              </h2>
              <p className="text-gray-600 mb-8">
                Get started with our AI-powered builder. It only takes a few minutes.
              </p>
              
              <div className="bg-white rounded-xl border border-gray-200 p-8">
                <div className="mb-8">
                  <label className="w-full">
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors cursor-pointer bg-gray-50">
                      <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
                      <p className="font-medium text-gray-700 mb-1">
                        Upload your existing resume
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF, DOCX, or TXT (Max 5MB)
                      </p>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.docx,.txt"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </label>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-3 bg-white text-gray-500">or start fresh</span>
                    </div>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                    >
                      <option value="tech">Technology</option>
                      <option value="business">Business & Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="creative">Creative & Design</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Job Title
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                      placeholder="e.g., Senior Software Engineer"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Professional Experience
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-colors resize-none"
                      placeholder="Brief overview of your work experience..."
                    />
                  </div>
                  
                  <button
                    type="button"
                    onClick={generateResume}
                    disabled={!formData.fullName || !formData.email || isGenerating}
                    className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Generating Resume...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4" />
                        <span>Generate AI Resume</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Right: Preview */}
            <div className="lg:sticky lg:top-8 lg:h-fit">
              {generatedResume ? (
                <div className="bg-white rounded-xl border border-gray-200 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Your AI-Generated Resume
                    </h3>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Ready
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Your resume has been optimized for ATS systems and tailored to your target role.
                  </p>
                  <button
                    onClick={() => setShowPricing(true)}
                    className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    Download Resume
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Start your 7-day free trial to download
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-12 text-center">
                  <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your Resume Preview
                  </h3>
                  <p className="text-gray-600">
                    Fill in the form to see your AI-optimized resume appear here in real-time
                  </p>
                </div>
              )}
              
              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">87%</div>
                  <div className="text-sm text-gray-600">Interview Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3.2x</div>
                  <div className="text-sm text-gray-600">More Callbacks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">14</div>
                  <div className="text-sm text-gray-600">Days to Hire</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Users
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of professionals who landed their dream jobs
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src={testimonials[activeTestimonial].image} 
                alt={testimonials[activeTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-sm text-gray-600">
                  {testimonials[activeTestimonial].role}
                </p>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              "{testimonials[activeTestimonial].text}"
            </p>
          </div>
          
          {/* Testimonial dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeTestimonial ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-8 max-w-5xl w-full my-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-600">
                Choose the plan that fits your needs. Cancel anytime.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Free Plan */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-500">/forever</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>1 AI-enhanced resume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0 text-center">–</span>
                    <span className="text-gray-400">Download in PDF/DOCX</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0 text-center">–</span>
                    <span className="text-gray-400">ATS optimization score</span>
                  </li>
                </ul>
                <button className="w-full py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Current Plan
                </button>
              </div>
              
              {/* Professional Plan */}
              <div className="border-2 border-gray-900 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                  MOST POPULAR
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-gray-900">$9.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-green-600 font-medium mb-6">
                  7-day free trial • No credit card
                </p>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Unlimited AI resumes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Download in all formats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Real-time ATS scoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>AI cover letters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>LinkedIn optimization</span>
                  </li>
                </ul>
                <button 
                  onClick={() => handleStripeCheckout('price_1S8ORgFzgsFHkAQkppnLxKsD', formData.email)}
                  className="w-full py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Start Free Trial
                </button>
              </div>
              
              {/* Enterprise Plan */}
              <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <button className="w-full py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => setShowPricing(false)}
                className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Resumind" 
                  className="w-8 h-8 object-contain brightness-0 invert"
                />
                <span className="text-white font-semibold">Resumind</span>
              </div>
              <p className="text-sm">
                AI-powered resume builder trusted by millions of job seekers worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/examples" className="hover:text-white transition-colors">Examples</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/reviews" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/guides" className="hover:text-white transition-colors">Career Guides</a></li>
                <li><a href="/templates" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2024 Resumind. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeBuilder;
