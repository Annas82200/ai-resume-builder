import Link from 'next/link';

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Resumind, you accept and agree to be bound by the terms and provision 
              of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Resumind is an AI-powered resume building platform that helps users create professional 
              resumes, cover letters, and optimize their LinkedIn profiles. Features include:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>AI-enhanced resume generation using multiple AI models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>ATS optimization and scoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Professional templates and formatting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Export capabilities in multiple formats</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <p className="mb-4">
              To access certain features of our service, you must create an account. You agree to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Provide accurate and complete information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Maintain the security of your password</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Notify us of any unauthorized access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Be responsible for all activities under your account</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="mb-4">
              Paid subscriptions are billed in advance on a monthly or yearly basis. 
              All payments are processed securely through Stripe. You agree to pay all 
              applicable fees and authorize us to charge your payment method.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cancellation and Refunds</h2>
            <p className="mb-4">
              You may cancel your subscription at any time through your account settings. 
              Cancellation takes effect at the end of the current billing period. We do 
              not provide refunds for partial months or years.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              You retain all rights to your resume content. By using our service, you grant 
              us a license to process and display your content for the purpose of providing 
              our services. All Resumind trademarks, logos, and service marks remain the 
              exclusive property of Resumind.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              Resumind shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. We will notify users 
              of any material changes via email or through the service. Continued use of 
              Resumind after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p>
              Questions about the Terms of Service should be sent to us at:
            </p>
            <p className="mt-2">
              <a href="mailto:terms@resumind.co" className="text-gray-900 font-medium hover:text-gray-700">
                terms@resumind.co
              </a>
            </p>
          </section>
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
