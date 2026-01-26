import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://snehagrian.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sneha Grian Joshua | Software Engineer Portfolio',
    template: '%s | Sneha Grian Joshua',
  },
  description: 'Experienced Software Engineer specializing in full-stack development, cloud technologies, and scalable web applications. Proficient in React, Next.js, Node.js, Python, Java, AWS, and Azure. Based in Florida, USA.',
  keywords: [
    'Sneha Grian Joshua',
    'Software Engineer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'Java',
    'Spring Boot',
    'AWS',
    'Azure',
    'Cloud Computing',
    'Microservices',
    'REST API',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Florida Software Engineer',
    'Arizona State University',
  ],
  authors: [{ name: 'Sneha Grian Joshua', url: siteUrl }],
  creator: 'Sneha Grian Joshua',
  publisher: 'Sneha Grian Joshua',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Sneha Grian Joshua | Software Engineer Portfolio',
    description: 'Experienced Software Engineer specializing in full-stack development, cloud technologies, and scalable web applications. Explore my projects, skills, and professional experience.',
    siteName: 'Sneha Grian Joshua Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sneha Grian Joshua - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sneha Grian Joshua | Software Engineer Portfolio',
    description: 'Experienced Software Engineer specializing in full-stack development, cloud technologies, and scalable web applications.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sneha Grian Joshua',
    url: 'https://snehagrian.vercel.app',
    jobTitle: 'Software Engineer',
    description: 'Experienced Software Engineer specializing in full-stack development, cloud technologies, and scalable web applications',
    email: 'mailto:snehagrianjsk@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Florida',
      addressCountry: 'USA',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Arizona State University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Anna University',
      },
    ],
    sameAs: [
      'https://linkedin.com/in/sneha-grian',
      'https://github.com/snehagrian',
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ec4899" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
