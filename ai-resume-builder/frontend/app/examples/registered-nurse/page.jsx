'use client'

import { FileText, Briefcase, Code, Palette, Award, ChevronRight, Eye, Download, Star, Building2, GraduationCap } from 'lucide-react';

export default function RegisteredNursePage() {
  const example = {
    id: 'registered-nurse',
    name: 'Emily Rodriguez',
    title: 'Emergency Room Nurse',
    industry: 'Healthcare',
    template: 'professional',
    description: 'Experienced ER nurse with trauma certification',
    highlights: ['10+ years ER experience', 'Trauma certified', 'Team leader'],
    gradient: 'from-red-600 to-pink-600',
    icon: GraduationCap,
    rating: 4.9,
    downloads: 8500
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
                <p className="text-gray-600 mt-2">📧 emily.rodriguez@email.com | 📱 (555) 123-4567 | 📍 Houston, TX</p>
              </div>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Dedicated Emergency Room Nurse with over 10 years of experience in high-pressure medical environments. 
                  Proven expertise in trauma care, patient advocacy, and mentoring junior staff. Known for maintaining 
                  composure during critical situations while delivering compassionate patient care.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Professional Experience
                </h2>
                <div className="mb-6">
                  <h3 className="font-bold text-lg">Lead Emergency Room Nurse</h3>
                  <p className="text-gray-600">City General Hospital | 2018 - Present</p>
                  <ul className="mt-2 space-y-1">
                    <li className="ml-4">• Manage patient care for 20+ critical cases per shift</li>
                    <li className="ml-4">• Lead trauma response team during Code Blue situations</li>
                    <li className="ml-4">• Mentor and train 15+ new graduate nurses</li>
                    <li className="ml-4">• Reduced patient wait times by 25% through workflow optimization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Staff Nurse - Emergency Department</h3>
                  <p className="text-gray-600">Regional Medical Center | 2014 - 2018</p>
                  <ul className="mt-2 space-y-1">
                    <li className="ml-4">• Provided direct patient care in Level II trauma center</li>
                    <li className="ml-4">• Collaborated with interdisciplinary teams for patient treatment</li>
                    <li className="ml-4">• Maintained 98% patient satisfaction scores</li>
                  </ul>
                </div>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Education
                </h2>
                <div>
                  <h3 className="font-bold">BSN - Bachelor of Science in Nursing</h3>
                  <p className="text-gray-600">University of Texas | 2014</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Skills & Certifications
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">ACLS Certified</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">BLS Instructor</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Trauma Nursing</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">IV Therapy</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Patient Assessment</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Electronic Health Records</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Crisis Management</span>
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
