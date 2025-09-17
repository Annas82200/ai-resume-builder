'use client'
  
import React, { useState } from 'react';
import { Download, Sparkles, FileText, CheckCircle, Star, Lock, Zap } from 'lucide-react';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });
  const [generatedResume, setGeneratedResume] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [showPricing, setShowPricing] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateResume = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const enhanced = {
        ...formData,
        summary: `Dynamic ${formData.experience ? 'professional' : 'entry-level'} candidate with proven expertise in delivering results. ${formData.summary}`,
        experience: formData.experience ? 
          `• Achieved 25% improvement in team productivity through strategic initiatives\n• ${formData.experience}\n• Demonstrated leadership in cross-functional collaborations` : 
          'Recent graduate eager to apply academic knowledge in practical settings',
        skills: `${formData.skills} • Team Leadership • Problem Solving • Communication • Project Management`
      };
      setGeneratedResume(enhanced);
      setIsGenerating(false);
    }, 2000);
  };

  const templates = {
    professional: {
      name: 'Professional',
      bgColor: 'bg-white',
      headerColor: 'bg-blue-900',
      textColor: 'text-gray-800'
    },
    modern: {
      name: 'Modern',
      bgColor: 'bg-gray-50',
      headerColor: 'bg-gradient-to-r from-purple-600 to-blue-600',
      textColor: 'text-gray-900'
    },
    creative: {
      name: 'Creative',
      bgColor: 'bg-yellow-50',
      headerColor: 'bg-gradient-to-r from-orange-500 to-pink-500',
      textColor: 'text-gray-800'
    }
  };

  const ResumePreview = ({ data, template }) => {
    const style = templates[template];
    return (
      <div className={`${style.bgColor} p-8 rounded-lg shadow-lg max-w-2xl mx-auto`}>
        <div className={`${style.headerColor} text-white p-6 rounded-t-lg -m-8 mb-6`}>
          <h1 className="text-3xl font-bold">{data.fullName}</h1>
          <div className="flex gap-4 mt-2 text-sm">
            <span>{data.email}</span>
            <span>{data.phone}</span>
            <span>{data.location}</span>
          </div>
        </div>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Professional Summary</h2>
          <p className={style.textColor}>{data.summary}</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Experience</h2>
          <p className={`${style.textColor} whitespace-pre-line`}>{data.experience}</p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Education</h2>
          <p className={style.textColor}>{data.education}</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Skills</h2>
          <p className={style.textColor}>{data.skills}</p>
        </section>
      </div>
    );
  };

  const PricingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-4xl w-full m-4">
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Free</h3>
            <p className="text-3xl font-bold mb-4">$0<span className="text-sm text-gray-500">/month</span></p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 1 Resume</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Basic Templates</li>
              <li className="flex items-center text-gray-400"><Lock className="w-4 h-4 mr-2" /> AI Enhancement</li>
            </ul>
            <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg">Current Plan</button>
          </div>
          
          <div className="border-2 border-blue-500 rounded-lg p-6 relative hover:shadow-xl transition">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm text-gray-500">/month</span></p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Unlimited Resumes</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> All Templates</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> AI Enhancement</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Cover Letters</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> ATS Optimization</li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Start Free Trial
            </button>
          </div>
          
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">$29.99<span className="text-sm text-gray-500">/month</span></p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Everything in Pro</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> LinkedIn Optimization</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> 1-on-1 Review</li>
              <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Priority Support</li>
            </ul>
            <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition">
              Contact Sales
            </button>
          </div>
        </div>
        
        <button 
          onClick={() => setShowPricing(false)}
          className="mt-6 text-gray-500 hover:text-gray-700 mx-auto block"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800">AI Resume Builder</h1>
        </div>
        <p className="text-lg text-gray-600">Create ATS-optimized resumes in minutes with AI</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-gray-600">4.9/5 from 2,341 reviews</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="New York, NY"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief summary of your professional background..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your work experience..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Bachelor's in Computer Science, MIT"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="JavaScript, React, Node.js..."
                />
              </div>

              {/* Template Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Choose Template</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(templates).map(([key, template]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedTemplate(key)}
                      className={`p-3 rounded-lg border-2 transition ${
                        selectedTemplate === key 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FileText className="w-6 h-6 mx-auto mb-1" />
                      <span className="text-sm">{template.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={generateResume}
                disabled={!formData.fullName || !formData.email || isGenerating}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Enhancing with AI...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Generate AI-Enhanced Resume
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Preview Section */}
          <div>
            {generatedResume ? (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">Preview</h2>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowPricing(true)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
                <ResumePreview data={generatedResume} template={selectedTemplate} />
                
                {/* Call to Action */}
                <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">Unlock Unlimited Resumes</h3>
                  <p className="mb-4">Get access to all templates, cover letters, and advanced AI features</p>
                  <button
                    onClick={() => setShowPricing(true)}
                    className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                  >
                    View Pricing Plans
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <FileText className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Your enhanced resume will appear here</p>
                  <p className="text-sm mt-2">Fill in your information and click generate</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Resume Builder?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
            <p className="text-gray-600">Our AI enhances your resume with industry-specific keywords and powerful action verbs</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ATS-Optimized</h3>
            <p className="text-gray-600">Beat applicant tracking systems with our proven resume formats</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-600">Create a professional resume in under 5 minutes</p>
          </div>
        </div>
      </div>

      {/* Pricing Modal */}
      {showPricing && <PricingModal />}
    </div>
  );
};

export default ResumeBuilder;
