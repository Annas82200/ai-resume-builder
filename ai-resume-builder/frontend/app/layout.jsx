import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'Resumind - AI Resume Builder | Create ATS-Optimized Resumes in Minutes',
  description: 'Build professional resumes with AI that get you hired. 95% ATS success rate, used by 127,000+ job seekers. Try free today!',
  keywords: 'resume builder, AI resume, ATS resume, professional resume, CV builder, job application, career, resume templates, cover letter',
  authors: [{ name: 'Resumind' }],
  creator: 'Resumind',
  publisher: 'Resumind',
  metadataBase: new URL('https://resumind.co'),
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resumind.co',
    title: 'Resumind - AI Resume Builder | Create ATS-Optimized Resumes',
    description: 'Build professional resumes with AI that get you hired. 95% ATS success rate, used by 127,000+ job seekers.',
    siteName: 'Resumind',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resumind AI Resume Builder - Create Professional Resumes',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Resumind - AI Resume Builder | Get Hired Faster',
    description: 'Build professional resumes with AI. 95% ATS success rate. Start free today!',
    images: ['/og-image.png'],
    creator: '@resumind',
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      }
    ]
  },
  
  manifest: '/site.webmanifest',
  
  alternates: {
    canonical: 'https://resumind.co',
  },
  
  category: 'technology',
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Resumind',
    description: 'AI-powered resume builder that creates ATS-optimized resumes',
    url: 'https://resumind.co',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127000',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Chen'
        },
        datePublished: '2024-01-10',
        description: 'Best resume builder I have ever used. Got interviews at 5 FAANG companies!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1'
        }
      }
    ]
  }

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Resumind',
    url: 'https://resumind.co',
    logo: 'https://resumind.co/logo.png',
    sameAs: [
      'https://twitter.com/resumind',
      'https://www.facebook.com/resumind',
      'https://www.linkedin.com/company/resumind'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@resumind.co',
      availableLanguage: ['English']
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Google Analytics - Keep your existing setup */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="DG7rmNqF80lR9CiQdaeY-VhnQ8v5l6L1r9S7cMl9mV8" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Additional SEO tags */}
        <meta property="fb:app_id" content="your-fb-app-id" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
