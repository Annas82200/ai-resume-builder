import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Target, FileText, TrendingUp } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Resume & Career Advice
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, industry insights, and proven strategies to help you create resumes that get results and advance your career.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map(post => (
          <div key={post.slug} className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Featured
                </span>
                <span className="text-gray-500 text-sm">{post.category}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition flex items-center gap-2"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map(post => (
            <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-600 text-xs font-semibold">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
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
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create Your Perfect Resume?</h2>
          <p className="text-lg opacity-90 mb-6">
            Put these tips into action with our AI-powered resume builder
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            <FileText className="w-5 h-5" />
            Start Building Your Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
