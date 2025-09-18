import { Download, Mail, Phone, MapPin, Linkedin, ChevronLeft, Star, Eye, Copy, Share2, Zap, Building2, BarChart, TrendingUp, Calculator, DollarSign } from 'lucide-react';

export default function FinanceProfessionalExample() {
  const resumeData = {
    name: "David Kumar",
    title: "Senior Financial Analyst, CFA",
    email: "david.kumar@finance.pro",
    phone: "+1 (617) 555-0188",
    location: "Boston, MA",
    linkedin: "linkedin.com/in/davidkumar-cfa",
    
    professionalSummary: "Results-oriented Financial Analyst with 7+ years of experience in equity research, financial modeling, and portfolio management. CFA charterholder with proven expertise in valuation analysis, risk assessment, and investment strategy. Track record of generating alpha through rigorous fundamental analysis and identifying undervalued opportunities. Published research covering technology and healthcare sectors with recommendations yielding average 23% annual returns.",
    
    professionalExperience: [
      {
        title: "Senior Financial Analyst",
        company: "Wellington Asset Management",
        location: "Boston, MA",
        date: "August 2021 - Present",
        achievements: [
          "• Manage equity research coverage for $2.1B technology portfolio, outperforming S&P 500 by 18% annually",
          "• Developed proprietary DCF model identifying undervalued SaaS companies, generating $45M in realized gains",
          "• Lead analyst for 5 successful IPO investments with average first-year return of 67%",
          "• Author monthly investment newsletter reaching 10,000+ institutional clients",
          "• Mentor team of 4 junior analysts, with 2 promoted to senior roles within 18 months"
        ]
      },
      {
        title: "Financial Analyst",
        company: "Fidelity Investments",
        location: "Boston, MA",
        date: "June 2018 - July 2021",
        achievements: [
          "• Conducted fundamental analysis on 50+ companies across healthcare and biotech sectors",
          "• Built complex LBO and merger models for M&A transactions totaling $3.5B in deal value",
          "• Presented investment recommendations to portfolio managers controlling $15B AUM",
          "• Achieved 78% accuracy rate on buy/sell recommendations over 3-year period",
          "• Automated financial reporting processes reducing analysis time by 40%"
        ]
      },
      {
        title: "Investment Banking Analyst",
        company: "Goldman Sachs",
        location: "New York, NY",
        date: "July 2016 - May 2018",
        achievements: [
          "• Executed 12 M&A transactions and 8 equity offerings totaling $8.2B in transaction value",
          "• Created detailed financial models and valuation analyses for technology sector clients",
          "• Prepared pitch books and marketing materials for C-suite executives",
          "• Recognized as top-performing analyst in class, receiving early promotion consideration"
        ]
      }
    ],
    
    education: [
      {
        degree: "Master of Business Administration (MBA)",
        concentration: "Finance & Quantitative Analysis",
        school: "MIT Sloan School of Management",
        date: "2020",
        gpa: "GPA: 3.9/4.0"
      },
      {
        degree: "Bachelor of Science in Finance",
        minor: "Minor in Computer Science",
        school: "New York University - Stern School of Business",
        date: "2016",
        honors: "Summa Cum Laude, Beta Gamma Sigma"
      }
    ],
    
    professionalCertifications: [
      {
        cert: "Chartered Financial Analyst (CFA)",
        org: "CFA Institute",
        date: "2019"
      },
      {
        cert: "Financial Risk Manager (FRM)",
        org: "Global Association of Risk Professionals",
        date: "2020"
      },
      {
        cert: "Bloomberg Market Concepts Certification",
        org: "Bloomberg LP",
        date: "2017"
      }
    ],
    
    technicalSkills: {
      financial: ["Financial Modeling", "Valuation (DCF, Comps, LBO)", "Portfolio Analysis", "Risk Management", "Equity Research"],
      software: ["Excel (Advanced/VBA)", "Bloomberg Terminal", "FactSet", "Capital IQ", "Python", "SQL", "Tableau"],
      analysis: ["Statistical Analysis", "Monte Carlo Simulation", "Regression Analysis", "Time Series Forecasting"]
    },
    
    achievements: [
      "Published 15+ equity research reports with average readership of 5,000 institutional investors",
      "Winner of CFA Institute Research Challenge - Northeast Region (2019)",
      "Featured speaker at FinTech Conference Boston: 'AI in Financial Analysis' (2023)",
      "Volunteer financial literacy instructor for Boston Public Schools (2020-Present)"
    ]
  };

  const stats = {
    views: 41023,
    downloads: 11300,
    rating: 4.9,
    reviews: 298
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
              <span className="text-sm text-gray-500">Professional Template</span>
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
                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
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
          {/* Resume Preview - Professional Template */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-2xl p-10">
              {/* Professional Header */}
              <div className="text-center border-b-2 border-gray-800 pb-6 mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{resumeData.name}</h1>
                <p className="text-xl text-gray-700 mb-4">{resumeData.title}</p>
                <div className="flex justify-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    {resumeData.email}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    {resumeData.phone}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {resumeData.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-4 h-4" />
                    {resumeData.linkedin}
                  </span>
                </div>
              </div>

              {/* Professional Summary */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">{resumeData.professionalSummary}</p>
              </section>

              {/* Professional Experience */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {resumeData.professionalExperience.map((job, i) => (
                    <div key={i}>
                      <div className="mb-2">
                        <h3 className="font-bold text-gray-900">{job.title}</h3>
                        <div className="flex justify-between items-baseline">
                          <p className="text-gray-700 font-medium">{job.company}, {job.location}</p>
                          <p className="text-gray-600 text-sm italic">{job.date}</p>
                        </div>
                      </div>
                      <ul className="space-y-1 text-gray-700">
                        {job.achievements.map((achievement, j) => (
                          <li key={j} className="ml-4">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Education
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                      {edu.concentration && <p className="text-gray-700 text-sm">{edu.concentration}</p>}
                      {edu.minor && <p className="text-gray-700 text-sm">{edu.minor}</p>}
                      <p className="text-gray-700">{edu.school}</p>
                      <p className="text-gray-600 text-sm">
                        {edu.date} {edu.gpa && `• ${edu.gpa}`} {edu.honors && `• ${edu.honors}`}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills & Expertise */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Skills & Expertise
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-800">Financial Analysis: </span>
                    <span className="text-gray-700">{resumeData.technicalSkills.financial.join(' • ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Software & Tools: </span>
                    <span className="text-gray-700">{resumeData.technicalSkills.software.join(' • ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Analytical Methods: </span>
                    <span className="text-gray-700">{resumeData.technicalSkills.analysis.join(' • ')}</span>
                  </div>
                </div>
              </section>

              {/* Professional Certifications */}
              <section className="mb-8">
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Professional Certifications
                </h2>
                <div className="space-y-2">
                  {resumeData.professionalCertifications.map((cert, i) => (
                    <div key={i} className="flex justify-between items-baseline">
                      <div>
                        <span className="font-semibold text-gray-800">{cert.cert}</span>
                        <span className="text-gray-700"> • {cert.org}</span>
                      </div>
                      <span className="text-gray-600 text-sm">{cert.date}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Additional Achievements */}
              <section>
                <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Additional Achievements
                </h2>
                <ul className="space-y-1">
                  {resumeData.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-gray-500 mt-0.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
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

            {/* Finance Metrics */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Career Highlights</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-gray-800">$2.1B</span>
                  </div>
                  <p className="text-sm text-gray-600">Portfolio Managed</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-gray-800">23%</span>
                  </div>
                  <p className="text-sm text-gray-600">Avg. Annual Returns</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BarChart className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-gray-800">78%</span>
                  </div>
                  <p className="text-sm text-gray-600">Recommendation Accuracy</p>
                </div>
              </div>
            </div>

            {/* Template Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">About This Template</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Template Style</p>
                  <p className="text-sm text-gray-600">Classic Professional</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Best For</p>
                  <p className="text-sm text-gray-600">Finance professionals, analysts, bankers, accountants</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">ATS Score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">98%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Why This Resume Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Conservative Design</p>
                    <p className="text-sm text-gray-600">Perfect for traditional finance industry expectations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Credentials First</p>
                    <p className="text-sm text-gray-600">CFA and other certifications prominently displayed</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Quantified Results</p>
                    <p className="text-sm text-gray-600">Every achievement backed by numbers and metrics</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Build Your Finance Resume</h3>
              <p className="text-sm opacity-90 mb-4">Create a professional resume that gets interviews at top firms</p>
              <a 
                href="/"
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition"
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
