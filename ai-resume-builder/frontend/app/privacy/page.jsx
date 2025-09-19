import Link from 'next/link';

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="mb-4">
              At Resumind, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, such as:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Account information (name, email, password)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Resume data (work history, education, skills)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Payment information (processed securely through Stripe)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Usage data and preferences</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Provide, maintain, and improve our services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Process transactions and send related information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Send technical notices, updates, and support messages</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Respond to your comments and questions</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Access your personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Correct inaccurate data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Request deletion of your data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>Export your data in a portable format</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <a href="mailto:privacy@resumind.co" className="text-gray-900 font-medium hover:text-gray-700">
                privacy@resumind.co
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
