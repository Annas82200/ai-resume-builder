'use client'

import { Download, ChevronLeft, FileText, Award, GraduationCap, BookOpen, Users } from 'lucide-react';

export default function CollegeProfessorPage() {
  const resumeData = {
    fullName: 'Dr. James Mitchell',
    title: 'Associate Professor of Computer Science',
    email: 'james.mitchell@email.com',
    phone: '(555) 456-7890',
    location: 'Boston, MA',
    summary: 'Accomplished Associate Professor with 15 years of experience in higher education. Published researcher with 50+ peer-reviewed papers and $2M in research grants. Passionate about mentoring the next generation of computer scientists.',
    experience: `Associate Professor
University of Technology (2018-Present)
• Teach graduate and undergraduate courses in AI and Machine Learning
• Lead research lab with 12 PhD students and 3 postdocs
• Secured $2M in NSF and industry research grants
• Published 25 papers in top-tier conferences (ICML, NeurIPS)
• Serve as Department Graduate Program Director

Assistant Professor
State University (2010-2018)
• Developed new curriculum for Data Science program
• Mentored 8 PhD students to successful graduation
• Received Excellence in Teaching Award (2015, 2017)
• Established industry partnerships with tech companies`,
    education: 'PhD Computer Science\nMIT (2010)\n\nMS Computer Science\nStanford University (2006)\n\nBS Mathematics & Computer Science\nHarvard University (2004)',
    skills: 'Machine Learning • Research Leadership • Grant Writing • Curriculum Development • Academic Publishing • Student Mentoring • Conference Speaking • Industry Collaboration'
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

      {/* Main Content - Executive Style */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-2xl p-12">
          {/* Executive Header */}
          <div className="text-center border-t-4 border-b-4 border-amber-600 py-8 mb-12">
            <h1 className="text-3xl font-serif text-gray-900 mb-2">{resumeData.fullName}</h1>
            <p className="text-xl text-gray-700 font-light">{resumeData.title}</p>
            <div className="flex justify-center gap-6 mt-4 text-sm text-gray-600">
              <span>{resumeData.email}</span>
              <span>|</span>
              <span>{resumeData.phone}</span>
              <span>|</span>
              <span>{resumeData.location}</span>
            </div>
          </div>
          
          {/* Executive Summary */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-gray-800 mb-4 flex items-center gap-3">
              <Award className="w-5 h-5 text-amber-600" />
              Executive Summary
            </h2>
            <div className="border-l-4 border-amber-600 pl-6">
              <p className="text-gray-700 leading-loose text-justify">{resumeData.summary}</p>
            </div>
          </section>
          
          {/* Academic Achievements */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-gray-800 mb-4 flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-amber-600" />
              Key Achievements
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-3 border-amber-200 pl-4">
                <p className="font-semibold">Research Impact</p>
                <p className="text-gray-600">50+ publications, 2000+ citations</p>
              </div>
              <div className="border-l-3 border-amber-200 pl-4">
                <p className="font-semibold">Grant Funding</p>
                <p className="text-gray-600">$2M in competitive grants</p>
              </div>
              <div className="border-l-3 border-amber-200 pl-4">
                <p className="font-semibold">Student Success</p>
                <p className="text-gray-600">8 PhD graduates, 100% placement</p>
              </div>
              <div className="border-l-3 border-amber-200 pl-4">
                <p className="font-semibold">Teaching Excellence</p>
                <p className="text-gray-600">Multiple teaching awards</p>
              </div>
            </div>
          </section>
          
          {/* Academic Experience */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-gray-800 mb-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-amber-600" />
              Academic Appointments
            </h2>
            <div className="text-gray-700 leading-loose">
              {resumeData.experience.split('\n').map((line, i) => (
                line.trim() && (
                  <p key={i} className={line.startsWith('•') ? 'mb-2' : 'font-semibold text-lg mt-6 mb-3'}>
                    {line}
                  </p>
                )
              ))}
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-10">
            <h2 className="text-xl font-serif text-gray-800 mb-4 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-amber-600" />
              Education
            </h2>
            <div className="border-l-4 border-amber-600 pl-6">
              <div className="text-gray-700">
                {resumeData.education.split('\n').map((line, i) => (
                  <p key={i} className={i > 0 && line ? 'mt-3' : ''}>{line}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <a href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">
              <FileText className="w-5 h-5" />
              Create Your Academic Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
