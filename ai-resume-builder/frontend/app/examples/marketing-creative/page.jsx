import { Download, Mail, Phone, MapPin, Linkedin, Globe, ChevronLeft, Star, Eye, Copy, Share2, Zap, Palette, Award, TrendingUp, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function MarketingCreativeExample() {
  const resumeData = {
    name: "Marcus Thompson",
    title: "Creative Director",
    tagline: "Transforming Brands Through Strategic Creativity",
    email: "marcus@creativestudio.com",
    phone: "+1 (310) 555-0199",
    location: "Los Angeles, CA",
    linkedin: "linkedin.com/in/marcusthompson",
    portfolio: "marcusthompson.design",
    
    summary: "Award-winning Creative Director with 12+ years crafting compelling narratives that drive business growth. Expert in brand strategy, digital innovation, and integrated campaigns. Led creative teams at top agencies delivering work for Fortune 100 brands. Passionate about blending data-driven insights with breakthrough creativity to create memorable brand experiences that resonate with audiences and deliver measurable results.",
    
    experience: [
      {
        title: "Creative Director",
        company: "Apex Creative Agency",
        location: "Los Angeles, CA",
        date: "2019 - Present",
        highlights: [
          "Spearheaded $15M integrated campaign for Nike resulting in 340% increase in social engagement and 85% boost in sales",
          "Built and mentored diverse creative team of 25 designers, writers, and strategists, improving retention by 90%",
          "Won 3 Cannes Lions, 2 One Show Pencils, and Webby Award for innovative AR campaign",
          "Pioneered agency's digital transformation, launching in-house content studio generating $3M annual revenue"
        ]
      },
      {
        title: "Associate Creative Director",
        company: "Spark Innovation Lab",
        location: "Los Angeles, CA",
        date: "2016 - 2019",
        highlights: [
          "Led rebrand for Spotify resulting in 200% increase in brand recognition and $50M valuation boost",
          "Developed viral TikTok campaign reaching 80M impressions and 12M engagements in 2 weeks",
          "Managed $8M annual production budget while reducing costs by 25% through strategic vendor partnerships",
          "Launched agency's first sustainability initiative, reducing carbon footprint by 40%"
        ]
      },
      {
        title: "Senior Art Director",
        company: "Digital Dreams Studio",
        location: "San Francisco, CA",
        date: "2013 - 2016",
        highlights: [
          "Designed award-winning mobile app interface downloaded 5M+ times with 4.8 star rating",
          "Created visual identity systems for 20+ startups, with 80% achieving successful Series A funding",
          "Established agency's motion design department, generating additional $1.5M revenue stream"
        ]
      }
    ],
    
    skills: {
      creative: ["Brand Strategy", "Art Direction", "Conceptual Design", "Storytelling", "UX/UI Design"],
      technical: ["Adobe Creative Suite", "Figma", "Cinema 4D", "After Effects", "Sketch", "InVision"],
      strategic: ["Campaign Development", "Market Research", "Consumer Psychology", "Trend Forecasting"],
      leadership: ["Team Building", "Client Relations", "Pitch Presentation", "Budget Management"]
    },
    
    achievements: [
      {
        icon: Award,
        title: "Industry Recognition",
        items: [
          "3x Cannes Lions Gold (2021, 2022, 2023)",
          "2x One Show Pencil Winner",
          "Webby Award - Best Interactive Campaign",
          "Ad Age 40 Under 40 (2022)"
        ]
      },
      {
        icon: TrendingUp,
        title: "Campaign Impact",
        items: [
          "$250M+ in client revenue generated",
          "500M+ total campaign impressions",
          "Average 3x ROI on campaigns",
          "85% client retention rate"
        ]
      },
      {
        icon: Users,
        title: "Leadership",
        items: [
          "Mentored 50+ junior creatives",
          "Speaker at 10+ industry conferences",
          "Guest lecturer at UCLA & ArtCenter",
          "Published in AdWeek & Fast Company"
        ]
      }
    ],
    
    education: {
      degree: "Bachelor of Fine Arts in Graphic Design",
      school: "Rhode Island School of Design",
      date: "2008 - 2012",
      honors: "Summa Cum Laude, Presidential Scholar"
    }
  };

  const stats = {
    views: 38945,
    downloads: 9800,
    rating: 4.8,
    reviews: 267
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
              <span className="text-sm text-gray-500">Creative Template</span>
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
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
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
          {/* Resume Preview - Creative Template */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Creative Header with Gradient */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
                <div className="relative z-10">
                  <h1 className="text-5xl font-bold mb-2">{resumeData.name}</h1>
                  <p className="text-2xl opacity-90 mb-3">{resumeData.title}</p>
                  <p className="text-lg opacity-80 italic">{resumeData.tagline}</p>
                  <div className="flex flex-wrap gap-4 mt-6 text-sm">
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
                      <Globe className="w-4 h-4" />
                      <span>{resumeData.portfolio}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10">
                {/* About Me with Icon */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <Palette className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">{resumeData.summary}</p>
                </section>

                {/* Experience Journey */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Experience Journey</h2>
                  </div>
                  <div className="space-y-8 relative">
                    <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-pink-300"></div>
                    {resumeData.experience.map((job, i) => (
                      <div key={i} className="relative pl-14">
                        <div className="absolute left-0 top-2 w-12 h-12 bg-white rounded-full border-4 border-purple-300 flex items-center justify-center">
                          <span className="text-purple-600 font-bold">{i + 1}</span>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                          <div className="mb-3">
                            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                            <p className="text-purple-600 font-semibold">{job.company} • {job.location}</p>
                            <p className="text-gray-500 text-sm">{job.date}</p>
                          </div>
                          <ul className="space-y-2">
                            {job.highlights.map((highlight, j) => (
                              <li key={j} className="flex items-start gap-2 text-gray-700">
                                <Star className="w-4 h-4 text-pink-500 mt-1 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Skills & Expertise */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Skills & Expertise</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(resumeData.skills).map(([category, skills]) => (
                      <div key={category} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                        <h3 className="font-semibold text-purple-800 capitalize mb-3">{category} Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, i) => (
                            <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Achievements Grid */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Achievements & Impact</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {resumeData.achievements.map((category, i) => {
                      const Icon = category.icon;
                      return (
                        <div key={i} className="bg-white rounded-xl p-6 border border-purple-100 hover:shadow-lg transition">
                          <div className="flex items-center gap-3 mb-4">
                            <Icon className="w-8 h-8 text-purple-600" />
                            <h3 className="font-bold text-gray-900">{category.title}</h3>
                          </div>
                          <ul className="space-y-2">
                            {category.items.map((item, j) => (
                              <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-pink-500 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Education */}
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900">{resumeData.education.degree}</h3>
                    <p className="text-purple-600 font-medium">{resumeData.education.school}</p>
                    <p className="text-gray-600">{resumeData.education.date} • {resumeData.education.honors}</p>
                  </div>
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
                  <p className="text-sm text-gray-600">Creative Visual Design</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Best For</p>
                  <p className="text-sm text-gray-600">Creative directors, designers, marketers, brand strategists</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">ATS Score</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">88%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Why This Resume Works</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Visual Hierarchy</p>
                    <p className="text-sm text-gray-600">Eye-catching design that guides readers through content</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Results Focused</p>
                    <p className="text-sm text-gray-600">Quantified achievements showing ROI and impact</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-purple-600 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Industry Awards</p>
                    <p className="text-sm text-gray-600">Prominent display of recognition and achievements</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Create Your Creative Resume</h3>
              <p className="text-sm opacity-90 mb-4">Stand out with a visually stunning resume like Marcus's</p>
              <a 
                href="/"
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:shadow-lg transition"
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
