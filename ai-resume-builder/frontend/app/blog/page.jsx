import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Target, FileText, TrendingUp, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Resume & Career Blog | Resumind',
  description: 'Expert resume tips, ATS guides, and career advice to help you land your dream job.',
}

const blogPosts = [
  {
    slug: 'ats-resume-guide-2024',
    title: 'Complete ATS Resume Guide 2024: Beat Applicant Tracking Systems',
    excerpt: 'Learn how to optimize your resume for ATS systems with proven strategies that get you past the bots and in front of hiring managers.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'ATS Optimization',
    featured: true
  },
  {
    slug: 'ai-resume-keywords-by-industry',
    title: 'AI Resume Keywords by Industry: 500+ Words That Get Interviews',
    excerpt: 'Industry-specific keywords that ATS systems look for. Copy these proven words to dramatically improve your resume\'s success rate.',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Keywords'
  },
  {
    slug: 'resume-templates-that-work',
    title: 'Resume Templates That Actually Get Jobs in 2024',
    excerpt: 'Analysis of 1000+ successful resumes reveals the templates and formats that hiring managers prefer most.',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Templates'
  },
  {
    slug: 'how-to-write-resume-summary',
    title: 'How to Write a Resume Summary That Gets You Hired',
    excerpt: 'The exact formula top recruiters use to write compelling professional summaries that capture attention in 6 seconds.',
    date: '2024-01-08',
    readTime: '5 min read',
    category: 'Writing Tips'
  }
];

export default function BlogPage() {
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
              <Link href="/blog" className="text-gray-900 font-medium">
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

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume & Career Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based guides and expert insights to help you create resumes that get results.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <div key={post.slug} className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="mb-4">
              <span className="text-gray-600 text-sm font-medium">{post.category}</span>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-600 text-sm">Featured Article</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
            <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-gray-900 font-medium hover:text-gray-700 transition-colors flex items-center gap-2"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map(post => (
            <article key={post.slug} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
              <div className="mb-4">
                <span className="text-gray-600 text-sm font-medium">{post.category}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 hover:text-gray-700 font-medium text-sm flex items-center gap-1 transition-colors"
                >
                  Read More
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-12 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Apply These Strategies?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Put these insights into practice with our AI-powered resume builder
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Build Your Resume
          </Link>
        </div>
      </div>

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
