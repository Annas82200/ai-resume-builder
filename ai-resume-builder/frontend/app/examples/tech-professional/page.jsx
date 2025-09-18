import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe, ChevronLeft, Star, Eye, Copy, Share2, Zap } from 'lucide-react';

export default function TechProfessionalExample() {
  const resumeData = {
    name: "Sarah Chen",
    title: "Senior Software Engineer",
    email: "sarah.chen@email.com",
    phone: "+1 (415) 555-0123",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/sarahchen",
    github: "github.com/sarahchen",
    website: "sarahchen.dev",
    
    summary: "Innovative full-stack engineer with 8+ years building scalable web applications and leading high-performance teams. Specialized in React ecosystem, cloud architecture, and DevOps practices. Passionate about mentoring developers and driving technical excellence. Led migration of monolithic architecture to microservices, reducing system latency by 60% and improving deployment frequency by 400%.",
    
    experience: [
      {
        title: "Senior Software Engineer",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        date: "2021 - Present",
        highlights: [
          "Lead architect for cloud migration project serving 2M+ daily active users, reducing infrastructure costs by 45%",
          "Mentored team of 12 engineers, improving code review turnaround by 60% and team velocity by 35%",
          "Implemented automated testing pipeline increasing code coverage from 45% to 92%, reducing production bugs by 78%",
          "Designed and built real-time analytics dashboard processing 500K events/second using React, Node.js, and Redis"
        ]
      },
      {
        title: "Full Stack Developer",
        company: "StartupHub Inc.",
        location: "San Francisco, CA",
        date: "2018 - 2021",
        highlights: [
          "Built core payment processing system handling $50M+ in annual transactions with 99.99% uptime",
          "Developed React component library adopted by 5 product teams, reducing UI development time by 40%",
          "Optimized database queries reducing average API response time from 800ms to 120ms",
          "Led adoption of TypeScript across frontend codebase, eliminating 85% of type-related bugs"
        ]
      },
      {
        title: "Junior Developer",
        company: "Digital Agency Co.",
        location: "San Francisco, CA",
        date: "2016 - 2018",
        highlights: [
          "Developed 20+ responsive websites for Fortune 500 clients using React and Node.js",
          "Created automated deployment scripts reducing release time from 4 hours to 15 minutes",
          "Collaborated with UX team to improve site performance scores by 40% across all projects"
        ]
      }
    ],
    
    skills: {
      languages: ["JavaScript", "TypeScript", "Python", "Go", "Java"],
      frontend: ["React", "Next.js", "Vue.js", "Redux", "GraphQL", "Tailwind CSS"],
      backend: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "Redis"],
      cloud: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Microservices"],
      tools: ["Git", "Jira", "Datadog", "Splunk", "Jenkins", "GitHub Actions"]
    },
    
    education: {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      date: "2012 - 2016",
      honors: "Magna Cum Laude, Dean's List"
    },
    
    certifications: [
      "AWS Solutions Architect Professional",
      "Google Cloud Professional Developer",
      "Certified Kubernetes Administrator (CKA)"
    ],
    
    achievements: [
      "Tech Lead of the Year 2023 - TechCorp Solutions",
      "Speaker at React Summit 2023: 'Scaling React Applications'",
      "Open source contributor: 2000+ GitHub stars on component library"
    ]
  };

  const stats = {
    views: 45892,
    downloads: 12500,
    rating: 4.9,
    reviews: 324
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/examples" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ChevronLeft className="w-5 h-5" />
                Back to Examples
              </a>
              <div className="h-6 w-px bg-gray-300"></div>
              <span className="text-sm text-gray-500">Modern Template</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                <Copy className="w-4 h-4" />
                Copy
              </button>
              <a 
                href="/"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
              >
                <Zap className="w-4 h-4" />
                Use This Template
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Resume Preview - Modern Two Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-3">
                {/* Left Sidebar - Dark */}
                <div className="col-span-1 bg-gray-900 text-white p-8">
                  {/* Profile */}
                  <div className="mb-8">
                    <h1 className="text-2xl font-bold mb-2">{resumeData.name}</h1>
                    <p className="text-gray-300 text-sm uppercase tracking-wider">{resumeData.title}</p>
                  </div>
                  
                  {/* Contact */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-400">Contact</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="break-all">{resumeData.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{resumeData.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{resumeData.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-4 h-4 text-gray-400" />
                        <span className="break-all">{resumeData.linkedin}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="w-4 h-4 text-gray-400" />
                        <span className="break-all">{resumeData.github}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span className="break-all">{resumeData.website}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-400">Technical Skills</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-gray-400 mb-2">Languages</p>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.skills.languages.map((skill, i) => (
                            <span key={i} className="text-sm bg-gray-800 px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-2">Frontend</p>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.skills.frontend.map((skill, i) => (
                            <span key={i} className="text-sm bg-gray-800 px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-2">Backend & Cloud</p>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.skills.backend.concat(resumeData.skills.cloud).map((skill, i) => (
                            <span key={i} className="text-sm bg-gray-800 px-2 py-1 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Certifications */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-gray-400">Certifications</h3>
                    <ul className="space-y-2 text-sm">
                      {resumeData.certifications.map((cert, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-0.5">•</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Content - Light */}
                <div className="col-span-2 p-8">
                  {/* Summary */}
                  <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider">Professional Summary</h2>
                    <p className="text-gray-600 leading-relaxed">{resumeData.summary}</p>
                  </section>
                  
                  {/* Experience */}
                  <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-wider">Experience</h2>
                    <div className="space-y-6">
                      {resumeData.experience.map((job, i) => (
                        <div key={i} className="relative">
                          <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                          <div className="pl-6">
                            <div className="mb-2">
                              <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                              <div className="flex items-center gap-2 text-gray-600">
                                <span className="font-medium">{job.company}</span>
                                <span className="text-gray-400">•</span>
                                <span>{job.location}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm">{job.date}</span>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {job.highlights.map((highlight, j) => (
                                <li key={j} className="flex items-start gap-2 text-gray-600">
                                  <span className="text-blue-600 mt-1">→</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                  
                  {/* Education */}
                  <section className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider">Education</h2>
                    <div>
                      <h3 className="font-bold text-gray-800">{resumeData.education.degree}</h3>
                      <p className="text-gray-600">{resumeData.education.school}</p>
                      <p className="text-gray-500 text-sm">{resumeData.education.date} • {resumeData.education.honors}</p>
                    </div>
                  </section>
                  
                  {/* Achievements */}
                  <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wider">Key Achievements</h2>
                    <ul className="space-y-2">
                      {resumeData.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Resume Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Eye className="w-4 h-4 text-gray-500" />
                    <span className="text-2xl font-bold">{stats.views.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-500">Views</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Download className="w-4 h-4 text-gray-500" />
                    <span className="text-2xl font-bold">{stats.downloads.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-500">Downloads</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-2xl font-bold">{stats.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-2xl font-bold">{stats.reviews}</span>
                  </div>
                  <p className="text-sm text-gray-500">Reviews</p>
                </div>
              </div>
            </div>

            {/* Template Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">About This Template</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Template Style</p>
                  <p className="text-sm text-gray-600">Modern Two-Column</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Best For</p>
                  <p className="text-sm text-gray-600">Tech professionals, engineers, developers</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">ATS Score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">95%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Why This Resume Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Quantified Impact</p>
                    <p className="text-sm text-gray-600">Every bullet point includes metrics and results</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Technical Keywords</p>
                    <p className="text-sm text-gray-600">Optimized for tech recruiter searches</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Clean Hierarchy</p>
                    <p className="text-sm text-gray-600">Easy to scan for both ATS and humans</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Create Your Own Resume</h3>
              <p className="text-sm opacity-90 mb-4">Use AI to build a resume like Sarah's in minutes</p>
              <a 
                href="/"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition"
              >
                Start Building
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
