// scripts/generate-ai-examples.js
const fs = require('fs').promises;
const path = require('path');
const OpenAI = require('openai');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'your-key-here' // Add your key for local testing
});

async function generateAIResume(industry, role) {
  try {
    const prompt = `Generate a realistic professional resume for a ${role} in the ${industry} industry.

Return ONLY valid JSON with exactly these fields:
{
  "name": "Full realistic name",
  "title": "${role}",
  "summary": "2-3 sentence professional summary highlighting key achievements",
  "experience": "Job Title\\nCompany Name (Year-Year)\\n• Achievement with specific metrics\\n• Another achievement\\n• Third achievement\\n\\nPrevious Job Title\\nCompany (Year-Year)\\n• Achievement\\n• Achievement\\n• Achievement",
  "education": "Degree Type in Field\\nUniversity Name (Year)\\n\\nCertification (if relevant)\\nIssuing Organization",
  "skills": "Skill 1 • Skill 2 • Skill 3 • Skill 4 • Skill 5 • Skill 6"
}

Make it realistic with specific achievements, metrics, and industry-appropriate details.`;

    console.log(`  🤖 Calling OpenAI for ${role}...`);
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use gpt-4 if you have access
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
      max_tokens: 800
    });
    
    const content = response.choices[0].message.content;
    // Clean up the response (remove any markdown formatting)
    const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    return JSON.parse(jsonStr);
    
  } catch (error) {
    console.error('  ❌ OpenAI API error:', error.message);
    
    // Fallback to template if API fails
    const fallbackTemplates = {
      'Software Engineer': {
        name: 'Alex Thompson',
        title: 'Software Engineer',
        summary: 'Experienced full-stack developer with 5+ years building scalable web applications. Expert in React, Node.js, and cloud technologies.',
        experience: `Senior Software Engineer\nTech Solutions Inc. (2020-Present)\n• Built microservices handling 1M+ daily requests\n• Led team of 4 developers on mobile app project\n• Reduced API response time by 60%\n\nSoftware Engineer\nStartupCo (2018-2020)\n• Developed React components used by 50K+ users\n• Implemented CI/CD pipeline with Jenkins\n• Mentored 2 junior developers`,
        education: 'BS Computer Science\nState University (2018)',
        skills: 'JavaScript • React • Node.js • AWS • MongoDB • Git • Docker • TypeScript'
      }
    };
    
    return fallbackTemplates[role] || fallbackTemplates['Software Engineer'];
  }
}

function generatePageFile(slug, resumeData, industry) {
  return `'use client'

import { Download, ChevronLeft, FileText, Award, Target, Share2 } from 'lucide-react';

export default function ${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  const resumeData = {
    fullName: '${resumeData.name}',
    title: '${resumeData.title}',
    email: '${resumeData.name.toLowerCase().replace(' ', '.')}@email.com',
    phone: '(555) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}',
    location: 'New York, NY',
    summary: '${resumeData.summary.replace(/'/g, "\\'")}',
    experience: \`${resumeData.experience}\`,
    education: '${resumeData.education.replace(/\n/g, '\\n')}',
    skills: '${resumeData.skills}',
    industry: '${industry}'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Resumind Logo" className="w-16 h-16 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Resumind</h1>
                <p className="text-sm text-gray-600">AI that understands your mind</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/examples" className="text-gray-700 hover:text-blue-600 font-medium transition flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Examples
              </a>
              <a href="/" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                Create My Resume
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{resumeData.fullName}</h1>
              <p className="text-lg text-gray-700 mb-4">{resumeData.title}</p>
              <p className="text-gray-600 mb-6">{resumeData.summary}</p>
              
              <div className="mt-6 space-y-3">
                <a href="/" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  Use This Template
                </a>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Example PDF
                </button>
              </div>
            </div>
          </div>
          
          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              {/* Resume Header */}
              <div className="text-center border-b-2 border-gray-800 pb-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{resumeData.fullName}</h1>
                <p className="text-xl text-gray-700">{resumeData.title}</p>
                <div className="flex justify-center gap-4 mt-3 text-gray-600">
                  <span>{resumeData.email}</span>
                  <span>•</span>
                  <span>{resumeData.phone}</span>
                  <span>•</span>
                  <span>{resumeData.location}</span>
                </div>
              </div>
              
              {/* Professional Summary */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              </section>
              
              {/* Experience */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Professional Experience
                </h2>
                <div className="space-y-1 text-gray-700">
                  {resumeData.experience.split('\\n').map((line, i) => (
                    line.trim() && (
                      <p key={i} className={line.startsWith('•') ? 'ml-4' : 'font-semibold mt-4'}>
                        {line}
                      </p>
                    )
                  ))}
                </div>
              </section>
              
              {/* Education */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Education
                </h2>
                <div className="text-gray-700">
                  {resumeData.education.split('\\n').map((line, i) => (
                    line && <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                  ))}
                </div>
              </section>
              
              {/* Skills */}
              <section>
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b border-gray-300 pb-2">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.split('•').map((skill, i) => (
                    skill.trim() && (
                      <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm">
                        {skill.trim()}
                      </span>
                    )
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

// Industry configurations
const industries = {
  technology: {
    roles: ['Software Engineer', 'Data Scientist', 'DevOps Engineer', 'UX Designer', 'Product Manager'],
    gradient: 'from-blue-600 to-purple-600',
    icon: 'Code'
  },
  healthcare: {
    roles: ['Registered Nurse', 'Physical Therapist', 'Medical Doctor', 'Pharmacist', 'Healthcare Administrator'],
    gradient: 'from-red-600 to-pink-600',
    icon: 'GraduationCap'
  },
  finance: {
    roles: ['Financial Analyst', 'Accountant', 'Investment Banker', 'Financial Advisor', 'Risk Manager'],
    gradient: 'from-green-600 to-emerald-600',
    icon: 'Building2'
  },
  sales: {
    roles: ['Sales Manager', 'Account Executive', 'Business Development Rep', 'Sales Director', 'Customer Success Manager'],
    gradient: 'from-orange-600 to-red-600',
    icon: 'Briefcase'
  },
  marketing: {
    roles: ['Marketing Manager', 'Content Strategist', 'SEO Specialist', 'Brand Manager', 'Digital Marketing Specialist'],
    gradient: 'from-purple-600 to-pink-600',
    icon: 'Palette'
  }
};

// Main function
async function main() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  const industryArg = args.find(arg => arg.startsWith('--industry='));
  const countArg = args.find(arg => arg.startsWith('--count='));
  
  const industry = industryArg ? industryArg.split('=')[1] : 'technology';
  const count = countArg ? parseInt(countArg.split('=')[1]) : 2;
  
  if (!industries[industry]) {
    console.error(`❌ Unknown industry: ${industry}`);
    console.log('Available industries:', Object.keys(industries).join(', '));
    return;
  }
  
  console.log(`🚀 Generating ${count} AI-powered ${industry} resume examples...\n`);
  
  const baseDir = path.join(__dirname, '..', 'frontend', 'app', 'examples');
  const industryConfig = industries[industry];
  const generatedExamples = [];
  
  for (let i = 0; i < count; i++) {
    const role = industryConfig.roles[i % industryConfig.roles.length];
    console.log(`📝 Generating example ${i + 1}/${count}: ${role}`);
    
    try {
      // Generate with AI
      const resumeData = await generateAIResume(industry, role);
      const slug = `${role.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
      
      // Create directory
      const exampleDir = path.join(baseDir, slug);
      await fs.mkdir(exampleDir, { recursive: true });
      
      // Create page file
      const pageContent = generatePageFile(slug, resumeData, industry);
      await fs.writeFile(path.join(exampleDir, 'page.jsx'), pageContent);
      
      // Add to examples array
      generatedExamples.push({
        id: slug,
        name: resumeData.name,
        title: resumeData.title,
        industry: industry.charAt(0).toUpperCase() + industry.slice(1),
        template: ['modern', 'professional', 'creative', 'executive'][Math.floor(Math.random() * 4)],
        description: resumeData.summary.substring(0, 80) + '...',
        highlights: [
          `${5 + Math.floor(Math.random() * 10)}+ years experience`,
          'Industry expert',
          'Proven results'
        ],
        gradient: industryConfig.gradient,
        icon: industryConfig.icon,
        rating: (4.7 + Math.random() * 0.3).toFixed(1),
        downloads: Math.floor(5000 + Math.random() * 10000)
      });
      
      console.log(`  ✅ Created: ${slug}`);
      
    } catch (error) {
      console.error(`  ❌ Error:`, error.message);
    }
  }
  
  console.log('\n✨ Generation complete!');
  console.log('\n📋 Add these to your examples array in page.jsx:\n');
  
  generatedExamples.forEach(ex => {
    console.log(`{
  id: '${ex.id}',
  name: '${ex.name}',
  title: '${ex.title}',
  industry: '${ex.industry}',
  template: '${ex.template}',
  description: '${ex.description.replace(/'/g, "\\'")}',
  highlights: ${JSON.stringify(ex.highlights)},
  gradient: '${ex.gradient}',
  icon: ${ex.icon},
  rating: ${ex.rating},
  downloads: ${ex.downloads}
},`);
  });
}

// Run the script
main().catch(console.error);
