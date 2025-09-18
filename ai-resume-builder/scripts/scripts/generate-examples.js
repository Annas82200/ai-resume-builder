// scripts/generate-examples.js
const fs = require('fs').promises;
const path = require('path');

// Expanded template data for more industries
const templates = {
  healthcare: [
    {
      id: 'registered-nurse',
      name: 'Emily Rodriguez',
      title: 'Emergency Room Nurse',
      industry: 'Healthcare',
      template: 'professional',
      description: 'Experienced ER nurse with trauma certification',
      highlights: ['10+ years ER experience', 'Trauma certified', 'Team leader'],
      gradient: 'from-red-600 to-pink-600',
      icon: 'GraduationCap',
      rating: 4.9,
      downloads: 8500
    },
    {
      id: 'medical-doctor',
      name: 'Dr. Robert Kim',
      title: 'Internal Medicine Physician',
      industry: 'Healthcare',
      template: 'executive',
      description: 'Board-certified internist with hospital leadership experience',
      highlights: ['Chief of Medicine', 'Published researcher', '15 years experience'],
      gradient: 'from-red-600 to-rose-600',
      icon: 'GraduationCap',
      rating: 5.0,
      downloads: 12000
    }
  ],
  
  sales: [
    {
      id: 'sales-manager',
      name: 'Jennifer Thompson',
      title: 'Regional Sales Manager',
      industry: 'Sales',
      template: 'modern',
      description: 'B2B sales leader exceeding targets for 10+ years',
      highlights: ['$15M annual revenue', '150% quota achievement', 'Team of 12 reps'],
      gradient: 'from-orange-600 to-red-600',
      icon: 'Briefcase',
      rating: 4.8,
      downloads: 9200
    },
    {
      id: 'account-executive',
      name: 'Marcus Davis',
      title: 'Enterprise Account Executive',
      industry: 'Sales',
      template: 'professional',
      description: 'SaaS sales expert closing Fortune 500 deals',
      highlights: ['$5M+ deals closed', 'President\'s Club winner', '200% of quota'],
      gradient: 'from-yellow-600 to-orange-600',
      icon: 'Briefcase',
      rating: 4.9,
      downloads: 7800
    }
  ],
  
  engineering: [
    {
      id: 'software-engineer',
      name: 'David Park',
      title: 'Senior Software Engineer',
      industry: 'Engineering',
      template: 'modern',
      description: 'Full-stack developer with cloud architecture expertise',
      highlights: ['Led 5 major projects', 'AWS certified', 'Reduced costs 40%'],
      gradient: 'from-blue-600 to-cyan-600',
      icon: 'Code',
      rating: 4.9,
      downloads: 11500
    },
    {
      id: 'mechanical-engineer',
      name: 'Lisa Chen',
      title: 'Mechanical Engineer',
      industry: 'Engineering',
      template: 'professional',
      description: 'Product design engineer with manufacturing experience',
      highlights: ['15 patents filed', 'Lean Six Sigma', 'CAD expert'],
      gradient: 'from-gray-600 to-gray-800',
      icon: 'Wrench',
      rating: 4.7,
      downloads: 6500
    }
  ],
  
  marketing: [
    {
      id: 'marketing-director',
      name: 'Amanda Foster',
      title: 'Marketing Director',
      industry: 'Marketing',
      template: 'creative',
      description: 'Digital marketing leader driving brand growth',
      highlights: ['300% ROI campaigns', 'Team of 15', '$5M budget managed'],
      gradient: 'from-purple-600 to-pink-600',
      icon: 'Palette',
      rating: 4.9,
      downloads: 8900
    },
    {
      id: 'content-strategist',
      name: 'Ryan Mitchell',
      title: 'Senior Content Strategist',
      industry: 'Marketing',
      template: 'modern',
      description: 'Content expert increasing organic traffic',
      highlights: ['500% traffic growth', 'SEO specialist', 'Brand voice expert'],
      gradient: 'from-indigo-600 to-purple-600',
      icon: 'Palette',
      rating: 4.8,
      downloads: 5600
    }
  ],
  
  finance: [
    {
      id: 'financial-analyst',
      name: 'Christopher Wong',
      title: 'Senior Financial Analyst',
      industry: 'Finance',
      template: 'professional',
      description: 'CFA with expertise in financial modeling',
      highlights: ['CFA charterholder', '$100M portfolio', 'M&A experience'],
      gradient: 'from-green-600 to-emerald-600',
      icon: 'Building2',
      rating: 4.9,
      downloads: 10200
    },
    {
      id: 'accountant',
      name: 'Maria Gonzalez',
      title: 'Senior Accountant',
      industry: 'Finance',
      template: 'professional',
      description: 'CPA with Big Four experience',
      highlights: ['CPA certified', 'Tax specialist', 'Process optimization'],
      gradient: 'from-teal-600 to-green-600',
      icon: 'Building2',
      rating: 4.7,
      downloads: 7300
    }
  ],
  
  hospitality: [
    {
      id: 'hotel-manager',
      name: 'James Wilson',
      title: 'Hotel General Manager',
      industry: 'Hospitality',
      template: 'executive',
      description: 'Luxury hotel manager with international experience',
      highlights: ['5-star properties', '98% satisfaction', 'Revenue growth 25%'],
      gradient: 'from-amber-600 to-orange-600',
      icon: 'Building2',
      rating: 4.8,
      downloads: 4500
    },
    {
      id: 'chef',
      name: 'Sophie Laurent',
      title: 'Executive Chef',
      industry: 'Hospitality',
      template: 'creative',
      description: 'Award-winning chef with Michelin experience',
      highlights: ['Michelin trained', 'Menu innovation', 'Team of 20+'],
      gradient: 'from-red-600 to-orange-600',
      icon: 'Award',
      rating: 4.9,
      downloads: 5800
    }
  ],
  
  retail: [
    {
      id: 'store-manager',
      name: 'Michael Brown',
      title: 'Retail Store Manager',
      industry: 'Retail',
      template: 'professional',
      description: 'Multi-unit retail manager driving sales growth',
      highlights: ['$10M annual sales', 'Team of 50+', 'Top 5% nationally'],
      gradient: 'from-purple-600 to-indigo-600',
      icon: 'Briefcase',
      rating: 4.7,
      downloads: 6200
    }
  ],
  
  legal: [
    {
      id: 'corporate-lawyer',
      name: 'William Anderson',
      title: 'Corporate Attorney',
      industry: 'Legal',
      template: 'executive',
      description: 'M&A attorney with Fortune 500 experience',
      highlights: ['$2B+ deals', 'Bar admitted', 'Published author'],
      gradient: 'from-gray-700 to-gray-900',
      icon: 'Building2',
      rating: 4.9,
      downloads: 8700
    }
  ]
};

// Function to create individual example page (same as before)
function createExamplePage(example) {
  return `import { FileText, Briefcase, Code, Palette, Award, ChevronRight, Eye, Download, Star, Building2, GraduationCap, Wrench } from 'lucide-react';

export const metadata = {
  title: '${example.name} - ${example.title} Resume Example | Resumind',
  description: '${example.description}. Download this professional resume example.',
}

export default function ${example.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  const example = ${JSON.stringify(example, null, 2)};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Resumind Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Resumind</h1>
                <p className="text-sm text-gray-600">AI that understands your mind</p>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/examples" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Back to Examples
              </a>
              <a 
                href="/"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
              >
                Create Resume
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${example.name} - ${example.title}
          </h1>
          <p className="text-xl text-gray-600">
            ${example.description}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <p className="text-gray-700 mb-4">
            This resume example demonstrates best practices for ${example.industry.toLowerCase()} professionals.
          </p>
          <ul className="space-y-2 mb-6">
            ${example.highlights.map(h => `<li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-green-600 mt-0.5" />
              <span>${h}</span>
            </li>`).join('\\n            ')}
          </ul>
        </div>

        <div className="text-center">
          <a 
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition"
          >
            <FileText className="w-5 h-5" />
            Use This Template
          </a>
        </div>
      </div>
    </div>
  );
}`;
}

// Function to generate all examples and update main page
async function generateExamples(industryFilter = null) {
  console.log('🚀 Starting example generation...\n');
  
  const baseDir = path.join(__dirname, '..', 'frontend', 'app', 'examples');
  const allNewExamples = [];
  
  // Filter industries if specified
  const industriesToProcess = industryFilter 
    ? { [industryFilter]: templates[industryFilter] || [] }
    : templates;
  
  // Process each industry
  for (const [industry, examples] of Object.entries(industriesToProcess)) {
    console.log(`📁 Creating ${industry} examples...`);
    
    for (const example of examples) {
      try {
        // Create directory
        const exampleDir = path.join(baseDir, example.id);
        await fs.mkdir(exampleDir, { recursive: true });
        
        // Create page.jsx
        const pageContent = createExamplePage(example);
        await fs.writeFile(path.join(exampleDir, 'page.jsx'), pageContent);
        
        console.log(`  ✅ Created: ${example.id}`);
        allNewExamples.push(example);
      } catch (error) {
        console.error(`  ❌ Error creating ${example.id}:`, error.message);
      }
    }
  }
  
  // Update the main examples page
  console.log('\n📝 Updating main examples page...');
  try {
    const mainPagePath = path.join(baseDir, 'page.jsx');
    let content = await fs.readFile(mainPagePath, 'utf-8');
    
    // Generate the new examples code to add
    const newExamplesCode = allNewExamples.map(ex => `    {
      id: '${ex.id}',
      name: '${ex.name}',
      title: '${ex.title}',
      industry: '${ex.industry}',
      template: '${ex.template}',
      description: '${ex.description}',
      highlights: ${JSON.stringify(ex.highlights)},
      gradient: '${ex.gradient}',
      icon: ${ex.icon},
      rating: ${ex.rating},
      downloads: ${ex.downloads}
    }`).join(',\n');
    
    console.log('\n💡 Add these examples to your main examples array in page.jsx:');
    console.log(newExamplesCode);
    
  } catch (error) {
    console.error('Error updating main page:', error);
  }
  
  console.log('\n✨ Done! Now you need to:');
  console.log('1. Add the generated examples to your examples array in page.jsx');
  console.log('2. Commit and push all changes to GitHub');
}

// Check if specific industry was requested
const args = process.argv.slice(2);
const industryArg = args.find(arg => arg.startsWith('--industry='));
const industry = industryArg ? industryArg.split('=')[1] : null;

// Run the generator
generateExamples(industry).catch(console.error);
