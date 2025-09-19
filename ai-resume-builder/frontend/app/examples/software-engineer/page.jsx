'use client'

import { Download, ChevronLeft, FileText, Code, GitBranch, Cloud, Database, Terminal } from 'lucide-react';

export default function SoftwareEngineerPage() {
  const resumeData = {
    fullName: 'David Park',
    title: 'Senior Software Engineer',
    email: 'david.park@email.com',
    phone: '(555) 234-5678',
    location: 'San Francisco, CA',
    summary: 'Full-stack software engineer with 7+ years of experience building scalable web applications and cloud infrastructure. Expert in React, Node.js, and AWS with a passion for clean code and system optimization. Led development of microservices architecture serving 5M+ daily active users.',
    experience: `Senior Software Engineer
TechCorp Inc. (2021-Present)
• Architected and built microservices platform handling 10M+ requests/day
• Led migration from monolith to microservices reducing deployment time by 80%
• Mentored team of 5 junior engineers on best practices and code reviews
• Implemented CI/CD pipeline with 99.9% deployment success rate
• Reduced infrastructure costs by 40% through AWS optimization

Software Engineer II
CloudStart Solutions (2019-2021)
• Built real-time collaboration features using WebSockets and Redis
• Improved API response time by 65% through database optimization
• Developed React component library used across 8 product teams
• Implemented automated testing increasing code coverage from 45% to 85%

Software Engineer
DevShop Inc (2017-2019)
• Developed RESTful APIs serving mobile and web applications
• Built admin dashboard using React and Material-UI
• Integrated third-party payment systems (Stripe, PayPal)
• Participated in on-call rotation maintaining 99.95% uptime`,
    education: 'BS Computer Science\nUC Berkeley (2017)\n\nAWS Certified Solutions Architect\nAmazon Web Services (2022)',
    skills: {
      languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
      frontend: ['React', 'Next.js', 'Redux', 'GraphQL', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    projects: [
      {
        name: 'E-commerce Platform Rebuild',
        description: 'Led full rewrite increasing performance by 3x'
      },
      {
        name: 'Real-time Analytics Dashboard',
        description: 'Built with React and WebSockets for live data'
      },
      {
        name: 'Microservices Migration',
        description: 'Architected transition from monolith to 12 services'
      }
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

      {/* Main Content - Modern Tech Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold mb-2">{resumeData.fullName}</h1>
              <p className="text-xl opacity-90 mb-4">{resumeData.title}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  {resumeData.email}
                </span>
                <span>{resumeData.phone}</span>
                <span>{resumeData.location}</span>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  <GitBranch className="w-4 h-4" />
                  github.com/davidpark
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 max-w-4xl mx-auto">
            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
            </section>

            {/* Technical Skills Grid */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Languages & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...resumeData.skills.languages, ...resumeData.skills.frontend].map((skill, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Backend & Cloud</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...resumeData.skills.backend, ...resumeData.skills.cloud].map((skill, i) => (
                      <span key={i} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Professional Experience</h2>
              <div className="space-y-6">
                {resumeData.experience.split('\n\n').map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6">
                    {job.split('\n').map((line, i) => (
                      <p key={i} className={
                        i === 0 ? 'font-bold text-lg text-gray-800' :
                        i === 1 ? 'text-gray-600 mb-2' :
                        'text-gray-700 mb-1'
                      }>
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* Key Projects */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-cyan-600" />
                Key Projects
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {resumeData.projects.map((project, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-800 mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Education & Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Education</h3>
                  <p className="text-gray-700">BS Computer Science</p>
                  <p className="text-gray-600">UC Berkeley (2017)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Certifications</h3>
                  <p className="text-gray-700">AWS Certified Solutions Architect</p>
                  <p className="text-gray-600">Amazon Web Services (2022)</p>
                </div>
              </div>
            </section>

            {/* Tech Stack Icons */}
            <section className="border-t pt-6">
              <div className="flex items-center justify-center gap-8 text-gray-400">
                <Code className="w-8 h-8" />
                <Database className="w-8 h-8" />
                <Cloud className="w-8 h-8" />
                <GitBranch className="w-8 h-8" />
              </div>
            </section>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Build Your Tech Resume</h3>
              <p className="opacity-90">This template is optimized for software engineering roles and ATS systems.</p>
            </div>
            <div className="flex gap-4">
              <a href="/" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Use This Template
              </a>
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
