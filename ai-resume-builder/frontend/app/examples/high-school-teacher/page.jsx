'use client'

import { Download, ChevronLeft, FileText, Award, GraduationCap, Users, TrendingUp } from 'lucide-react';

export default function HighSchoolTeacherPage() {
  const resumeData = {
    fullName: 'Sarah Williams',
    title: 'High School Science Teacher',
    email: 'sarah.williams@email.com',
    phone: '(555) 345-6789',
    location: 'Chicago, IL',
    summary: 'Passionate High School Science Teacher with 8 years of experience creating engaging STEM curriculum. Recognized for innovative teaching methods that increased AP Chemistry pass rates by 40%. Committed to inspiring the next generation of scientists.',
    experience: `Lead Science Teacher
Lincoln High School (2018-Present)
• Teach AP Chemistry and Honors Biology to 150+ students
• Developed hands-on STEM lab program adopted district-wide
• Achieved 98% AP exam pass rate (district average: 72%)
• Coach Science Olympiad team to state championships

Science Teacher
Jefferson Middle School (2016-2018)
• Introduced project-based learning increasing engagement by 60%
• Created after-school tutoring program for at-risk students
• Collaborated with tech companies for real-world STEM experiences`,
    education: 'M.Ed. Secondary Education\nTeachers College (2016)\n\nBS Chemistry, Minor in Biology\nState University (2014)',
    skills: 'Curriculum Development • Classroom Management • AP Chemistry • Laboratory Safety • Educational Technology • Student Assessment • Parent Communication • Project-Based Learning'
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{resumeData.fullName}</h1>
              <p className="text-lg text-gray-700 mb-4">{resumeData.title}</p>
              <p className="text-gray-600 mb-6">Award-winning educator specializing in STEM curriculum development</p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Key Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Teacher of the Year 2023</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">98% AP pass rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">STEM program creator</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-blue-900 mb-2">Impact by Numbers</p>
                <div className="space-y-1 text-sm text-blue-800">
                  <p>• 150+ students taught annually</p>
                  <p>• 40% increase in AP pass rates</p>
                  <p>• 3 state championships</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <a href="/" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  Use This Template
                </a>
              </div>
            </div>
          </div>
          
          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              {/* Resume Header */}
              <div className="text-center border-b-2 border-gray-800 pb-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{resumeData.fullName}</h1>
                <p className="text-xl text-gray-700">{resumeData.title}</p>
                <div className="flex justify-center gap-4 mt-3 text-gray-600">
                  <span>{resumeData.email}</span>
                  <span>•</span>
                  <span>{resumeData.phone}</span>
                  <span>•</span>
                  <span>{resumeData.location}</span>
                </div>
              </div>
              
              {/* Professional Summary */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              </section>
              
              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Teaching Experience
                </h2>
                <div className="space-y-1 text-gray-700">
                  {resumeData.experience.split('\n').map((line, i) => (
                    <p key={i} className={line.startsWith('•') ? 'ml-4' : line.match(/^[A-Z]/) && i > 0 ? 'font-semibold mt-4' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </section>
              
              {/* Education */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Education
                </h2>
                <div className="text-gray-700">
                  {resumeData.education.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 && line ? 'mt-3' : ''}>{line}</p>
                  ))}
                </div>
              </section>
              
              {/* Skills */}
              <section>
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Professional Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.split('•').map((skill, i) => (
                    skill.trim() && (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">
                        {skill.trim()}
                      </span>
                    )
                  ))}
                </div>
              </section>
            </div>

            {/* CTA Box */}
            <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Perfect for Educators
              </h3>
              <p className="mb-4">This template highlights teaching achievements and educational impact. Great for teachers, professors, and trainers.</p>
              <a href="/" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition">
                Create Your Teacher Resume →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
