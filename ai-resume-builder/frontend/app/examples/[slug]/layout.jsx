// frontend/app/examples/[slug]/layout.jsx
export async function generateMetadata({ params }) {
  // Get the slug and create proper title
  const slug = params.slug;
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${title} Resume Example | Free Template | Resumind`,
    description: `Professional ${title} resume example that gets interviews. Download this ATS-optimized template and customize it for free. Real examples from top companies.`,
    keywords: `${title} resume, ${title} resume example, ${title} CV template, ${title} resume template, professional resume`,
    openGraph: {
      title: `${title} Resume Example - Free Professional Template`,
      description: `Download this proven ${title} resume template. ATS-optimized format used by professionals to land interviews at top companies.`,
      type: 'article',
      images: ['/resume-preview.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} Resume Example | Resumind`,
      description: `Free ${title} resume template with proven results. ATS-friendly format.`,
    },
    alternates: {
      canonical: `https://resumind.com/examples/${slug}`,
    }
  };
}

export default function ExampleLayout({ children }) {
  return <>{children}</>;
}
