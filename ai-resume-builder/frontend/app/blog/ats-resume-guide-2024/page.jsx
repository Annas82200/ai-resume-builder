import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, Target, ChevronLeft } from 'lucide-react';

export default function ATSGuidePost() {
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
            <Link 
              href="/"
              className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Create Resume
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="text-gray-600 text-sm font-medium">ATS Optimization</span>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-gray-600 text-sm">Featured Guide</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete ATS Resume Guide 2024: Beat Applicant Tracking Systems
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Learn how to optimize your resume for ATS systems with proven strategies that get you past the bots and in front of hiring managers.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              January 15, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              8 min read
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Why This Matters</h3>
                <p className="text-amber-800">
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
            <h4 className="text-green-900 font-semibold mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              ATS-Friendly Headers
            </h4>
            <ul className="text-green-800 space-y-1">
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
            <h4 className="text-blue-900 font-semibold mb-2">Example:</h4>
            <p className="text-blue-800">
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
            <h4 className="text-red-900 font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Resume Killers
            </h4>
            <ul className="text-red-800 space-y-1">
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
        <div className="bg-gray-900 text-white rounded-xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create an ATS-Optimized Resume?</h2>
          <p className="text-lg opacity-90 mb-6">
            Our AI automatically optimizes your resume for ATS systems using the strategies in this guide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ats-scanner"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <Target className="w-5 h-5" />
              Test Your Current Resume
            </Link>
            <Link 
              href="/"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition border border-gray-700"
            >
              Build ATS-Friendly Resume
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-600">
            © 2024 Resumind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
