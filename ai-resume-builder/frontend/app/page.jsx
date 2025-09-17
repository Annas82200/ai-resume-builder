'use client'

import React, { useState, useEffect } from 'react';
import { Download, Sparkles, FileText, CheckCircle, Star, Lock, Zap, Target, Briefcase, TrendingUp, Brain, Award, Users, Clock, AlertCircle } from 'lucide-react';

// API URL configuration
// For production, update this with your actual Railway backend URL
const getApiUrl = () => {
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    // For artifact preview, use a placeholder
    if (window.location.hostname === 'claude.ai') {
      return 'https://your-backend.railway.app';
    }
    // For local development
    if (window.location.hostname === 'localhost') {
      return 'http://localhost:3001';
    }
    // For production, use environment variable or your actual URL
    try {
      return process.env.NEXT_PUBLIC_API_URL || 'ai-resume-builder-production-0505.up.railway.app';
    } catch {
      // If process is not defined (in artifacts), use placeholder
      return 'https://your-backend.railway.app';
    }
  }
  return 'http://localhost:3001';
};

const API_URL = getApiUrl();

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
    industry: 'general',
    jobTitle: '',
    jobDescription: ''
  });
  
  const [generatedResume, setGeneratedResume] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [showPricing, setShowPricing] = useState(false);
  const [industries, setIndustries] = useState([]);
  const [atsScore, setAtsScore] = useState(null);
  const [showAtsModal, setShowAtsModal] = useState(false);
  const [enhancements, setEnhancements] = useState([]);

  useEffect(() => {
    fetchIndustries();
  }, []);

  const fetchIndustries = async () => {
    try {
      const response = await fetch(`${API_URL}/api/industries`);
      const data = await response.json();
      setIndustries(data.industries);
    } catch (error) {
      console.error('Failed to fetch industries:', error);
      // Fallback industries
      setIndustries([
        { value: 'tech', label: 'Technology', icon: '💻' },
        { value: 'marketing', label: 'Marketing', icon: '📈' },
        { value: 'sales', label: 'Sales', icon: '🤝' },
        { value: 'finance', label: 'Finance', icon: '💰' },
        { value: 'general', label: 'General/Other', icon: '📋' }
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
    setEnhancements([]);
    
    try {
      const response = await fetch(`${API_URL}/api/enhance-resume`, {
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
    
    try {
      const resumeText = `${generatedResume.summary} ${generatedResume.experience} ${generatedResume.skills}`;
      
      const response = await fetch(`${API_URL}/api/analyze-ats`, {
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
      setShowAtsModal(true);
    } catch (error) {
      console.error('ATS analysis error:', error);
    }
  };

  const templates = {
    professional: {
      name: 'Professional',
      description: 'Clean and traditional',
      bgColor: 'bg-white',
      headerBg: 'bg-gradient-to-r from-gray-800 to-gray-900',
      headerText: 'text-white',
      sectionColor: 'text-gray-900',
      accentColor: 'text-blue-600',
      borderColor: 'border-gray-300'
    },
    modern: {
      name: 'Modern',
      description: 'Contemporary design',
      bgColor: 'bg-gradient-to-br from-gray-50 to-blue-50',
      headerBg: 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600',
      headerText: 'text-white',
      sectionColor: 'text-gray-800',
      accentColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    creative: {
      name: 'Creative',
      description: 'Stand out from the crowd',
      bgColor: 'bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50',
      headerBg: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500',
      headerText: 'text-white',
      sectionColor: 'text-gray-800',
      accentColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    executive: {
      name: 'Executive',
      description: 'Senior-level elegance',
      bgColor: 'bg-stone-50',
      headerBg: 'bg-gradient-to-r from-stone-900 to-stone-800',
      headerText: 'text-amber-50',
      sectionColor: 'text-stone-900',
      accentColor: 'text-amber-700',
      borderColor: 'border-stone-300'
    }
  };

  const ResumePreview = ({ data, template }) => {
    const style = templates[template];
    
    return (
      <div className={`${style.bgColor} rounded-lg shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01]`}>
        {/* Header */}
        <div className={`${style.headerBg} ${style.headerText} p-8`}>
          <h1 className="text-3xl font-bold mb-2">{data.fullName}</h1>
          <p className="text-lg opacity-90">{formData.jobTitle || 'Professional'}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm opacity-80">
            <span className="flex items-center gap-1">📧 {data.email}</span>
            <span className="flex items-center gap-1">📱 {data.phone}</span>
            <span className="flex items-center gap-1">📍 {data.location}</span>
          </div>
        </div>
        
        {/* ATS Score Badge */}
        {atsScore && (
          <div className="px-8 pt-6">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              atsScore >= 80 ? 'bg-green-100 text-green-700' : 
              atsScore >= 60 ? 'bg-yellow-100 text-yellow-700' : 
              'bg-red-100 text-red-700'
            }`}>
              <Target className="w-4 h-4" />
              <span className="font-semibold">ATS Score: {atsScore}%</span>
            </div>
          </div>
        )}
        
        <div className="p-8 space-y-6">
          {/* Professional Summary */}
          <section>
            <h2 className={`text-xl font-bold ${style.accentColor} mb-3 flex items-center gap-2`}>
              <Sparkles className="w-5 h-5" />
              Professional Summary
            </h2>
            <div className={`${style.sectionColor} leading-relaxed pl-7`}>
              {data.summary}
            </div>
          </section>
          
          {/* Experience */}
          <section>
            <h2 className={`text-xl font-bold ${style.accentColor} mb-3 flex items-center gap-2`}>
              <Briefcase className="w-5 h-5" />
              Experience
            </h2>
            <div className={`${style.sectionColor} space-y-2 pl-7`}>
              {data.experience.split('\n').map((line, i) => (
                line.trim() && <p key={i} className="flex items-start">
                  {line.startsWith('•') && <span className={`${style.accentColor} mr-2`}>▸</span>}
                  <span>{line.replace('•', '').trim()}</span>
                </p>
              ))}
            </div>
          </section>
          
          {/* Education */}
          <section>
            <h2 className={`text-xl font-bold ${style.accentColor} mb-3 flex items-center gap-2`}>
              <Award className="w-5 h-5" />
              Education
            </h2>
            <div className={`${style.sectionColor} pl-7`}>
              {data.education}
            </div>
          </section>
          
          {/* Skills */}
          <section>
            <h2 className={`text-xl font-bold ${style.accentColor} mb-3 flex items-center gap-2`}>
              <Brain className="w-5 h-5" />
              Skills
            </h2>
            <div className={`${style.sectionColor} pl-7`}>
              {data.skillsStructured ? (
                <div className="space-y-3">
                  {data.skillsStructured.technical && (
                    <div>
                      <span className="font-semibold">Technical:</span>
                      <span className="ml-2">{data.skillsStructured.technical.join(' • ')}</span>
                    </div>
                  )}
                  {data.skillsStructured.soft && (
                    <div>
                      <span className="font-semibold">Soft Skills:</span>
                      <span className="ml-2">{data.skillsStructured.soft.join(' • ')}</span>
                    </div>
                  )}
                  {data.skillsStructured.tools && (
                    <div>
                      <span className="font-semibold">Tools:</span>
                      <span className="ml-2">{data.skillsStructured.tools.join(' • ')}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {data.skills.split('•').map((skill, i) => (
                    skill.trim() && (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm border ${style.borderColor} ${style.bgColor}`}>
                        {skill.trim()}
                      </span>
                    )
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    );
  };

  const StatsSection = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg p-4 text-center shadow-md">
        <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
        <p className="text-2xl font-bold">50K+</p>
        <p className="text-sm text-gray-600">Active Users</p>
      </div>
      <div className="bg-white rounded-lg p-4 text-center shadow-md">
        <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
        <p className="text-2xl font-bold">85%</p>
        <p className="text-sm text-gray-600">Interview Rate</p>
      </div>
      <div className="bg-white rounded-lg p-4 text-center shadow-md">
        <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
        <p className="text-2xl font-bold">4.9/5</p>
        <p className="text-sm text-gray-600">User Rating</p>
      </div>
      <div className="bg-white rounded-lg p-4 text-center shadow-md">
        <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
        <p className="text-2xl font-bold">5 min</p>
        <p className="text-sm text-gray-600">Avg. Time</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AI Resume Pro</h1>
                <p className="text-sm text-gray-600">Beat ATS, Land Interviews</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowPricing(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
              >
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <StatsSection />
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-600" />
              Your Information
            </h2>
            
            <div className="space-y-4">
              {/* Industry Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {industries.map(ind => (
                    <option key={ind.value} value={ind.value}>
                      {ind.icon} {ind.label}
                    </option>
                  ))}
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
              
              {/* Personal Info */}
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
              
              <div className="grid grid-cols-2 gap-4">
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
                  placeholder="Brief overview of your professional background..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience
                  <span className="text-xs text-gray-500 ml-2">(List your roles and achievements)</span>
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Software Engineer at TechCorp (2020-2023)&#10;- Developed features for web application&#10;- Led team of 5 developers"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Bachelor's in Computer Science, MIT (2019)"
                />
              </div>
              
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
                  placeholder="JavaScript, React, Node.js, Python"
                />
              </div>
              
              {/* Job Description for ATS */}
              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Target Job Description
                  <span className="text-xs text-gray-500 ml-2">(For ATS optimization)</span>
                </label>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Paste the job description here for better keyword matching..."
                />
              </div>

              {/* Template Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Choose Template</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(templates).map(([key, template]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTemplate(key)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedTemplate === key 
                          ? 'border-blue-500 bg-blue-50 shadow-md transform scale-105' 
                          : 'border-gray-200 hover:border-gray-300 hover:shadow'
                      }`}
                    >
                      <div className={`h-8 rounded mb-2 ${template.headerBg}`}></div>
                      <p className="font-medium">{template.name}</p>
                      <p className="text-xs text-gray-600">{template.description}</p>
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={generateResume}
                disabled={!formData.fullName || !formData.email || !formData.phone || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    AI is enhancing your resume...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Generate AI-Enhanced Resume
                  </>
                )}
              </button>
              
              {generatedResume && formData.jobDescription && (
                <button
                  onClick={analyzeATS}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Target className="w-4 h-4" />
                  Analyze ATS Compatibility
                </button>
              )}
            </div>
          </div>
          
          {/* Preview Section */}
          <div className="space-y-6">
            {generatedResume ? (
              <>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Award className="w-6 h-6 text-purple-600" />
                    Your Enhanced Resume
                  </h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowPricing(true)}
                      className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
                
                {/* Enhancements Applied */}
                {enhancements.length > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
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
                
                <ResumePreview data={generatedResume} template={selectedTemplate} />
                
                {/* Upgrade CTA */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">🚀 Unlock Pro Features</h3>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Unlimited AI-enhanced resumes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      ATS keyword optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Cover letter generator
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      LinkedIn profile optimizer
                    </li>
                  </ul>
                  <button
                    onClick={() => setShowPricing(true)}
                    className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    Start 7-Day Free Trial
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-xl p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="bg-gray-100 p-6 rounded-full mb-6">
                  <FileText className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Your AI-Enhanced Resume Will Appear Here
                </h3>
                <p className="text-gray-500 mb-6">
                  Fill in your information and let our AI create a professional, ATS-optimized resume
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Brain className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <p className="text-blue-700">AI-Powered</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <p className="text-green-700">ATS-Ready</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Basic</h3>
                <p className="text-3xl font-bold mb-1">$0</p>
                <p className="text-gray-500 mb-6">Forever free</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>1 AI-enhanced resume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    <Lock className="w-5 h-5 mt-0.5" />
                    <span>ATS analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    <Lock className="w-5 h-5 mt-0.5" />
                    <span>Cover letters</span>
                  </li>
                </ul>
                <button className="w-full py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium">
                  Current Plan
                </button>
              </div>
              
              <div className="border-2 border-blue-500 rounded-xl p-6 relative transform scale-105 shadow-xl">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <p className="text-3xl font-bold mb-1">$9.99<span className="text-lg font-normal text-gray-500">/mo</span></p>
                <p className="text-gray-500 mb-6">Best for job seekers</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span><strong>Unlimited</strong> AI resumes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>All premium templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>ATS score analyzer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>AI cover letters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Download as PDF/DOCX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">
                  Start 7-Day Free Trial
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">No credit card required</p>
              </div>
              
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <p className="text-3xl font-bold mb-1">$29.99<span className="text-lg font-normal text-gray-500">/mo</span></p>
                <p className="text-gray-500 mb-6">For teams & agencies</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>LinkedIn optimizer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>1-on-1 career coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Team collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition">
                  Contact Sales
                </button>
              </div>
            </div>
            
            {/* Money-back guarantee */}
            <div className="text-center mb-6">
              <p className="text-gray-600">
                <span className="font-semibold">30-day money-back guarantee</span> • Cancel anytime • Secure payment
              </p>
            </div>
            
            <button 
              onClick={() => setShowPricing(false)}
              className="mx-auto block text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ATS Analysis Modal */}
      {showAtsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-8 h-8 text-green-600" />
              ATS Analysis Results
            </h3>
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-green-600">{atsScore}%</p>
              <p className="text-gray-600">ATS Compatibility Score</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                Your resume is well-optimized for ATS systems. It includes relevant keywords and follows best practices for automated scanning.
              </p>
            </div>
            <button
              onClick={() => setShowAtsModal(false)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
