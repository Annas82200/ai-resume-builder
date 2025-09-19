import { Download, Mail, Phone, MapPin, Linkedin, ChevronLeft, Star, Eye, Copy, Share2, Briefcase, TrendingUp, Users, Target, Award, BarChart3 } from 'lucide-react';

export default function SalesManagerExample() {
  const resumeData = {
    name: "Michael Thompson",
    title: "Senior Sales Manager",
    email: "michael.thompson@sales.pro",
    phone: "+1 (555) 123-4567",
    location: "Chicago, IL",
    linkedin: "linkedin.com/in/michaelthompson",
    
    summary: "Results-driven Senior Sales Manager with 12+ years of experience leading high-performing sales teams and exceeding revenue targets. Proven track record of developing strategic partnerships, implementing data-driven sales processes, and scaling revenue from $5M to $50M. Expert in SaaS, B2B enterprise sales, and building customer-centric sales cultures that drive 40%+ year-over-year growth.",
    
    experience: [
      {
        title: "Senior Sales Manager",
        company: "TechSolutions Corp",
        location: "Chicago, IL",
        date: "January 2020 - Present",
        achievements: [
          "• Led team of 25 sales representatives to achieve 145% of annual quota, generating $52M in new revenue",
          "• Implemented data-driven sales methodology that increased conversion rates by 35% and reduced sales cycle by 20 days",
          "• Built strategic partnerships with Fortune 500 companies, resulting in $15M in enterprise contracts",
          "• Developed and executed territory expansion strategy that opened 3 new markets and increased market share by 22%",
          "• Mentored 8 junior sales reps who were promoted to senior positions within 18 months"
        ]
      },
      {
        title: "Sales Manager",
        company: "CloudFirst Software",
        location: "Chicago, IL",
        date: "June 2017 - December 2019",
        achievements: [
          "• Exceeded team quota by 130% for 10 consecutive quarters, totaling $28M in closed deals",
          "• Created and implemented sales playbook that became company standard, improving win rate by 40%",
          "• Established key account management program that increased customer retention from 72% to 94%",
          "• Recruited and onboarded 12 top-performing sales professionals, reducing hiring time by 50%"
        ]
      },
      {
        title: "Senior Sales Representative",
        company: "BusinessPro Solutions",
        location: "Milwaukee, WI",
        date: "March 2015 - May 2017",
        achievements: [
          "• Consistently ranked #1 sales rep out of 50+, achieving 180% of quota and $8M in annual sales",
          "• Pioneered social selling strategy that generated 60+ qualified leads monthly via LinkedIn",
          "• Closed largest deal in company history: $2.3M multi-year enterprise contract",
          "• Developed vertical-specific sales approach for healthcare sector, opening new $5M revenue stream"
        ]
      },
      {
        title: "Sales Representative",
        company: "StartUp Innovations",
        location: "Milwaukee, WI",
        date: "January 2012 - February 2015",
        achievements: [
          "• Ramped from 0 to 150% of quota within first 6 months, earning Rookie of the Year award",
          "• Built pipeline of 200+ prospects through cold outreach, networking, and referrals",
          "• Collaborated with product team to refine value proposition based on customer feedback"
        ]
      }
    ],
    
    education: [
      {
        degree: "Master of Business Administration (MBA)",
        school: "Northwestern University - Kellogg School of Management",
        location: "Evanston, IL",
        date: "2018 - 2020",
        details: "Concentration in Sales Management and Marketing Strategy"
      },
      {
        degree: "Bachelor of Science in Business Administration",
        school: "University of Wisconsin-Madison",
        location: "Madison, WI",
        date: "2008 - 2012",
        details: "Major in Marketing, Minor in Psychology"
      }
    ],
    
    skills: {
      "Sales Technologies": ["Salesforce CRM", "HubSpot", "Outreach.io", "LinkedIn Sales Navigator", "Gong.io", "ZoomInfo"],
      "Sales Methodologies": ["MEDDIC", "Challenger Sale", "SPIN Selling", "Solution Selling", "Value-Based Selling"],
      "Leadership": ["Team Building", "Performance Coaching", "Territory Planning", "Forecasting", "Strategic Planning"],
      "Industry Knowledge": ["SaaS", "Enterprise Software", "Cloud Computing", "Digital Transformation", "B2B Sales"]
    },
    
    achievements: [
      "President's Club Winner (2018, 2019, 2021, 2022, 2023)",
      "Salesforce Certified Sales Cloud Consultant",
      "Featured Speaker at SaaStr Annual 2022: 'Building Scalable Sales Teams'",
      "Published in Harvard Business Review: 'The Future of B2B Sales'"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/examples" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Examples</span>
            </a>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition">
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Preview</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <Copy className="w-4 h-4" />
                <span>Use This Template</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                <Briefcase className="w-8 h-8" />
              </div>
              <span className="text-blue-100">Sales Manager Resume</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Senior Sales Manager Resume Example
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              A proven template for sales leaders who drive revenue growth and build high-performing teams. 
              Optimized for ATS systems and designed to showcase your sales achievements.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>15,234 Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>87% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Why This Sales Resume Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Metrics-Driven</h3>
              <p className="text-sm text-gray-600">Every achievement backed by specific numbers and revenue figures</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Results-Focused</h3>
              <p className="text-sm text-gray-600">Highlights quota attainment and revenue generation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Growth Story</h3>
              <p className="text-sm text-gray-600">Shows clear career progression and expanding responsibilities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Industry Recognition</h3>
              <p className="text-sm text-gray-600">Features awards and thought leadership credentials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Resume Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
              <h1 className="text-3xl font-bold mb-2">{resumeData.name}</h1>
              <p className="text-xl mb-4">{resumeData.title}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{resumeData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{resumeData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{resumeData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>{resumeData.linkedin}</span>
                </div>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-8">
              {/* Summary */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  Sales Experience
                </h2>
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{job.title}</h3>
                        <p className="text-gray-600">{job.company} • {job.location}</p>
                      </div>
                      <span className="text-sm text-gray-500">{job.date}</span>
                    </div>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-700 text-sm leading-relaxed">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Education */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Education
                </h2>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.school} • {edu.location}</p>
                        <p className="text-sm text-gray-500">{edu.details}</p>
                      </div>
                      <span className="text-sm text-gray-500">{edu.date}</span>
                    </div>
                  </div>
                ))}
              </section>

              {/* Skills */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Sales Skills & Technologies
                </h2>
                <div className="space-y-3">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-gray-700 mb-2">{category}:</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Awards & Recognition
                </h2>
                <ul className="space-y-2">
                  {resumeData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Land Your Dream Sales Role?</h2>
            <p className="mb-6">Use this proven sales manager resume template and our AI-powered builder to create your winning resume in minutes.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition">
              Create My Sales Resume Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
