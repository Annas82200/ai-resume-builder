// scripts/generate-ai-examples.js
const fs = require('fs').promises;
const path = require('path');

// You can use OpenAI, Claude, or any AI API
// This example uses a simple template approach that can be enhanced with AI

// Prompts for different industries
const industryPrompts = {
  healthcare: {
    roles: ['Registered Nurse', 'Physical Therapist', 'Pharmacist', 'Radiologist', 'Dental Hygienist'],
    skills: ['Patient Care', 'Medical Records', 'HIPAA Compliance', 'Clinical Skills', 'Emergency Response']
  },
  technology: {
    roles: ['Software Engineer', 'Data Scientist', 'DevOps Engineer', 'UX Designer', 'Product Manager'],
    skills: ['Programming', 'Cloud Computing', 'Machine Learning', 'Agile', 'System Design']
  },
  finance: {
    roles: ['Financial Analyst', 'Accountant', 'Investment Banker', 'Risk Manager', 'Auditor'],
    skills: ['Financial Modeling', 'Excel', 'Risk Analysis', 'Compliance', 'Portfolio Management']
  },
  sales: {
    roles: ['Sales Manager', 'Account Executive', 'Business Development', 'Sales Engineer', 'Customer Success'],
    skills: ['CRM', 'Negotiation', 'Pipeline Management', 'Lead Generation', 'Relationship Building']
  },
  marketing: {
    roles: ['Marketing Manager', 'Content Strategist', 'SEO Specialist', 'Brand Manager', 'Social Media Manager'],
    skills: ['Digital Marketing', 'Analytics', 'Content Creation', 'SEO/SEM', 'Campaign Management']
  }
};

// Function to generate AI-powered resume content
async function generateAIResume(industry, role) {
  // In a real implementation, you would call an AI API here
  // For example with OpenAI:
  /*
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{
      role: "user",
      content: `Generate a professional resume for a ${role} in the ${industry} industry. Include:
      - A realistic name
      - Professional summary (2-3 sentences)
      - 2 job experiences with 3-4 bullet points each
      - Education details
      - 6-8 relevant skills
      Format as JSON with these fields: name, title, summary, experience, education, skills`
    }],
    temperature: 0.8
  });
  return JSON.parse(response.choices[0].message.content);
  */
  
  // For now, using a template approach
  const names = [
    'Sarah Johnson', 'Michael Chen', 'Jennifer Williams', 'David Martinez',
    'Emily Brown', 'Robert Kim', 'Lisa Anderson', 'James Wilson'
  ];
  
  const templates = {
    'Software Engineer': {
      summary: 'Experienced software engineer with expertise in full-stack development and cloud architecture. Proven track record of delivering scalable solutions and leading technical teams.',
      experience: `Senior Software Engineer
Tech Solutions Inc. (2020-Present)
• Led development of microservices architecture serving 5M+ users
• Reduced system latency by 45% through optimization
• Mentored team of 6 junior developers
• Implemented CI/CD pipeline reducing deployment time by 70%

Software Engineer
StartupCo (2018-2020)
• Built RESTful APIs using Node.js and Python
• Developed responsive React applications
• Collaborated with product team on feature development
• Improved test coverage from 40% to 85%`,
      education: 'BS Computer Science\nState University (2018)',
      skills: 'JavaScript • Python • React • Node.js • AWS • Docker • MongoDB • Git'
    },
    'Registered Nurse': {
      summary: 'Compassionate registered nurse with 7+ years of experience in acute care settings. Skilled in patient assessment, medication administration, and emergency response.',
      experience: `Staff Nurse - ICU
Regional Medical Center (2019-Present)
• Provide critical care for 8-10 patients per shift
• Collaborate with interdisciplinary team for patient care plans
• Train new nurses on ICU protocols and procedures
• Maintain 99% medication administration accuracy

Registered Nurse - Med/Surg
Community Hospital (2017-2019)
• Managed care for diverse patient population
• Implemented patient education programs
• Reduced patient falls by 30% through safety initiatives
• Received Employee of the Month award twice`,
      education: 'BSN - Bachelor of Science in Nursing\nNursing College (2017)',
      skills: 'Critical Care • Patient Assessment • IV Therapy • EHR Systems • BLS/ACLS • Team Leadership'
    }
    // Add more templates for other roles
  };
  
  const randomName = names[Math.floor(Math.random() * names.length)];
  const template = templates[role] || templates['Software Engineer'];
  
  return {
    name: randomName,
    title: role,
    summary: template.summary,
    experience: template.experience,
    education: template.education,
    skills: template.skills,
    industry: industry
  };
}

// Function to generate example page
function generateExamplePage(example) {
  const slug = example.title.toLowerCase().replace(/\s+/g, '-');
  
  return `'use client'

import { Download, ChevronLeft, FileText, Award } from 'lucide-react';

export default function ${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  const resumeData = {
    fullName: '${example.name}',
    title: '${example.title}',
    email: '${example.name.toLowerCase().replace(' ', '.')}@email.com',
    phone: '(555) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}',
    location: 'New York, NY',
    summary: '${example.summary}',
    experience: \`${example.experience}\`,
    education: '${example.education}',
    skills: '${example.skills}'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full page implementation */}
      {/* Copy the structure from one of the existing example pages */}
    </div>
  );
}`;
}

// Main function
async function generateAIExamples(industry = 'technology', count = 2) {
  console.log(`🤖 Generating ${count} AI-powered examples for ${industry}...\n`);
  
  const baseDir = path.join(__dirname, '..', 'frontend', 'app', 'examples');
  const industryData = industryPrompts[industry] || industryPrompts.technology;
  const generatedExamples = [];
  
  for (let i = 0; i < count; i++) {
    // Select random role
    const role = industryData.roles[Math.floor(Math.random() * industryData.roles.length)];
    
    console.log(`📝 Generating example ${i + 1}/${count}: ${role}`);
    
    try {
      // Generate resume content with AI
      const resumeContent = await generateAIResume(industry, role);
      const slug = role.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();
      
      // Create example object
      const example = {
        id: slug,
        name: resumeContent.name,
        title: resumeContent.title,
        industry: industry.charAt(0).toUpperCase() + industry.slice(1),
        template: ['modern', 'professional', 'creative', 'executive'][Math.floor(Math.random() * 4)],
        description: resumeContent.summary.substring(0, 60) + '...',
        highlights: [
          `${Math.floor(Math.random() * 15) + 5}+ years experience`,
          'Industry certified',
          'Proven track record'
        ],
        gradient: `from-${['blue', 'green', 'purple', 'red', 'amber'][Math.floor(Math.random() * 5)]}-600 to-${['indigo', 'teal', 'pink', 'orange', 'yellow'][Math.floor(Math.random() * 5)]}-600`,
        rating: (4.5 + Math.random() * 0.5).toFixed(1),
        downloads: Math.floor(Math.random() * 10000) + 5000
      };
      
      // Create directory and page
      const exampleDir = path.join(baseDir, slug);
      await fs.mkdir(exampleDir, { recursive: true });
      
      const pageContent = generateExamplePage(resumeContent);
      await fs.writeFile(path.join(exampleDir, 'page.jsx'), pageContent);
      
      generatedExamples.push(example);
      console.log(`  ✅ Created: ${slug}`);
      
    } catch (error) {
      console.error(`  ❌ Error generating example:`, error.message);
    }
  }
  
  console.log('\n✨ AI generation complete!');
  console.log('\n📋 Generated examples to add to page.jsx:');
  
  generatedExamples.forEach(ex => {
    console.log(`
    {
      id: '${ex.id}',
      name: '${ex.name}',
      title: '${ex.title}',
      industry: '${ex.industry}',
      template: '${ex.template}',
      description: '${ex.description}',
      highlights: ${JSON.stringify(ex.highlights)},
      gradient: '${ex.gradient}',
      icon: ${industry === 'healthcare' ? 'GraduationCap' : industry === 'sales' ? 'Briefcase' : industry === 'engineering' ? 'Code' : 'Building2'},
      rating: ${ex.rating},
      downloads: ${ex.downloads}
    },`);
  });
}

// Parse arguments
const args = process.argv.slice(2);
const industryArg = args.find(arg => arg.startsWith('--industry='));
const countArg = args.find(arg => arg.startsWith('--count='));

const industry = industryArg ? industryArg.split('=')[1] : 'technology';
const count = countArg ? parseInt(countArg.split('=')[1]) : 2;

// Run the generator
generateAIExamples(industry, count).catch(console.error);
