// scripts/fix-all-examples.js
const fs = require('fs').promises;
const path = require('path');

// Complete page templates for each example
const examplePages = {
  'registered-nurse': {
    name: 'Emily Rodriguez',
    title: 'Emergency Room Nurse',
    email: 'emily.rodriguez@email.com',
    phone: '(555) 123-4567',
    location: 'Houston, TX',
    summary: 'Dedicated Emergency Room Nurse with over 10 years of experience in high-pressure medical environments. Proven expertise in trauma care, patient advocacy, and mentoring junior staff. Known for maintaining composure during critical situations while delivering compassionate patient care.',
    experience: [
      {
        title: 'Lead Emergency Room Nurse',
        company: 'City General Hospital',
        period: '2018 - Present',
        duties: [
          'Manage patient care for 20+ critical cases per shift',
          'Lead trauma response team during Code Blue situations',
          'Mentor and train 15+ new graduate nurses',
          'Reduced patient wait times by 25% through workflow optimization'
        ]
      },
      {
        title: 'Staff Nurse - Emergency Department',
        company: 'Regional Medical Center',
        period: '2014 - 2018',
        duties: [
          'Provided direct patient care in Level II trauma center',
          'Collaborated with interdisciplinary teams for patient treatment',
          'Maintained 98% patient satisfaction scores'
        ]
      }
    ],
    education: [
      {
        degree: 'BSN - Bachelor of Science in Nursing',
        school: 'University of Texas',
        year: '2014'
      }
    ],
    skills: ['ACLS Certified', 'BLS Instructor', 'Trauma Nursing', 'IV Therapy', 'Patient Assessment', 'Electronic Health Records', 'Crisis Management']
  },
  'physical-therapist': {
    name: 'Michael Chen',
    title: 'Physical Therapist',
    email: 'michael.chen@email.com',
    phone: '(555) 234-5678',
    location: 'Los Angeles, CA',
    summary: 'Licensed Physical Therapist specializing in orthopedic and sports rehabilitation. Expert in developing personalized treatment plans that have helped 500+ patients return to active lifestyles. Published researcher in biomechanics and injury prevention.',
    experience: [
      {
        title: 'Senior Physical Therapist',
        company: 'Elite Sports Medicine Clinic',
        period: '2019 - Present',
        duties: [
          'Design rehabilitation programs for professional athletes',
          'Achieve 95% patient recovery rate within projected timelines',
          'Lead research on ACL injury prevention techniques',
          'Supervise team of 8 junior therapists'
        ]
      },
      {
        title: 'Physical Therapist',
        company: 'Orthopedic Associates',
        period: '2016 - 2019',
        duties: [
          'Treated 30+ patients daily with musculoskeletal conditions',
          'Developed post-surgical rehabilitation protocols',
          'Implemented new therapy techniques reducing recovery time by 20%'
        ]
      }
    ],
    education: [
      {
        degree: 'Doctor of Physical Therapy (DPT)',
        school: 'UCLA Medical School',
        year: '2016'
      },
      {
        degree: 'BS Kinesiology',
        school: 'UC Berkeley',
        year: '2013'
      }
    ],
    skills: ['Manual Therapy', 'Dry Needling', 'Sports Rehabilitation', 'Gait Analysis', 'Therapeutic Exercise', 'Patient Education', 'EMR Systems']
  },
  'high-school-teacher': {
    name: 'Sarah Williams',
    title: 'High School Science Teacher',
    email: 'sarah.williams@email.com',
    phone: '(555) 345-6789',
    location: 'Denver, CO',
    summary: 'Passionate High School Science Teacher with 8 years of experience creating engaging STEM curriculum. Recognized for innovative teaching methods that increased AP Chemistry pass rates by 40%. Committed to inspiring the next generation of scientists.',
    experience: [
      {
        title: 'Lead Science Teacher',
        company: 'Lincoln High School',
        period: '2018 - Present',
        duties: [
          'Teach AP Chemistry and Honors Biology to 150+ students',
          'Developed hands-on STEM lab program adopted district-wide',
          'Achieved 98% AP exam pass rate (district average: 72%)',
          'Coach Science Olympiad team to state championships'
        ]
      },
      {
        title: 'Science Teacher',
        company: 'Jefferson Middle School',
        period: '2016 - 2018',
        duties: [
          'Introduced project-based learning increasing engagement by 60%',
          'Created after-school tutoring program for at-risk students',
          'Collaborated with tech companies for real-world STEM experiences'
        ]
      }
    ],
    education: [
      {
        degree: 'M.Ed. Secondary Education',
        school: 'Columbia Teachers College',
        year: '2016'
      },
      {
        degree: 'BS Chemistry, Minor in Biology',
        school: 'University of Colorado',
        year: '2014'
      }
    ],
    skills: ['Curriculum Development', 'Classroom Management', 'AP Chemistry', 'Laboratory Safety', 'Educational Technology', 'Student Assessment', 'Parent Communication']
  },
  'college-professor': {
    name: 'Dr. James Mitchell',
    title: 'Associate Professor',
    email: 'james.mitchell@email.com',
    phone: '(555) 456-7890',
    location: 'Boston, MA',
    summary: 'Accomplished Associate Professor with 15 years of experience in higher education. Published researcher with 50+ peer-reviewed articles and 3 academic books. Passionate about mentoring graduate students and advancing educational pedagogy.',
    experience: [
      {
        title: 'Associate Professor of Education',
        company: 'Boston University',
        period: '2019 - Present',
        duties: [
          'Teach graduate courses in Educational Leadership and Policy',
          'Published 12 research papers in top-tier journals',
          'Secured $2.5M in research grants',
          'Chair the Department Curriculum Committee'
        ]
      },
      {
        title: 'Assistant Professor',
        company: 'Harvard Graduate School of Education',
        period: '2014 - 2019',
        duties: [
          'Developed innovative online learning programs',
          'Mentored 25+ doctoral students to completion',
          'Received Excellence in Teaching Award three consecutive years'
        ]
      }
    ],
    education: [
      {
        degree: 'Ph.D. in Education',
        school: 'Stanford University',
        year: '2014'
      },
      {
        degree: 'M.A. Educational Psychology',
        school: 'Yale University',
        year: '2010'
      },
      {
        degree: 'BA Psychology',
        school: 'Princeton University',
        year: '2008'
      }
    ],
    skills: ['Research Methodology', 'Grant Writing', 'Academic Publishing', 'Statistical Analysis', 'Curriculum Design', 'Online Learning', 'Public Speaking']
  }
};

// Function to generate the complete page file
function generatePageFile(id, data, metadata) {
  return `'use client'

import { FileText, Briefcase, Code, Palette, Award, ChevronRight, Eye, Download, Star, Building2, GraduationCap } from 'lucide-react';

export default function ${id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  const example = {
    id: '${id}',
    name: '${data.name}',
    title: '${data.title}',
    industry: '${metadata.industry}',
    template: '${metadata.template}',
    description: '${metadata.description}',
    highlights: ${JSON.stringify(metadata.highlights)},
    gradient: '${metadata.gradient}',
    icon: GraduationCap,
    rating: ${metadata.rating},
    downloads: ${metadata.downloads}
  };

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
            {example.name} - {example.title}
          </h1>
          <p className="text-xl text-gray-600">
            {example.description}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Resume Highlights</h2>
          <p className="text-gray-700 mb-4">
            This resume example demonstrates best practices for {example.industry.toLowerCase()} professionals.
          </p>
          <ul className="space-y-2 mb-6">
            {example.highlights.map((h, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-green-600 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          
          {/* Full Resume Preview */}
          <div className="border-t pt-8 mt-8">
            <h3 className="text-xl font-bold mb-6 text-center">Full Resume Preview</h3>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">${data.name}</h1>
                <p className="text-xl text-gray-700 mt-2">${data.title}</p>
                <p className="text-gray-600 mt-2">📧 ${data.email} | 📱 ${data.phone} | 📍 ${data.location}</p>
              </div>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  ${data.summary}
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Professional Experience
                </h2>
                ${data.experience.map((job, index) => `
                <div className="${index > 0 ? 'mt-6' : ''}">
                  <h3 className="font-bold text-lg">${job.title}</h3>
                  <p className="text-gray-600">${job.company} | ${job.period}</p>
                  <ul className="mt-2 space-y-1">
                    ${job.duties.map(duty => `<li className="ml-4">• ${duty}</li>`).join('\\n                    ')}
                  </ul>
                </div>`).join('')}
              </section>
              
              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Education
                </h2>
                ${data.education.map((edu, index) => `
                <div className="${index > 0 ? 'mt-3' : ''}">
                  <h3 className="font-bold">${edu.degree}</h3>
                  <p className="text-gray-600">${edu.school} | ${edu.year}</p>
                </div>`).join('')}
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider mb-3 border-b-2 border-gray-300 pb-2">
                  Skills & Certifications
                </h2>
                <div className="flex flex-wrap gap-2">
                  ${data.skills.map(skill => `<span className="bg-gray-100 px-3 py-1 rounded text-sm">${skill}</span>`).join('\\n                  ')}
                </div>
              </section>
            </div>
          </div>
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

// Metadata for each example
const exampleMetadata = {
  'registered-nurse': {
    industry: 'Healthcare',
    template: 'professional',
    description: 'Experienced ER nurse with trauma certification',
    highlights: ['10+ years ER experience', 'Trauma certified', 'Team leader'],
    gradient: 'from-red-600 to-pink-600',
    rating: 4.9,
    downloads: 8500
  },
  'physical-therapist': {
    industry: 'Healthcare',
    template: 'modern',
    description: 'Sports rehabilitation specialist',
    highlights: ['DPT certified', 'Sports injury expert', '95% recovery rate'],
    gradient: 'from-green-600 to-teal-600',
    rating: 4.8,
    downloads: 6200
  },
  'high-school-teacher': {
    industry: 'Education',
    template: 'professional',
    description: 'Award-winning STEM educator',
    highlights: ['Teacher of the Year', '98% pass rate', 'STEM program creator'],
    gradient: 'from-blue-600 to-indigo-600',
    rating: 5.0,
    downloads: 7800
  },
  'college-professor': {
    industry: 'Education',
    template: 'executive',
    description: 'Published researcher and educator',
    highlights: ['PhD in Education', '50+ publications', 'Department chair'],
    gradient: 'from-purple-600 to-indigo-600',
    rating: 4.9,
    downloads: 5400
  }
};

// Main function to fix all examples
async function fixAllExamples() {
  console.log('🔧 Fixing all example pages...\n');
  
  const baseDir = path.join(__dirname, '..', 'frontend', 'app', 'examples');
  
  for (const [id, data] of Object.entries(examplePages)) {
    try {
      const exampleDir = path.join(baseDir, id);
      const pagePath = path.join(exampleDir, 'page.jsx');
      
      // Generate the complete page file
      const pageContent = generatePageFile(id, data, exampleMetadata[id]);
      
      // Write the file
      await fs.writeFile(pagePath, pageContent);
      
      console.log(`✅ Fixed: ${id}/page.jsx`);
    } catch (error) {
      console.error(`❌ Error fixing ${id}:`, error.message);
    }
  }
  
  console.log('\n✨ All example pages have been fixed!');
}

// Run the fixer
fixAllExamples().catch(console.error);
