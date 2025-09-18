import { Download, Mail, Phone, MapPin, Linkedin, Globe, ChevronLeft, Star, Eye, Copy, Share2, Zap, Award, TrendingUp, Users, Building2, Target, DollarSign, Briefcase, GraduationCap } from 'lucide-react';

export default function ExecutiveLeaderExample() {
  const resumeData = {
    name: "Jennifer Williams",
    title: "Chief Operations Officer",
    tagline: "Transformational Executive Leader • Fortune 500 Experience • Growth Catalyst",
    email: "jennifer.williams@executive.com",
    phone: "+1 (212) 555-0147",
    location: "New York, NY",
    linkedin: "linkedin.com/in/jenniferwilliams",
    
    executiveSummary: "Results-driven C-suite executive with 18+ years transforming organizations through strategic vision, operational excellence, and cultural leadership. Proven track record of driving sustainable growth, leading digital transformations, and building high-performance teams across Fortune 500 companies. Expert in scaling operations from startup to IPO, with demonstrated success in M&A integration, turnaround situations, and market expansion. Known for bridging strategy and execution while maintaining focus on stakeholder value creation.",
    
    coreCompetencies: [
      "Strategic Planning & Execution",
      "P&L Management ($500M+)",
      "Digital Transformation",
      "M&A Integration",
      "Change Management",
      "Board Relations",
      "Global Operations",
      "Risk Management"
    ],
    
    experience: [
      {
        title: "Chief Operations Officer",
        company: "GlobalTech Industries",
        location: "New York, NY",
        date: "2020 - Present",
        achievements: [
          "Orchestrated company-wide digital transformation saving $45M annually while improving customer satisfaction by 38%",
          "Led successful integration of $300M acquisition, achieving 120% of projected synergies 6 months ahead of schedule",
          "Restructured global supply chain operations across 15 countries, reducing costs by 28% and improving delivery times by 40%",
          "Built and mentored executive team of 12 direct reports, with 3 promoted to C-suite roles at other Fortune 500 companies"
        ]
      },
      {
        title: "Senior Vice President, Operations",
        company: "Innovative Solutions Corp",
        location: "Chicago, IL",
        date: "2017 - 2020",
        achievements: [
          "Spearheaded operational turnaround of underperforming division, achieving profitability within 18 months",
          "Launched data-driven decision framework reducing operational inefficiencies by 35% and increasing EBITDA by $75M",
          "Negotiated strategic partnerships with 3 industry leaders, opening new revenue streams worth $200M",
          "Implemented lean manufacturing principles across 8 facilities, improving productivity by 45%"
        ]
      },
      {
        title: "Vice President, Strategy & Operations",
        company: "Premier Enterprises",
        location: "Boston, MA",
        date: "2014 - 2017",
        achievements: [
          "Designed and executed 5-year strategic plan resulting in 150% revenue growth and successful $2B IPO",
          "Established enterprise risk management framework protecting $1.5B in assets and reducing insurance costs by 30%",
          "Led cross-functional team of 200+ in ERP implementation, delivered on time and 15% under budget"
        ]
      }
    ],
    
    boardPositions: [
      {
        title: "Independent Board Director",
        company: "TechForward Inc. (NASDAQ: TFWD)",
        date: "2021 - Present",
        focus: "Audit & Risk Committee Chair"
      },
      {
        title: "Advisory Board Member",
        company: "Innovation Capital Partners",
        date: "2020 - Present",
        focus: "Portfolio Company Operations"
      }
    ],
    
    education: {
      mba: {
        degree: "Master of Business Administration",
        school: "Harvard Business School",
        date: "2006",
        honors: "Baker Scholar (Top 5%)"
      },
      undergrad: {
        degree: "Bachelor of Science in Industrial Engineering",
        school: "Stanford University",
        date: "2002",
        honors: "Phi Beta Kappa, Magna Cum Laude"
      }
    },
    
    achievements: [
      "Executive of the Year - Industry Week Magazine (2023)",
      "Top 50 Women in Tech Leadership - Forbes (2022)",
      "Operational Excellence Award - Manufacturing Leaders Summit (2021)",
      "Published author: 'Digital Transformation in Traditional Industries' - Harvard Business Review"
    ],
    
    metrics: {
      revenue: "$2.5B+ P&L managed",
      team: "5,000+ employees led globally",
      savings: "$200M+ cost savings delivered",
      growth: "3x revenue growth achieved"
    }
  };

  const stats = {
    views: 28756,
    downloads: 8200,
    rating: 5.0,
    reviews: 189
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
              <span className="text-sm text-gray-500">Executive Template</span>
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
                className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
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
          {/* Resume Preview - Executive Template */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-2xl p-12">
              {/* Executive Header */}
              <div className="text-center mb-12 border-t-4 border-b-4 border-amber-600 py-8">
                <h1 className="text-4xl font-serif text-gray-900 mb-2">{resumeData.name}</h1>
                <p className="text-2xl text-gray-700 font-light mb-3">{resumeData.title}</p>
                <p className="text-gray-600 italic mb-6">{resumeData.tagline}</p>
                <div className="flex justify-center gap-6 text-sm text-gray-600">
                  <span>{resumeData.email}</span>
                  <span>|</span>
                  <span>{resumeData.phone}</span>
                  <span>|</span>
                  <span>{resumeData.location}</span>
                  <span>|</span>
                  <span>{resumeData.linkedin}</span>
                </div>
              </div>

              {/* Executive Summary */}
              <section className="mb-12">
                <h2 className="text-xl font-serif text-gray-800 mb-4 flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-600" />
                  Executive Summary
                </h2>
                <div className="border-l-4 border-amber-600 pl-6">
                  <p className="text-gray-700 leading-loose text-justify">{resumeData.executiveSummary}</p>
                </div>
              </section>

              {/* Key Metrics Dashboard */}
              <section className="mb-12 bg-amber-50 rounded-lg p-8">
                <h2 className="text-xl font-serif text-gray-800 mb-6 text-center">Executive Impact Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <DollarSign className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{resumeData.metrics.revenue}</p>
                    <p className="text-sm text-gray-600">P&L Managed</p>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{resumeData.metrics.team}</p>
                    <p className="text-sm text-gray-600">Team Leadership</p>
                  </div>
                  <div>
                    <Target className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{resumeData.metrics.savings}</p>
                    <p className="text-sm text-gray-600">Cost Savings</p>
                  </div>
                  <div>
                    <TrendingUp className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{resumeData.metrics.growth}</p>
                    <p className="text-sm text-gray-600">Revenue Growth</p>
                  </div>
                </div>
              </section>

              {/* Leadership Experience */}
              <section className="mb-12">
                <h2 className="text-xl font-serif text-gray-800 mb-6 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-amber-600" />
                  Leadership Experience
                </h2>
                <div className="space-y-8">
                  {resumeData.experience.map((role, i) => (
                    <div key={i} className="relative">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-amber-600 rounded-full"></div>
                      <div className="pl-8">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                          <p className="text-gray-700 font-medium">{role.company} • {role.location}</p>
                          <p className="text-gray-600 text-sm italic">{role.date}</p>
                        </div>
                        <ul className="space-y-3">
                          {role.achievements.map((achievement, j) => (
                            <li key={j} className="flex items-start gap-3 text-gray-700">
                              <span className="text-amber-600 font-bold mt-1">►</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Board Positions */}
              <section className="mb-12">
                <h2 className="text-xl font-serif text-gray-800 mb-6 flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-amber-600" />
                  Board & Advisory Positions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {resumeData.boardPositions.map((position, i) => (
                    <div key={i} className="border-l-4 border-amber-200 pl-4">
                      <h3 className="font-semibold text-gray-800">{position.title}</h3>
                      <p className="text-gray-700">{position.company}</p>
                      <p className="text-gray-600 text-sm">{position.date} • {position.focus}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Core Competencies */}
              <section className="mb-12">
                <h2 className="text-xl font-serif text-gray-800 mb-6 flex items-center gap-3">
                  <Target className="w-5 h-5 text-amber-600" />
                  Core Competencies
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {resumeData.coreCompetencies.map((skill, i) => (
                    <div key={i} className="bg-amber-50 px-4 py-3 rounded-lg text-center text-gray-700 font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </section>

              {/* Education & Achievements */}
              <div className="grid md:grid-cols-2 gap-8">
                <section>
                  <h2 className="text-xl font-serif text-gray-800 mb-4 flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-amber-600" />
                    Education
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">{resumeData.education.mba.degree}</h3>
                      <p className="text-gray-700">{resumeData.education.mba.school}</p>
                      <p className="text-gray-600 text-sm">{resumeData.education.mba.date} • {resumeData.education.mba.honors}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{resumeData.education.undergrad.degree}</h3>
                      <p className="text-gray-700">{resumeData.education.undergrad.school}</p>
                      <p className="text-gray-600 text-sm">{resumeData.education.undergrad.date} • {resumeData.education.undergrad.honors}</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-serif text-gray-800 mb-4 flex items-center gap-3">
                    <Award className="w-5 h-5 text-amber-600" />
                    Recognition
                  </h2>
                  <ul className="space-y-2">
                    {resumeData.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700">
                        <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </section>
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
                  <p className="text-sm text-gray-600">Executive Elegance</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Best For</p>
                  <p className="text-sm text-gray-600">C-suite executives, VPs, senior leaders, board members</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">ATS Score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">92%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Why This Resume Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Executive Presence</p>
                    <p className="text-sm text-gray-600">Sophisticated design conveying leadership authority</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Strategic Focus</p>
                    <p className="text-sm text-gray-600">Emphasis on business impact and ROI</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Board Ready</p>
                    <p className="text-sm text-gray-600">Format suitable for board and investor presentations</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Executive Resume Builder</h3>
              <p className="text-sm opacity-90 mb-4">Create a C-suite ready resume with AI assistance</p>
              <a 
                href="/"
                className="inline-block bg-white text-amber-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition"
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
