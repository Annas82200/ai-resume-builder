import Link from 'next/link';
import { Mail, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
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
              <Link href="/examples" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
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

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">Email Support</h2>
              </div>
              <p className="text-gray-600 mb-3">
                For general inquiries and support, reach out to our team.
              </p>
              <a href="mailto:support@resumind.co" className="text-gray-900 font-medium hover:text-gray-700">
                support@resumind.co
              </a>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">Response Time</h2>
              </div>
              <p className="text-gray-600">
                We typically respond within 24 hours during business days.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">Help Center</h2>
              </div>
              <p className="text-gray-600 mb-3">
                Find answers to common questions in our help center.
              </p>
              <a href="/help" className="text-gray-900 font-medium hover:text-gray-700">
                Visit Help Center →
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How can we help?</h2>
            <p className="text-gray-600 mb-6">
              When contacting support, please include:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Your account email address</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>A clear description of your issue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Any error messages you've encountered</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>Screenshots if applicable</span>
              </li>
            </ul>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                For billing inquiries, please reference your transaction ID from your payment confirmation email.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-sm text-gray-600">
            © 2024 Resumind. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
