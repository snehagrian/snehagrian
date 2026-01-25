import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sneha Grian Joshua | Software Engineer',
  description: 'Portfolio of Sneha Grian Joshua - Software Engineer specializing in full-stack development, distributed systems, and cloud technologies.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'React', 'Node.js', 'AWS', 'Java', 'Python', 'Spring Boot', 'Microservices', 'Cloud Native'],
  authors: [{ name: 'Sneha Grian Joshua' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://snehagrian.vercel.app',
    title: 'Sneha Grian Joshua | Software Engineer',
    description: 'Software Engineer specializing in full-stack development, distributed systems, and cloud technologies.',
    siteName: 'Sneha Grian Joshua Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sneha Grian Joshua | Software Engineer',
    description: 'Software Engineer specializing in full-stack development, distributed systems, and cloud technologies.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
