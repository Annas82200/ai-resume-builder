'use client'

import { Download, ChevronLeft, FileText, Target, Award, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function SalesManagerPage() {
  const resumeData = {
    fullName: 'Jennifer Thompson',
    title: 'Regional Sales Manager',
    email: 'jennifer.thompson@email.com',
    phone: '(555) 567-8901',
    location: 'Dallas, TX',
    summary: 'Results-driven Regional Sales Manager with 10+ years of experience building and leading high-performing B2B sales teams. Proven track record of exceeding revenue targets by 150% and developing strategic partnerships with Fortune 500 clients. Expert in SaaS sales, territory management, and sales process optimization.',
    experience: `Regional Sales Manager
TechSolutions Corp (2020-Present)
• Lead team of 12 sales representatives across 5-state territory generating $15M annual revenue
• Exceeded annual quota by 150% for 3 consecutive years
• Implemented new sales methodology increasing close rate from 22% to 38%
• Developed key accounts including Microsoft, Dell, and Oracle
• Reduced sales cycle length by 30% through process optimization

Senior Account Executive
SalesForce Pro (2017-2020)
• Consistently ranked #1 sales rep out of 45 nationally
• Closed largest enterprise deal in company history ($2.5M)
• Mentored 5 junior reps who all achieved 100%+ quota attainment
• Built relationships with C-suite executives at target accounts

Account Executive
StartUp Sales Inc (2014-2017)
• Grew territory revenue from $500K to $3M in 3 years
• Established partnerships with 50+ new enterprise clients
• Achieved President's Club recognition all 3 years`,
    education: 'MBA - Sales Management\nKelley School of Business (2017)\n\nBA Business Administration\nTexas State University (2014)',
    skills: 'Strategic Selling • Team Leadership • CRM (Salesforce) • Pipeline Management • Contract Negotiation • Territory Planning • Sales Forecasting • Executive Presentations',
    achievements: [
      'Generated $45M+ in total career revenue',
      '3x President\'s Club Award Winner',
      'Certified in Challenger Sales Methodology',
      'Built and scaled 3 successful sales teams'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Resumind Logo" className="w-16 h-16 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Resumind</h1>
                <p className="text-sm text-gray-600">AI that understands your mind</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/examples" className="text-gray-700 hover:text-blue-600 font-medium transition flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Examples
              </a>
              <a href="/" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                Create My Resume
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content - Modern Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            {/* Left Sidebar */}
            <div className="col-span-1 bg-gradient-to-b from-orange-600 to-red-600 text-white p-8">
              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-1">{resumeData.fullName}</h1>
                <p className="text-orange-100">{resumeData.title}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-orange-200">Contact</h3>
                <div className="space-y-2 text-sm">
                  <p className="break-all">{resumeData.email}</p>
                  <p>{resumeData.phone}</p>
                  <p>{resumeData.location}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-orange-200">Core Skills</h3>
                <div className="space-y-2">
                  {resumeData.skills.split('•').map((skill, i) => (
                    skill.trim() && (
                      <div key={i} className="text-sm bg-white/10 px-3 py-1 rounded">
                        {skill.trim()}
                      </div>
                    )
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-orange-200">Key Metrics</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">$15M Annual Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Team of 12 Reps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">150% Quota Attainment</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="/" className="w-full bg-white text-orange-600 py-3 rounded-lg font-semibold hover:bg-orange-50 transition flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  Use This Template
                </a>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="col-span-2 p-8">
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-orange-600" />
                  Sales Experience
                </h2>
                <div className="space-y-1 text-gray-700">
                  {resumeData.experience.split('\n').map((line, i) => (
                    line.trim() && (
                      <p key={i} className={
                        line.startsWith('•') ? 'ml-4' : 
                        line.match(/\(\d{4}/) ? 'text-gray-600' :
                        'font-semibold mt-4'
                      }>
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  Career Achievements
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {resumeData.achievements.map((achievement, i) => (
                    <div key={i} className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <p className="text-gray-800">{achievement}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
                <div className="text-gray-700">
                  {resumeData.education.split('\n').map((line, i) => (
                    line && <p key={i} className={i > 0 && line ? 'mt-3' : ''}>{line}</p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-2">Land Your Next Sales Leadership Role</h3>
          <p className="mb-6 opacity-90">This template showcases sales metrics and leadership experience that recruiters love to see.</p>
          <div className="flex gap-4 justify-center">
            <a href="/" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
              Create Your Sales Resume
            </a>
            <button className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Example
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
