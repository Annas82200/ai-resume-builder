'use client'

import { FileText, Briefcase, Code, Palette, Award, ChevronRight, Eye, Download, Star, Building2, GraduationCap } from 'lucide-react';

export default function PhysicalTherapistPage() {
  const example = {
    id: 'physical-therapist',
    name: 'Michael Chen',
    title: 'Physical Therapist',
    industry: 'Healthcare',
    template: 'modern',
    description: 'Sports rehabilitation specialist',
    highlights: ['DPT certified', 'Sports injury expert', '95% recovery rate'],
    gradient: 'from-green-600 to-teal-600',
    icon: GraduationCap,
    rating: 4.8,
    downloads: 6200
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <a href="/examples" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Back to Examples
              </a>
              <a 
                href="/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
              >
                Create Resume
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {example.name} - {example.title}
          </h1>
          <p className="text-xl text-gray-600">
            {example.description}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Resume Highlights</h2>
          <p className="text-gray-700 mb-4">
            This resume example demonstrates best practices for {example.industry.toLowerCase()} professionals.
          </p>
          <ul className="space-y-2 mb-6">
            {example.highlights.map((h, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-green-600 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          
          {/* Full Resume Preview */}
          <div className="border-t pt-8 mt-8">
            <h3 className="text-xl font-bold mb-6 text-center">Full Resume Preview</h3>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">{example.name}</h1>
                <p className="text-xl text-gray-700 mt-2">{example.title}</p>
                <p className="text-gray-600 mt-2">📧 michael.chen@email.com | 📱 (555) 234-5678 | 📍 Los Angeles, CA</p>
              </div>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Licensed Physical Therapist specializing in orthopedic and sports rehabilitation. Expert in developing 
                  personalized treatment plans that have helped 500+ patients return to active lifestyles. Published 
                  researcher in biomechanics and injury prevention.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Professional Experience
                </h2>
                <div className="mb-6">
                  <h3 className="font-bold text-lg">Senior Physical Therapist</h3>
                  <p className="text-gray-600">Elite Sports Medicine Clinic | 2019 - Present</p>
                  <ul className="mt-2 space-y-1">
                    <li className="ml-4">• Design rehabilitation programs for professional athletes</li>
                    <li className="ml-4">• Achieve 95% patient recovery rate within projected timelines</li>
                    <li className="ml-4">• Lead research on ACL injury prevention techniques</li>
                    <li className="ml-4">• Supervise team of 8 junior therapists</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Physical Therapist</h3>
                  <p className="text-gray-600">Orthopedic Associates | 2016 - 2019</p>
                  <ul className="mt-2 space-y-1">
                    <li className="ml-4">• Treated 30+ patients daily with musculoskeletal conditions</li>
                    <li className="ml-4">• Developed post-surgical rehabilitation protocols</li>
                    <li className="ml-4">• Implemented new therapy techniques reducing recovery time by 20%</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Education
                </h2>
                <div className="mb-3">
                  <h3 className="font-bold">Doctor of Physical Therapy (DPT)</h3>
                  <p className="text-gray-600">UCLA Medical School | 2016</p>
                </div>
                <div>
                  <h3 className="font-bold">BS Kinesiology</h3>
                  <p className="text-gray-600">UC Berkeley | 2013</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Skills & Certifications
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Manual Therapy</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Dry Needling</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Sports Rehabilitation</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Gait Analysis</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Therapeutic Exercise</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Patient Education</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">EMR Systems</span>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition"
          >
            <FileText className="w-5 h-5" />
            Use This Template
          </a>
        </div>
      </div>
    </div>
  );
}
