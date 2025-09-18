// scripts/generate-more-industries.js
const fs = require('fs').promises;
const path = require('path');

// New industry templates
const newIndustryTemplates = {
  sales: [
    {
      id: 'sales-director',
      name: 'James Thompson',
      title: 'Sales Director',
      industry: 'Sales',
      template: 'executive',
      description: 'B2B sales leader with proven track record',
      highlights: ['$50M+ in sales', '150% quota achievement', 'Team of 25 reps'],
      gradient: 'from-orange-600 to-red-600',
      rating: 4.9,
      downloads: 9200
    },
    {
      id: 'account-executive',
      name: 'Lisa Park',
      title: 'Senior Account Executive',
      industry: 'Sales',
      template: 'modern',
      description: 'SaaS sales expert specializing in enterprise accounts',
      highlights: ['$5M annual revenue', 'President\'s Club winner', 'CRM expert'],
      gradient: 'from-yellow-600 to-orange-600',
      rating: 4.8,
      downloads: 7600
    }
  ],
  engineering: [
    {
      id: 'software-engineer-backend',
      name: 'David Kumar',
      title: 'Senior Backend Engineer',
      industry: 'Engineering',
      template: 'modern',
      description: 'Distributed systems expert with cloud architecture focus',
      highlights: ['AWS certified', 'Microservices expert', 'Python & Go specialist'],
      gradient: 'from-purple-600 to-blue-600',
      rating: 5.0,
      downloads: 11000
    },
    {
      id: 'frontend-developer',
      name: 'Emma Wilson',
      title: 'Frontend Developer',
      industry: 'Engineering',
      template: 'creative',
      description: 'React specialist with UI/UX design experience',
      highlights: ['React expert', 'Accessibility advocate', 'Performance optimization'],
      gradient: 'from-pink-600 to-purple-600',
      rating: 4.9,
      downloads: 8900
    }
  ],
  marketing: [
    {
      id: 'digital-marketing-manager',
      name: 'Ashley Chen',
      title: 'Digital Marketing Manager',
      industry: 'Marketing',
      template: 'creative',
      description: 'Growth hacker with expertise in paid acquisition',
      highlights: ['300% ROI improvement', 'Google Ads certified', '$2M budget managed'],
      gradient: 'from-blue-600 to-green-600',
      rating: 4.8,
      downloads: 7300
    },
    {
      id: 'content-strategist',
      name: 'Robert Martinez',
      title: 'Content Strategist',
      industry: 'Marketing',
      template: 'professional',
      description: 'SEO expert and brand storyteller',
      highlights: ['500% organic growth', 'Published author', 'Team of 10 writers'],
      gradient: 'from-green-600 to-blue-600',
      rating: 4.9,
      downloads: 6100
    }
  ]
};

// Function to add to main examples page
async function updateMainExamplesPage() {
  const examplesPagePath = path.join(__dirname, '..', 'frontend', 'app', 'examples', 'page.jsx');
  let content = await fs.readFile(examplesPagePath, 'utf-8');
  
  // Find where to insert new examples (before the last closing bracket of the array)
  const insertPoint = content.lastIndexOf('}') - 1;
  
  // Create the new examples entries
  const newExamplesCode = [];
  
  for (const [industry, examples] of Object.entries(newIndustryTemplates)) {
    for (const example of examples) {
      newExamplesCode.push(`    {
      id: '${example.id}',
      name: '${example.name}',
      title: '${example.title}',
      industry: '${example.industry}',
      template: '${example.template}',
      description: '${example.description}',
      highlights: ${JSON.stringify(example.highlights)},
      gradient: '${example.gradient}',
      icon: ${industry === 'sales' ? 'Briefcase' : industry === 'engineering' ? 'Code' : 'Palette'},
      rating: ${example.rating},
      downloads: ${example.downloads}
    }`);
    }
  }
  
  // Insert the new examples
  const newContent = content.slice(0, insertPoint) + '},\n' + newExamplesCode.join(',\n') + '\n  ' + content.slice(insertPoint);
  
  await fs.writeFile(examplesPagePath, newContent);
  console.log('✅ Updated main examples page with new industries');
}

// Run the update
updateMainExamplesPage().catch(console.error);
