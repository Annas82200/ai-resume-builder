'use client'

import React, { useState } from 'react';
import { Upload, CheckCircle, AlertTriangle, Target, ArrowRight, Star, Shield, Brain } from 'lucide-react';
import Link from 'next/link';

export default function ATSScannerPage() {
  const [resumeText, setResumeText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [email, setEmail] = useState('');

  const analyzeResume = async () => {
    if (!resumeText.trim()) {
      alert('Please paste your resume text first');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate ATS analysis (you can connect to your real backend later)
    setTimeout(() => {
      const wordCount = resumeText.split(' ').length;
      const score = Math.min(95, Math.max(40, 60 + (wordCount / 50)));
      
      const issues = [];
      if (!resumeText.toLowerCase().includes('experience')) issues.push('Missing work experience keywords');
      if (!resumeText.toLowerCase().includes('skills')) issues.push('Skills section needs optimization');
      if (wordCount < 200) issues.push('Resume too short - add more detail');
      if (!resumeText.includes('•') && !resumeText.includes('-')) issues.push('Use bullet points for better ATS parsing');
      
      setResults({
        score: Math.round(score),
        issues: issues,
        wordCount: wordCount,
        recommendations: [
          'Add industry-specific keywords',
          'Use action verbs like "implemented", "managed", "created"',
          'Include quantified achievements with numbers',
          'Optimize for ATS with proper formatting'
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Resumind Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Resumind</h1>
                <p className="text-sm text-gray-600">AI that understands your mind</p>
              </div>
            </Link>
            <Link 
              href="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
            >
              Create Resume
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-6">
            <Target className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free ATS Resume Scanner
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Check if your resume will pass through Applicant Tracking Systems (ATS) used by 95% of companies
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">100% Free</h3>
              <p className="text-sm text-gray-600">No signup required</p>
            </div>
            <div className="text-center">
              <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">AI-Powered</h3>
              <p className="text-sm text-gray-600">Advanced analysis</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Instant Results</h3>
              <p className="text-sm text-gray-600">Get score in seconds</p>
            </div>
          </div>
        </div>

        {/* Scanner Interface */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Paste Your Resume Text</h2>
          
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Copy and paste your current resume text here..."
            className="w-full h-64 p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none"
          />
          
          <div className="mt-6">
            <button
              onClick={analyzeResume}
              disabled={isAnalyzing || !resumeText.trim()}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analyzing your resume...</span>
                </>
              ) : (
                <>
                  <Target className="w-5 h-5" />
                  <span>Scan My Resume</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your ATS Score</h2>
            
            {/* Score Display */}
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full text-4xl font-bold text-white mb-4 ${
                results.score >= 80 ? 'bg-green-500' : 
                results.score >= 60 ? 'bg-yellow-500' : 
                'bg-red-500'
              }`}>
                {results.score}%
              </div>
              <p className="text-lg font-medium">
                {results.score >= 80 ? 'Great! Your resume is ATS-friendly' : 
                 results.score >= 60 ? 'Good, but needs improvement' : 
                 'Needs significant optimization'}
              </p>
            </div>

            {/* Issues */}
            {results.issues.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Issues Found ({results.issues.length})
                </h3>
                <ul className="space-y-2">
                  {results.issues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2 text-red-700">
                      <span className="text-red-500 mt-1">•</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommendations */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-blue-600 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Recommendations
              </h3>
              <ul className="space-y-2">
                {results.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-blue-700">
                    <span className="text-blue-500 mt-1">•</span>
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Upgrade CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Want to Fix These Issues Automatically?</h3>
              <p className="mb-4 opacity-90">
                Our AI will rewrite your resume to score 95%+ on ATS systems and get you more interviews
              </p>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                <Star className="w-5 h-5" />
                Fix My Resume with AI
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why ATS Optimization Matters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700">of large companies use ATS systems</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
              <p className="text-gray-700">more likely to get interviews</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
              <p className="text-gray-700">of resumes never reach human eyes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
