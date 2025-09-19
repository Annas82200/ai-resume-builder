'use client'
  
import { FileText, Briefcase, Code, Palette, Award, ChevronRight, Eye, Download, Star, Building2, GraduationCap, Filter, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ExamplesPage() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestData, setRequestData] = useState({ industry: '', email: '' });
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState('all');
  
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
    },
    {
      id: 'sales-manager',
      name: 'Jennifer Thompson',
      title: 'Regional Sales Manager',
      industry: 'Sales',
      template: 'modern',
      description: 'B2B sales leader exceeding targets for 10+ years',
      highlights: ['$15M annual revenue', '150% quota achievement', 'Team of 12 reps'],
      gradient: 'from-orange-600 to-red-600',
      icon: Briefcase,
      rating: 4.8,
      downloads: 9200
    },
    {
      id: 'software-engineer',
      name: 'David Park',
      title: 'Senior Software Engineer',
      industry: 'Engineering',
      template: 'modern',
      description: 'Full-stack developer with cloud architecture expertise',
      highlights: ['Led 5 major projects', 'AWS certified', 'Reduced costs 40%'],
      gradient: 'from-blue-600 to-cyan-600',
      icon: Code,
      rating: 4.9,
      downloads: 11500
    }
  ];
  
  // Filter function
  const filteredExamples = examples.filter(example => {
    const matchesIndustry = selectedIndustry === 'all' || 
      example.industry.toLowerCase().includes(selectedIndustry.toLowerCase()) ||
      selectedIndustry.toLowerCase().includes(example.industry.toLowerCase());
    const matchesTemplate = selectedTemplate === 'all' || example.template === selectedTemplate;
    return matchesIndustry && matchesTemplate;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Resumind" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-semibold text-gray-900">Resumind</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/examples" className="text-gray-900 font-medium">
                Examples
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                Pricing
              </Link>
              <Link 
                href="/"
                className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Resume Examples
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real resume examples from professionals who landed interviews at top companies. 
            Each template is optimized for ATS and designed to showcase your unique strengths.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-medium text-gray-700">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-700">41,800+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-gray-600" />
              <span className="font-medium text-gray-700">89% Interview Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filter Examples</h3>
          </div>
          <div className="flex flex-wrap gap-6">
            {/* Industry Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="all">All Industries</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance & Banking</option>
                <option value="marketing">Marketing & Design</option>
                <option value="sales">Sales</option>
                <option value="education">Education</option>
                <option value="engineering">Engineering</option>
                <option value="executive">Executive Leadership</option>
              </select>
            </div>
            
            {/* Template Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Template Style
              </label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              >
                <option value="all">All Templates</option>
                <option value="professional">Professional</option>
                <option value="modern">Modern</option>
                <option value="creative">Creative</option>
                <option value="executive">Executive</option>
              </select>
            </div>
            
            {/* Results Count */}
            <div className="flex items-end">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredExamples.length}</span> examples
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredExamples.map((example) => {
            const Icon = example.icon;
            return (
              <div key={example.id} className="group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  {/* Example Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{example.name}</h3>
                        <p className="text-gray-600">{example.title}</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <Icon className="w-5 h-5 text-gray-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{example.description}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-gray-700 font-medium">{example.rating}</span>
                      </div>
                      <div className="text-gray-600">
                        {example.downloads.toLocaleString()} downloads
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Highlights */}
                  <div className="p-6 bg-gray-50">
                    <h4 className="font-medium mb-3 text-gray-900">Key Highlights</h4>
                    <ul className="space-y-2">
                      {example.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gray-400 mt-0.5">•</span>
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <Link
                        href={`/examples/${example.id}`}
                        className="flex-1 bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        View Full Resume
                      </Link>
                      <Link
                        href="/"
                        className="flex-1 bg-white text-gray-900 py-2.5 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors text-center text-sm"
                      >
                        Use Template
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredExamples.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No examples found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedIndustry('all');
                setSelectedTemplate('all');
              }}
              className="text-gray-900 hover:text-gray-700 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* More Examples Coming Soon */}
        <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">More Examples Coming Soon</h3>
          <p className="text-gray-600 mb-6">
            We're adding new resume examples every week across all industries. Want to see your industry featured?
          </p>
          <button 
            onClick={() => setShowRequestModal(true)}
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Request an Example
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Own Standout Resume?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Use our AI-powered builder to create a resume that's even better than these examples
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Start Building My Resume
          </Link>
          <p className="text-sm opacity-75 mt-4">
            No credit card required • 100% free to start
          </p>
        </div>
      </section>

      {/* Request Example Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Request an Industry Example</h3>
              <button
                onClick={() => setShowRequestModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <input
                  type="text"
                  value={requestData.industry}
                  onChange={(e) => setRequestData({...requestData, industry: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="e.g., Healthcare, Real Estate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={requestData.email}
                  onChange={(e) => setRequestData({...requestData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
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
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-600">
            © 2024 Resumind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
