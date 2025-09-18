// scripts/generate-examples.js
const fs = require('fs').promises;
const path = require('path');

// Template data for different industries
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
      id: 'physical-therapist',
      name: 'Michael Chen',
      title: 'Physical Therapist',
      industry: 'Healthcare',
      template: 'modern',
      description: 'Sports rehabilitation specialist',
      highlights: ['DPT certified', 'Sports injury expert', '95% recovery rate'],
      gradient: 'from-green-600 to-teal-600',
      icon: 'GraduationCap',
      rating: 4.8,
      downloads: 6200
    }
  ],
  education: [
    {
      id: 'high-school-teacher',
      name: 'Sarah Williams',
      title: 'High School Science Teacher',
      industry: 'Education',
      template: 'professional',
      description: 'Award-winning STEM educator',
      highlights: ['Teacher of the Year', '98% pass rate', 'STEM program creator'],
      gradient: 'from-blue-600 to-indigo-600',
      icon: 'GraduationCap',
      rating: 5.0,
      downloads: 7800
    },
    {
      id: 'college-professor',
      name: 'Dr. James Mitchell',
      title: 'Associate Professor',
      industry: 'Education',
      template: 'executive',
      description: 'Published researcher and educator',
      highlights: ['PhD in Education', '50+ publications', 'Department chair'],
      gradient: 'from-purple-600 to-indigo-600',
      icon: 'GraduationCap',
      rating: 4.9,
      downloads: 5400
    }
  ]
};

// Function to create individual example page
function createExamplePage(example) {
  return `import { FileText, Briefcase, Code, Palette, Award, ChevronRight, Eye, Download, Star, Building2, GraduationCap } from 'lucide-react';

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
            ${example.highlights.map(h => \`<li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-green-600 mt-0.5" />
              <span>\${h}</span>
            </li>\`).join('\\n            ')}
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

// Main function
async function generateExamples() {
  console.log('🚀 Starting example generation...\n');
  
  const baseDir = path.join(__dirname, '..', 'frontend', 'app', 'examples');
  
  // Process each industry
  for (const [industry, examples] of Object.entries(templates)) {
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
      } catch (error) {
        console.error(`  ❌ Error creating ${example.id}:`, error.message);
      }
    }
  }
  
  console.log('\n✨ Done! Now you need to:');
  console.log('1. Review the generated files');
  console.log('2. Add these examples to your main examples page');
  console.log('3. Commit and push to GitHub\n');
}

// Run the generator
generateExamples().catch(console.error);
