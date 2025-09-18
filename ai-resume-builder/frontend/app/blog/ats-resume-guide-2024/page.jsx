import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, Target } from 'lucide-react';

export default function ATSGuidePost() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Resumind Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Resumind</h1>
                <p className="text-sm text-gray-600">AI that understands your mind</p>
              </div>
            </Link>
            <Link 
              href="/"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
            >
              Create Resume
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              ATS Optimization
            </span>
            <span className="text-gray-500 text-sm">Featured Guide</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete ATS Resume Guide 2024: Beat Applicant Tracking Systems
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Learn how to optimize your resume for ATS systems with proven strategies that get you past the bots and in front of hiring managers.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              January 15, 2024
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 min read
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Why This Matters</h3>
                <p className="text-yellow-700">
                  95% of Fortune 500 companies use ATS systems. 78% of resumes never reach human eyes. 
                  This guide will help you be in the 22% that get seen.
                </p>
              </div>
            </div>
          </div>

          <h2>What is an ATS (Applicant Tracking System)?</h2>
          <p>
            An Applicant Tracking System is software that companies use to filter and rank resumes before 
            human recruiters see them. Think of it as a gatekeeper that decides if your resume is worthy 
            of human attention.
          </p>

          <h2>The 5 Critical ATS Optimization Rules</h2>

          <h3>1. Use Standard Section Headers</h3>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h4 className="text-green-800 font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              ATS-Friendly Headers
            </h4>
            <ul className="text-green-700 space-y-1">
              <li>• Professional Summary (not "About Me")</li>
              <li>• Work Experience (not "Career History")</li>
              <li>• Education (not "Academic Background")</li>
              <li>• Skills (not "Core Competencies")</li>
            </ul>
          </div>

          <h3>2. Include Industry Keywords</h3>
          <p>
            ATS systems scan for specific keywords mentioned in the job description. Here's how to find and use them:
          </p>
          <ul>
            <li>Copy the entire job description</li>
            <li>Identify repeated skills, tools, and qualifications</li>
            <li>Naturally incorporate these exact terms in your resume</li>
            <li>Use both the full term and acronym (e.g., "Search Engine Optimization (SEO)")</li>
          </ul>

          <h3>3. Choose the Right File Format</h3>
          <p>
            Always submit your resume as a .docx or .pdf file. Avoid:
          </p>
          <ul>
            <li>Images or graphics in place of text</li>
            <li>Tables or columns that confuse ATS parsing</li>
            <li>Unusual fonts (stick to Arial, Calibri, or Times New Roman)</li>
            <li>Headers and footers with important information</li>
          </ul>

          <h3>4. Use Bullet Points Effectively</h3>
          <p>
            Start each bullet point with a strong action verb and include specific achievements:
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="text-blue-800 font-semibold mb-2">Example:</h4>
            <p className="text-blue-700">
              Instead of: "Responsible for managing social media"<br/>
              Write: "Increased social media engagement by 150% across 5 platforms, reaching 50K+ monthly active users"
            </p>
          </div>

          <h3>5. Include Quantifiable Results</h3>
          <p>
            ATS systems and humans both love numbers. Always include:
          </p>
          <ul>
            <li>Percentages of improvement</li>
            <li>Dollar amounts of savings/revenue</li>
            <li>Number of people managed</li>
            <li>Size of budgets handled</li>
            <li>Timeline achievements</li>
          </ul>

          <h2>ATS-Friendly Resume Template</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-4">Optimal Resume Structure:</h3>
            <ol className="space-y-2">
              <li>1. Header (Name, Phone, Email, LinkedIn, Location)</li>
              <li>2. Professional Summary (3-4 lines)</li>
              <li>3. Core Skills (keyword-rich)</li>
              <li>4. Professional Experience (reverse chronological)</li>
              <li>5. Education</li>
              <li>6. Certifications (if relevant)</li>
            </ol>
          </div>

          <h2>Common ATS Mistakes to Avoid</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h4 className="text-red-800 font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Resume Killers
            </h4>
            <ul className="text-red-700 space-y-1">
              <li>• Using images, charts, or graphics</li>
              <li>• Creative section names ("My Superpowers" instead of "Skills")</li>
              <li>• Multiple column layouts</li>
              <li>• Important info in headers/footers</li>
              <li>• Uncommon abbreviations</li>
            </ul>
          </div>

          <h2>Test Your Resume</h2>
          <p>
            Before submitting, test your resume's ATS compatibility:
          </p>
          <ol>
            <li>Copy your resume text and paste it into a plain text document</li>
            <li>Check if all information appears correctly</li>
            <li>Look for formatting issues or garbled text</li>
            <li>Use our free ATS scanner tool for detailed analysis</li>
          </ol>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create an ATS-Optimized Resume?</h2>
          <p className="text-lg opacity-90 mb-6">
            Our AI automatically optimizes your resume for ATS systems using the strategies in this guide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ats-scanner"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Target className="w-5 h-5" />
              Test Your Current Resume
            </Link>
            <Link 
              href="/"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
            >
              Build ATS-Friendly Resume
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
