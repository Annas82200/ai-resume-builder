'use client'
  
import { FileText, Briefcase, Code, Palette, Award, ChevronRight, Eye, Download, Star, Building2, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function ExamplesPage() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestData, setRequestData] = useState({ industry: '', email: '' });
  const examples = [
    {
      id: 'tech-professional',
      name: 'Sarah Chen',
      title: 'Senior Software Engineer',
      industry: 'Technology',
      template: 'modern',
      description: 'Full-stack developer with 8 years experience in enterprise applications',
      highlights: ['Led team of 12 developers', 'Reduced system latency by 60%', 'AWS certified architect'],
      gradient: 'from-blue-600 to-purple-600',
      icon: Code,
      rating: 4.9,
      downloads: 12500
    },
    {
      id: 'marketing-creative',
      name: 'Marcus Thompson',
      title: 'Creative Director',
      industry: 'Marketing & Design',
      template: 'creative',
      description: 'Award-winning creative leader specializing in brand transformation',
      highlights: ['$15M campaign success', '3x ROI improvement', 'Cannes Lions winner'],
      gradient: 'from-purple-600 to-pink-600',
      icon: Palette,
      rating: 4.8,
      downloads: 9800
    },
    {
      id: 'executive-leader',
      name: 'Jennifer Williams',
      title: 'Chief Operations Officer',
      industry: 'Executive Leadership',
      template: 'executive',
      description: 'Strategic executive with track record of operational excellence',
      highlights: ['Managed $500M P&L', 'Led 5 acquisitions', 'Fortune 500 experience'],
      gradient: 'from-amber-600 to-orange-600',
      icon: Award,
      rating: 5.0,
      downloads: 8200
    },
    {
      id: 'finance-professional',
      name: 'David Kumar',
      title: 'Financial Analyst',
      industry: 'Finance & Banking',
      template: 'professional',
      description: 'CFA charterholder with expertise in equity research and valuation',
      highlights: ['CFA Level III', 'Published analyst', '$2B portfolio management'],
      gradient: 'from-green-600 to-emerald-600',
      icon: Building2,
      rating: 4.9,
      downloads: 11300
    },
    {
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
    },
    {
      id: 'physical-therapist',
      name: 'Michael Chen',
      title: 'Physical Therapist',
      industry: 'Healthcare',
      template: 'modern',
      description: 'Sports rehabilitation specialist',
      highlights: ['DPT certified', 'Sports injury expert', '95% recovery rate'],
      gradient: 'from-green-600 to-teal-600',
      icon: GraduationCap,
      rating: 4.8,
      downloads: 6200
    },
    {
      id: 'high-school-teacher',
      name: 'Sarah Williams',
      title: 'High School Science Teacher',
      industry: 'Education',
      template: 'professional',
      description: 'Award-winning STEM educator',
      highlights: ['Teacher of the Year', '98% pass rate', 'STEM program creator'],
      gradient: 'from-blue-600 to-indigo-600',
      icon: GraduationCap,
      rating: 5.0,
      downloads: 7800
    },
    {
      id: 'college-professor',
      name: 'Dr. James Mitchell',
      title: 'Associate Professor',
      industry: 'Education',
      template: 'executive',
      description: 'Published researcher and educator',
      highlights: ['PhD in Education', '50+ publications', 'Department chair'],
      gradient: 'from-purple-600 to-indigo-600',
      icon: GraduationCap,
      rating: 4.9,
      downloads: 5400
    } 
  ];

  const ResumePreview = ({ example }) => {
    const Icon = example.icon;
    
    // Different preview styles based on template
    if (example.template === 'modern') {
      return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
          <div className="flex h-64">
            {/* Sidebar Preview */}
            <div className="w-1/3 bg-gray-900 p-4 text-white">
              <div className="h-8 bg-gray-700 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                <div className="h-2 bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="mt-6">
                <div className="h-2 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-2 bg-gray-700 rounded w-2/3"></div>
              </div>
            </div>
            {/* Main Content Preview */}
            <div className="w-2/3 p-4">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 text-white">
              <p className="font-semibold">Modern Two-Column Design</p>
              <p className="text-sm opacity-90">Perfect for tech professionals</p>
            </div>
          </div>
        </div>
      );
    } else if (example.template === 'creative') {
      return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
          <div className="h-64 relative">
            {/* Header with Gradient */}
            <div className={`h-24 bg-gradient-to-br ${example.gradient} p-4`}>
              <div className="h-6 bg-white/30 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-white/20 rounded w-1/2"></div>
            </div>
            {/* Content */}
            <div className="p-4">
              <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="h-16 bg-purple-50 rounded"></div>
                <div className="h-16 bg-pink-50 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 text-white">
              <p className="font-semibold">Creative Visual Design</p>
              <p className="text-sm opacity-90">Stand out in creative fields</p>
            </div>
          </div>
        </div>
      );
    } else if (example.template === 'executive') {
      return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
          <div className="h-64 p-6 relative">
            {/* Executive Header */}
            <div className="text-center mb-4">
              <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto mb-2"></div>
              <div className="h-2 bg-gray-200 rounded w-1/4 mx-auto"></div>
            </div>
            <div className="border-t-2 border-b-2 border-amber-600 py-2 mb-4">
              <div className="h-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
            {/* Content with elegant spacing */}
            <div className="space-y-4">
              <div>
                <div className="h-3 bg-amber-100 rounded w-1/4 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6 mt-1"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-amber-50 rounded"></div>
                <div className="h-12 bg-amber-50 rounded"></div>
              </div>
            </div>
          </div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 text-white">
              <p className="font-semibold">Executive Elegance</p>
              <p className="text-sm opacity-90">For senior leadership roles</p>
            </div>
          </div>
        </div>
      );
    } else {
      // Professional template
      return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
          <div className="h-64 p-6 relative">
            {/* Traditional Header */}
            <div className="text-center border-b-2 border-gray-800 pb-3 mb-4">
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
              <div className="h-2 bg-gray-200 rounded w-1/3 mx-auto"></div>
            </div>
            {/* Content */}
            <div className="space-y-3">
              <div>
                <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
                <div className="h-2 bg-gray-200 rounded w-4/5"></div>
              </div>
              <div>
                <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>
                <div className="space-y-1">
                  <div className="h-2 bg-gray-200 rounded"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 text-white">
              <p className="font-semibold">Classic Professional</p>
              <p className="text-sm opacity-90">Trusted traditional format</p>
            </div>
          </div>
        </div>
      );
    }
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
              <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Blog
              </a>
              <a href="/examples" className="text-blue-600 font-medium">
                Examples
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Pricing
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Resume Examples
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get inspired by real resume examples that landed interviews at top companies. 
            Each template is optimized for ATS and designed to showcase your unique strengths.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <Download className="w-4 h-4 text-green-600" />
              <span className="font-medium">41,800+ Downloads</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span className="font-medium">89% Interview Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {examples.map((example) => {
            const Icon = example.icon;
            return (
              <div key={example.id} className="group">
                {/* Example Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Example Header */}
                  <div className={`bg-gradient-to-r ${example.gradient} p-6 text-white`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{example.name}</h3>
                        <p className="text-lg opacity-90">{example.title}</p>
                      </div>
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-4">{example.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{example.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{example.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Resume Preview */}
                  <div className="relative">
                    <ResumePreview example={example} />
                  </div>
                  
                  {/* Key Highlights */}
                  <div className="p-6 border-t">
                    <h4 className="font-semibold mb-3 text-gray-800">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {example.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-green-600 mt-0.5" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <a
                        href={`/examples/${example.id}`}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Full Resume
                      </a>
                      <a
                        href="/"
                        className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-center"
                      >
                        Use This Template
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More Examples Coming Soon */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">More Examples Coming Soon!</h3>
          <p className="text-gray-600 mb-6">
            We're adding new resume examples every week across all industries. Want to see your industry featured?
          </p>
          <button 
            onClick={() => setShowRequestModal(true)}
            className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Request an Example
          </button>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse by Industry
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
            { name: 'Technology', icon: Code, hasExamples: true },
            { name: 'Marketing & Design', icon: Palette, hasExamples: true },
            { name: 'Finance & Banking', icon: Building2, hasExamples: true },
            { name: 'Healthcare', icon: GraduationCap, comingSoon: true },
            { name: 'Education', icon: GraduationCap, comingSoon: true },
            { name: 'Sales', icon: Briefcase, comingSoon: true },
            { name: 'Engineering', icon: Briefcase, comingSoon: true },
            { name: 'Executive', icon: Award, hasExamples: true }
          ].map((industry) => {
            const Icon = industry.icon;
            // Count actual examples for this industry
            const count = examples.filter(ex => 
              ex.industry.toLowerCase().includes(industry.name.split(' ')[0].toLowerCase())
            ).length;
            
            return (
              <a
                key={industry.name}
                href={`/examples?industry=${industry.name.toLowerCase()}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 text-center transition group relative"
              >
                {industry.comingSoon && (
                  <span className="absolute top-2 right-2 bg-gray-400 text-white text-xs px-2 py-1 rounded-full">
                    Soon
                  </span>
                )}
                {industry.hasExamples && count > 0 && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {count}
                  </span>
                )}
                <Icon className="w-8 h-8 mx-auto text-gray-600 group-hover:text-blue-600 mb-2 transition" />
                <p className="font-medium text-gray-800">{industry.name}</p>
              </a>
            );
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Own Standout Resume?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Use our AI-powered builder to create a resume that's even better than these examples
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition"
          >
            <FileText className="w-5 h-5" />
            Start Building My Resume
          </a>
          <p className="text-sm opacity-75 mt-4">
            No credit card required • 100% free to start
          </p>
        </div>
      </section>
      {/* Request Example Modal */}
      {/* Request Example Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Request an Industry Example</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <input
                  type="text"
                  value={requestData.industry}
                  onChange={(e) => setRequestData({...requestData, industry: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Healthcare, Real Estate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={requestData.email}
                  onChange={(e) => setRequestData({...requestData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <button
                onClick={async () => {
                  if (!requestData.industry || !requestData.email) {
                    alert('Please fill in all fields');
                    return;
                  }
                  
                  try {
                    const response = await fetch('/api/request-example', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(requestData)
                    });
                    
                    const data = await response.json();
                    
                    if (data.success) {
                      alert('Thank you! We\'ll add this example soon.');
                      setShowRequestModal(false);
                      setRequestData({ industry: '', email: '' });
                    } else {
                      alert('Sorry, there was an error. Please try again.');
                    }
                  } catch (error) {
                    console.error('Error submitting request:', error);
                    alert('Sorry, there was an error. Please try again.');
                  }
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit Request
              </button>
              <button
                onClick={() => setShowRequestModal(false)}
                className="w-full text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
