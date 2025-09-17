'use client'

import React, { useState, useEffect } from 'react';
import { Download, Sparkles, FileText, CheckCircle, Star, Lock, Zap, Target, Briefcase, TrendingUp, Brain, Award, Users, Clock, AlertCircle, Building2, GraduationCap, Wrench, ChevronRight, Globe, Linkedin, Mail, BarChart3, Shield, Rocket, PenTool, FileCheck, MessageSquare } from 'lucide-react';

// API URL configuration - FIXED VERSION
const getApiUrl = () => {
  if (typeof window !== 'undefined') {
    // For local development
    if (window.location.hostname === 'localhost') {
      return 'http://localhost:3000'; // Next.js default port
    }
    // For production, use current domain (your Vercel app)
    return window.location.origin;
  }
  return '';
};

// Railway backend for resume generation and ATS analysis
const BACKEND_URL = 'https://ai-resume-builder-production-0a65.up.railway.app';

// Frontend API for Stripe payments (uses Next.js API routes)
const FRONTEND_API_URL = getApiUrl();

// Enhanced Stripe checkout handler with detailed debugging
const handleStripeCheckout = async (priceId, userEmail) => {
  // Debug information
  console.log('Debug Info:');
  console.log('- Price ID:', priceId);
  console.log('- User Email:', userEmail);
  console.log('- Frontend API URL:', FRONTEND_API_URL);
  
  // Check if we have required data
  if (!priceId || priceId === 'price_YOUR_PRICE_ID_HERE') {
    alert('Price ID not configured. Check your environment variables.');
    return;
  }
  
  if (!userEmail) {
    alert('Please enter your email address first.');
    return;
  }

  try {
    console.log('Attempting to call frontend API for Stripe checkout...');
    
    const response = await fetch(`${FRONTEND_API_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        priceId: priceId,
        userEmail: userEmail
      })
    });
    
    console.log('Response Status:', response.status);
    console.log('Response OK:', response.ok);
    
    // Get response text first to see what we're getting
    const responseText = await response.text();
    console.log('Raw Response:', responseText);
    
    if (!response.ok) {
      console.error('HTTP Error:', response.status, responseText);
      alert(`HTTP Error ${response.status}: ${responseText}`);
      return;
    }
    
    // Try to parse as JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      alert('Invalid response from server: ' + responseText);
      return;
    }
    
    console.log('Parsed Response:', data);
    
    if (data.url) {
      console.log('Redirecting to:', data.url);
      window.location.href = data.url;
    } else if (data.error) {
      console.error('API Error:', data.error);
      alert('Payment setup error: ' + data.error);
    } else {
      console.error('Unexpected response:', data);
      alert('Unexpected response from payment system');
    }
    
  } catch (error) {
    console.error('Network/Fetch Error:', error);
    alert('Connection error: ' + error.message + '. Check your internet connection.');
  }
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
  const [industries, setIndustries] = useState([]);
  const [atsScore, setAtsScore] = useState(null);
  const [atsAnalysis, setAtsAnalysis] = useState(null);
  const [showAtsModal, setShowAtsModal] = useState(false);
  const [enhancements, setEnhancements] = useState([]);
  const [activeProFeature, setActiveProFeature] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isAnalyzingAts, setIsAnalyzingAts] = useState(false);

  useEffect(() => {
    fetchIndustries();
  }, []);

  const fetchIndustries = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/industries`);
      const data = await response.json();
      setIndustries(data.industries);
    } catch (error) {
      console.error('Failed to fetch industries:', error);
      setIndustries([
        { value: 'tech', label: 'Technology', popular: true },
        { value: 'marketing', label: 'Marketing', popular: true },
        { value: 'sales', label: 'Sales', popular: true },
        { value: 'finance', label: 'Finance', popular: true }
      ]);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateResume = async () => {
    setIsGenerating(true);
    setAtsScore(null);
    setAtsAnalysis(null);
    setEnhancements([]);
    
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
        setAtsScore(data.enhanced.atsScore || 85);
        setEnhancements(data.enhanced.improvements || []);
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
      }
    } catch (error) {
      console.error('Error generating resume:', error);
      alert('Failed to generate resume. Please check your connection and try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const analyzeATS = async () => {
    if (!generatedResume || !formData.jobDescription) {
      alert('Please generate a resume and provide a job description first.');
      return;
    }
    
    setIsAnalyzingAts(true);
    try {
      const resumeText = `${generatedResume.summary} ${generatedResume.experience} ${generatedResume.skills}`;
      
      const response = await fetch(`${BACKEND_URL}/api/analyze-ats`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          resumeText,
          jobDescription: formData.jobDescription
        })
      });
      
      const data = await response.json();
      setAtsScore(data.score);
      setAtsAnalysis(data);
      setShowAtsModal(true);
    } catch (error) {
      console.error('ATS analysis error:', error);
    } finally {
      setIsAnalyzingAts(false);
    }
  };

  // Premium template configurations with actual layout differences
  const templates = {
    professional: {
      name: 'Professional',
      description: 'Classic layout for corporate roles',
      preview: 'Traditional single-column format',
      layout: 'single-column',
      style: {
        container: 'max-w-4xl mx-auto',
        header: 'text-center border-b-2 border-gray-800 pb-6 mb-6',
        section: 'mb-8',
        sectionTitle: 'text-lg font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2',
        body: 'text-gray-700 leading-relaxed',
        skillsLayout: 'flex flex-wrap gap-2'
      }
    },
    modern: {
      name: 'Modern',
      description: 'Clean two-column design',
      preview: 'Sidebar for skills and contact',
      layout: 'two-column',
      style: {
        container: 'grid grid-cols-3 gap-0',
        leftColumn: 'col-span-1 bg-gray-900 text-white p-8',
        rightColumn: 'col-span-2 p-8',
        header: 'mb-8',
        section: 'mb-6',
        sectionTitle: 'text-lg font-bold uppercase tracking-wider mb-3',
        body: 'leading-relaxed',
        skillsLayout: 'space-y-2'
      }
    },
    creative: {
      name: 'Creative',
      description: 'Bold design for creative fields',
      preview: 'Colorful with visual hierarchy',
      layout: 'asymmetric',
      style: {
        container: 'relative',
        header: 'bg-gradient-to-br from-purple-600 to-pink-600 text-white p-12 rounded-t-2xl',
        section: 'mb-8 p-6',
        sectionTitle: 'text-2xl font-bold mb-4 flex items-center gap-3',
        body: 'text-gray-700 leading-relaxed',
        skillsLayout: 'grid grid-cols-2 gap-4',
        accent: 'bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6'
      }
    },
    executive: {
      name: 'Executive',
      description: 'Sophisticated for senior roles',
      preview: 'Elegant with generous spacing',
      layout: 'executive',
      style: {
        container: 'max-w-5xl mx-auto',
        header: 'text-center mb-12 border-t-4 border-b-4 border-amber-600 py-8',
        section: 'mb-10',
        sectionTitle: 'text-xl font-serif text-gray-800 mb-4 flex items-center gap-3',
        body: 'text-gray-700 leading-loose text-justify',
        skillsLayout: 'grid grid-cols-3 gap-6',
        accent: 'border-l-4 border-amber-600 pl-6'
      }
    }
  };

  const ResumePreview = ({ data, template }) => {
    const config = templates[template];
    
    if (template === 'modern') {
      return (
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className={config.style.container}>
            {/* Left Sidebar */}
            <div className={config.style.leftColumn}>
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-1">{data.fullName}</h1>
                <p className="text-gray-300">{formData.jobTitle || 'Professional'}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-400">Contact</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="break-all">{data.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>{data.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>{data.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-gray-400">Skills</h3>
                {data.skillsStructured ? (
                  <div className="space-y-4">
                    {data.skillsStructured.technical && (
                      <div>
                        <p className="text-xs font-semibold text-gray-400 mb-2">Technical</p>
                        {data.skillsStructured.technical.map((skill, i) => (
                          <div key={i} className="text-sm mb-1">{skill}</div>
                        ))}
                      </div>
                    )}
                    {data.skillsStructured.tools && (
                      <div>
                        <p className="text-xs font-semibold text-gray-400 mb-2">Tools</p>
                        {data.skillsStructured.tools.map((skill, i) => (
                          <div key={i} className="text-sm mb-1">{skill}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-1 text-sm">
                    {data.skills.split('•').map((skill, i) => (
                      skill.trim() && <div key={i}>{skill.trim()}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Content */}
            <div className={config.style.rightColumn}>
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Professional Summary</h2>
                <p className="text-gray-700 leading-relaxed">{data.summary}</p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Experience</h2>
                <div className="space-y-1 text-gray-700">
                  {data.experience.split('\n').map((line, i) => (
                    line.trim() && (
                      <p key={i} className={line.startsWith('•') ? 'ml-4' : 'font-semibold mt-4'}>
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </section>
              
              {data.achievements && (
                <section className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h2>
                  <div className="space-y-2 text-gray-700">
                    {data.achievements.map((achievement, i) => (
                      <p key={i}>{achievement}</p>
                    ))}
                  </div>
                </section>
              )}
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
                <p className="text-gray-700">{data.education}</p>
              </section>
            </div>
          </div>
        </div>
      );
    } else if (template === 'creative') {
      return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className={config.style.header}>
            <h1 className="text-4xl font-bold mb-2">{data.fullName}</h1>
            <p className="text-xl opacity-90">{formData.jobTitle || 'Creative Professional'}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <span>{data.email}</span>
              <span>•</span>
              <span>{data.phone}</span>
              <span>•</span>
              <span>{data.location}</span>
            </div>
          </div>
          
          <div className="p-8">
            <section className={config.style.accent + ' mb-8'}>
              <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-pink-600" />
                Experience Journey
              </h2>
              <div className="space-y-2 pl-8 border-l-4 border-pink-200">
                {data.experience.split('\n').map((line, i) => (
                  line.trim() && (
                    <p key={i} className={line.startsWith('•') ? 'text-gray-700' : 'font-bold text-lg text-purple-800 mt-4'}>
                      {line}
                    </p>
                  )
                ))}
              </div>
            </section>
            
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <Brain className="w-6 h-6 text-purple-600" />
                  Skills
                </h2>
                {data.skillsStructured ? (
                  <div className="space-y-3">
                    {Object.entries(data.skillsStructured).map(([category, skills]) => (
                      <div key={category} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                        <p className="font-semibold text-purple-800 capitalize mb-2">{category}</p>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, i) => (
                            <span key={i} className="bg-white px-3 py-1 rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {data.skills.split('•').map((skill, i) => (
                      skill.trim() && (
                        <span key={i} className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-sm">
                          {skill.trim()}
                        </span>
                      )
                    ))}
                  </div>
                )}
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-pink-600" />
                  Education
                </h2>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
                  <p className="text-gray-700">{data.education}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      );
    } else if (template === 'executive') {
      return (
        <div className="bg-white rounded-lg shadow-2xl p-12">
          <div className={config.style.header}>
            <h1 className="text-3xl font-serif text-gray-900 mb-2">{data.fullName}</h1>
            <p className="text-xl text-gray-700 font-light">{formData.jobTitle || 'Executive Leader'}</p>
            <div className="flex justify-center gap-6 mt-4 text-sm text-gray-600">
              <span>{data.email}</span>
              <span>|</span>
              <span>{data.phone}</span>
              <span>|</span>
              <span>{data.location}</span>
            </div>
          </div>
          
          <section className={config.style.section}>
            <h2 className={config.style.sectionTitle}>
              <Award className="w-5 h-5 text-amber-600" />
              Executive Summary
            </h2>
            <div className={config.style.accent}>
              <p className={config.style.body}>{data.summary}</p>
            </div>
          </section>
          
          <section className={config.style.section}>
            <h2 className={config.style.sectionTitle}>
              <Briefcase className="w-5 h-5 text-amber-600" />
              Leadership Experience
            </h2>
            <div className={config.style.body}>
              {data.experience.split('\n').map((line, i) => (
                line.trim() && (
                  <p key={i} className={line.startsWith('•') ? 'mb-2' : 'font-semibold text-lg mt-6 mb-3'}>
                    {line}
                  </p>
                )
              ))}
            </div>
          </section>
          
          {data.achievements && (
            <section className={config.style.section}>
              <h2 className={config.style.sectionTitle}>
                <Target className="w-5 h-5 text-amber-600" />
                Notable Achievements
              </h2>
              <div className={config.style.accent}>
                {data.achievements.map((achievement, i) => (
                  <p key={i} className="mb-3">{achievement}</p>
                ))}
              </div>
            </section>
          )}
          
          <div className="grid grid-cols-2 gap-12">
            <section>
              <h2 className={config.style.sectionTitle}>
                <Brain className="w-5 h-5 text-amber-600" />
                Core Competencies
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {data.skillsStructured ? (
                  Object.values(data.skillsStructured).flat().slice(0, 8).map((skill, i) => (
                    <div key={i} className="border-l-3 border-amber-200 pl-4">
                      {skill}
                    </div>
                  ))
                ) : (
                  data.skills.split('•').slice(0, 8).map((skill, i) => (
                    skill.trim() && (
                      <div key={i} className="border-l-3 border-amber-200 pl-4">
                        {skill.trim()}
                      </div>
                    )
                  ))
                )}
              </div>
            </section>
            
            <section>
              <h2 className={config.style.sectionTitle}>
                <GraduationCap className="w-5 h-5 text-amber-600" />
                Education
              </h2>
              <p className={config.style.body}>{data.education}</p>
            </section>
          </div>
        </div>
      );
    } else {
      // Professional template (default)
      return (
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className={config.style.header}>
            <h1 className="text-3xl font-bold text-gray-900">{data.fullName}</h1>
            <p className="text-lg text-gray-700 mt-1">{formData.jobTitle || 'Professional'}</p>
            <div className="flex justify-center gap-4 mt-3 text-gray-600">
              <span>{data.email}</span>
              <span>•</span>
              <span>{data.phone}</span>
              <span>•</span>
              <span>{data.location}</span>
            </div>
          </div>
          
          <section className={config.style.section}>
            <h2 className={config.style.sectionTitle}>Professional Summary</h2>
            <p className={config.style.body}>{data.summary}</p>
          </section>
          
          <section className={config.style.section}>
            <h2 className={config.style.sectionTitle}>Professional Experience</h2>
            <div className={config.style.body}>
              {data.experience.split('\n').map((line, i) => (
                line.trim() && (
                  <p key={i} className={line.startsWith('•') ? 'mb-2 ml-4' : 'font-semibold mt-4 mb-2'}>
                    {line}
                  </p>
                )
              ))}
            </div>
          </section>
          
          <section className={config.style.section}>
            <h2 className={config.style.sectionTitle}>Education</h2>
            <p className={config.style.body}>{data.education}</p>
          </section>
          
          <section className={config.style.section}>
            <h2 className={config.style.sectionTitle}>Skills & Expertise</h2>
            <div className={config.style.skillsLayout}>
              {data.skills.split('•').map((skill, i) => (
                skill.trim() && (
                  <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">
                    {skill.trim()}
                  </span>
                )
              ))}
            </div>
          </section>
        </div>
      );
    }
  };

  const ProFeatureModal = ({ feature, onClose }) => {
    const features = {
      coverLetter: {
        title: 'AI Cover Letters',
        description: 'Generate tailored cover letters that complement your resume',
        icon: <PenTool className="w-8 h-8 text-blue-600" />
      },
      linkedin: {
        title: 'LinkedIn Optimizer',
        description: 'Optimize your LinkedIn profile for maximum visibility',
        icon: <Linkedin className="w-8 h-8 text-blue-600" />
      },
      pdf: {
        title: 'Download PDF/DOCX',
        description: 'Export your resume in multiple professional formats',
        icon: <FileCheck className="w-8 h-8 text-blue-600" />
      }
    };

    const selected = features[feature];
    if (!selected) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full">
          <div className="text-center mb-6">
            {selected.icon}
            <h3 className="text-2xl font-bold mt-4 mb-2">{selected.title}</h3>
            <p className="text-gray-600">{selected.description}</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3">Pro Feature Benefits:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Unlimited access to all premium features</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>AI-powered optimization for best results</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                <span>Regular updates and new features</span>
              </li>
            </ul>
          </div>
          
          <button
            onClick={() => {
              onClose();
              setShowPricing(true);
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition mb-3"
          >
            Upgrade to Pro - $9.99/mo
          </button>
          
          <button
            onClick={onClose}
            className="w-full text-gray-500 hover:text-gray-700"
          >
            Maybe later
          </button>
        </div>
      </div>
    );
  };

  const StatsSection = () => (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 mb-8 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted by Job Seekers Worldwide</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Users className="w-10 h-10" />
            </div>
            <p className="text-3xl font-bold">127,000+</p>
            <p className="text-sm opacity-90">Active Users</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-10 h-10" />
            </div>
            <p className="text-3xl font-bold">89%</p>
            <p className="text-sm opacity-90">Interview Rate</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Shield className="w-10 h-10" />
            </div>
            <p className="text-3xl font-bold">95%</p>
            <p className="text-sm opacity-90">ATS Success</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Award className="w-10 h-10" />
            </div>
            <p className="text-3xl font-bold">4.9/5</p>
            <p className="text-sm opacity-90">User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );

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
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>SSL Secure</span>
              </div>
              <button 
                onClick={() => setShowPricing(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Resume enhanced successfully with AI!</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <StatsSection />
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              Build Your Resume
            </h2>
            
            <div className="space-y-5">
              {/* Industry Selection with Icons */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Your Industry <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {industries.filter(ind => ind.popular).map(ind => (
                    <button
                      key={ind.value}
                      onClick={() => setFormData({...formData, industry: ind.value})}
                      className={`p-3 rounded-lg border-2 transition-all ${
                        formData.industry === ind.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-sm font-medium">{ind.label}</div>
                    </button>
                  ))}
                </div>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">More Industries...</option>
                  {industries.filter(ind => !ind.popular).map(ind => (
                    <option key={ind.value} value={ind.value}>
                      {ind.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Job Title
                  <span className="text-xs text-gray-500 ml-2">(e.g., Senior Software Engineer)</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your target job title"
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="New York, NY"
                  />
                </div>
              </div>
              
              {/* Professional Summary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Professional Summary
                  <span className="text-xs text-gray-500 ml-2">(Optional - AI will enhance)</span>
                </label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief overview of your professional background and key strengths..."
                />
              </div>
              
              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Work Experience
                  <span className="text-xs text-gray-500 ml-2">(List your roles, companies, and key achievements)</span>
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Software Engineer at TechCorp (2020-2023)&#10;- Developed microservices architecture&#10;- Led team of 5 engineers&#10;- Improved system performance by 40%"
                />
              </div>
              
              {/* Education */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Bachelor of Science in Computer Science, MIT (2019)"
                />
              </div>
              
              {/* Skills */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skills
                  <span className="text-xs text-gray-500 ml-2">(Comma separated)</span>
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="JavaScript, React, Node.js, Python, AWS, Docker"
                />
              </div>
              
              {/* Job Description for ATS */}
              <div className="border-t pt-5">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Pro Tip: Add Job Description</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Paste the target job description below for AI to optimize your resume with matching keywords and requirements.
                      </p>
                    </div>
                  </div>
                </div>
                
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Job Description
                  <span className="text-xs text-gray-500 ml-2">(For ATS optimization)</span>
                </label>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Paste the complete job description here..."
                />
              </div>

              {/* Template Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Choose Template Design</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(templates).map(([key, template]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTemplate(key)}
                      className={`p-4 rounded-lg border-2 transition-all group ${
                        selectedTemplate === key 
                          ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}
                    >
                      <div className={`h-16 mb-3 rounded overflow-hidden ${
                        key === 'modern' ? 'bg-gray-900' :
                        key === 'creative' ? 'bg-gradient-to-br from-purple-400 to-pink-400' :
                        key === 'executive' ? 'bg-gradient-to-r from-amber-100 to-amber-200' :
                        'bg-gray-200'
                      }`}>
                        <div className="h-full flex">
                          {key === 'modern' && (
                            <>
                              <div className="w-1/3 bg-gray-800"></div>
                              <div className="w-2/3 bg-white"></div>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="font-medium text-sm">{template.name}</p>
                      <p className="text-xs text-gray-600 mt-1">{template.description}</p>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Generate Button */}
              <button
                onClick={generateResume}
                disabled={!formData.fullName || !formData.email || !formData.phone || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>AI is crafting your perfect resume...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 group-hover:animate-pulse" />
                    <span>Generate AI-Enhanced Resume</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              {/* ATS Analysis Button */}
              {generatedResume && formData.jobDescription && (
                <button
                  onClick={analyzeATS}
                  disabled={isAnalyzingAts}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isAnalyzingAts ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Analyzing ATS compatibility...</span>
                    </>
                  ) : (
                    <>
                      <Target className="w-4 h-4" />
                      <span>Analyze ATS Score</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
          
          {/* Preview Section */}
          <div className="space-y-6">
            {generatedResume ? (
              <>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Award className="w-6 h-6 text-purple-600" />
                      Your AI-Enhanced Resume
                    </h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setActiveProFeature('pdf')}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2 text-sm"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                  
                  {/* AI Enhancement Info */}
                  {generatedResume.enhancementSource && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-purple-700">
                        <Brain className="w-4 h-4" />
                        <span className="font-medium">Enhanced by: {generatedResume.enhancementSource}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* ATS Score Display */}
                  {atsScore && (
                    <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-white ${
                          atsScore >= 80 ? 'bg-green-500' : 
                          atsScore >= 60 ? 'bg-yellow-500' : 
                          'bg-red-500'
                        }`}>
                          {atsScore}%
                        </div>
                        <div>
                          <p className="font-semibold">ATS Compatibility Score</p>
                          <p className="text-sm text-gray-600">
                            {atsScore >= 80 ? 'Excellent match!' : 
                             atsScore >= 60 ? 'Good, but can improve' : 
                             'Needs optimization'}
                          </p>
                        </div>
                      </div>
                      {formData.jobDescription && (
                        <button
                          onClick={analyzeATS}
                          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Re-analyze
                        </button>
                      )}
                    </div>
                  )}
                  
                  {/* Enhancements Applied */}
                  {enhancements.length > 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        AI Enhancements Applied:
                      </h3>
                      <ul className="text-sm text-green-700 space-y-1">
                        {enhancements.map((enhancement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            {enhancement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Resume Preview */}
                <ResumePreview data={generatedResume} template={selectedTemplate} />
                
                {/* Pro Features */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Rocket className="w-6 h-6" />
                    Unlock Pro Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <button
                      onClick={() => setActiveProFeature('coverLetter')}
                      className="bg-white/20 backdrop-blur rounded-lg p-4 text-left hover:bg-white/30 transition group"
                    >
                      <PenTool className="w-8 h-8 mb-2 group-hover:scale-110 transition" />
                      <h4 className="font-semibold">AI Cover Letters</h4>
                      <p className="text-sm opacity-90">Match your resume perfectly</p>
                    </button>
                    <button
                      onClick={() => setActiveProFeature('linkedin')}
                      className="bg-white/20 backdrop-blur rounded-lg p-4 text-left hover:bg-white/30 transition group"
                    >
                      <Linkedin className="w-8 h-8 mb-2 group-hover:scale-110 transition" />
                      <h4 className="font-semibold">LinkedIn Optimizer</h4>
                      <p className="text-sm opacity-90">Boost profile visibility</p>
                    </button>
                  </div>
                  <button
                    onClick={() => setShowPricing(true)}
                    className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    Start 7-Day Free Trial → $9.99/mo
                  </button>
                  <p className="text-xs text-center mt-2 opacity-80">Cancel anytime. No hidden fees.</p>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-full mb-6">
                  <FileText className="w-20 h-20 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Your AI-Enhanced Resume Awaits
                </h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Fill in your information and let our Multi-AI engine (Gemini + Claude + DeepSeek) create a professional, ATS-optimized resume that gets you interviews.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="font-medium text-blue-800">Multi-AI</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-medium text-green-800">ATS Ready</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-medium text-purple-800">95% Success</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="font-medium text-orange-800">5 Minutes</p>
                  </div>
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
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>4 professional templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Basic ATS analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    <Lock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>PDF/DOCX download</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    <Lock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Cover letters</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    <Lock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>LinkedIn optimizer</span>
                  </li>
                </ul>
                <button className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium">
                  Current Plan
                </button>
              </div>
              
              {/* Pro Plan */}
              <div className="border-2 border-blue-500 rounded-xl p-6 relative transform scale-105 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <p className="text-3xl font-bold mb-1">$9.99<span className="text-lg font-normal text-gray-500">/mo</span></p>
                <p className="text-gray-500 mb-6">Everything you need to land your dream job</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Unlimited</strong> AI resumes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>All premium templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Advanced ATS optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>PDF & DOCX downloads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>AI cover letter generator</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>LinkedIn profile optimizer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Priority email support</span>
                  </li>
                </ul>
                <button 
                  onClick={() => handleStripeCheckout('price_1S8ORgFzgsFHkAQkppnLxKsD', formData.email)}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
                >
                  Start 7-Day Free Trial
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">Cancel anytime. No charges during trial.</p>
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
                    <span>1-on-1 career coaching call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Resume review by experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Interview preparation guide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Salary negotiation tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Team collaboration (5 seats)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>API access</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition">
                  Contact Sales
                </button>
              </div>
            </div>
            
            {/* Trust badges */}
            <div className="border-t pt-6">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>30-day money back</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <span>24/7 Support</span>
                </div>
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

      {/* ATS Analysis Modal */}
      {showAtsModal && atsAnalysis && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className={`w-8 h-8 ${atsScore >= 80 ? 'text-green-600' : atsScore >= 60 ? 'text-yellow-600' : 'text-red-600'}`} />
              ATS Analysis Report
            </h3>
            
            {/* Score Display */}
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full text-4xl font-bold text-white mb-4 ${
                atsScore >= 80 ? 'bg-green-500' : 
                atsScore >= 60 ? 'bg-yellow-500' : 
                'bg-red-500'
              }`}>
                {atsScore}%
              </div>
              <p className="text-lg font-medium">
                {atsScore >= 80 ? 'Excellent ATS Compatibility!' : 
                 atsScore >= 60 ? 'Good Score - Room for Improvement' : 
                 'Needs Optimization for ATS'}
              </p>
            </div>
            
            {/* Breakdown */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold mb-4">Score Breakdown</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Keyword Match</span>
                    <span>{atsAnalysis.matchPercentage}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${atsAnalysis.matchPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>• Matched Keywords: {atsAnalysis.matchedKeywords}/{atsAnalysis.totalKeywords}</p>
                  <p>• Structure Score: {atsAnalysis.breakdown?.structureScore || 0}/50</p>
                </div>
              </div>
            </div>
            
            {/* Suggestions */}
            {atsAnalysis.suggestions && atsAnalysis.suggestions.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Recommendations</h4>
                <ul className="space-y-2">
                  {atsAnalysis.suggestions.map((suggestion, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Missing Keywords */}
            {atsAnalysis.missingKeywords && atsAnalysis.missingKeywords.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Missing Keywords to Add</h4>
                <div className="flex flex-wrap gap-2">
                  {atsAnalysis.missingKeywords.map((keyword, i) => (
                    <span key={i} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <button
              onClick={() => setShowAtsModal(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Got it, Close
            </button>
          </div>
        </div>
      )}

      {/* Pro Feature Modal */}
      {activeProFeature && (
        <ProFeatureModal 
          feature={activeProFeature} 
          onClose={() => setActiveProFeature(null)} 
        />
      )}
      
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ResumeBuilder;
