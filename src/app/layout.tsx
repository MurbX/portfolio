import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://murbxp.dev'),
  title: 'Brian Mutuku — No-Code / Pro-Code Developer & Full-Stack Solutions Architect',
  description:
    'Versatile developer with 5+ years of expertise architecting enterprise-grade applications across Bubble.io, Flutter, React, and TypeScript. Delivering scalable solutions across healthcare, fintech, proptech, and community platforms.',
  keywords: [
    'Brian Mutuku',
    'No-Code Developer',
    'Bubble.io Developer',
    'Flutter Developer',
    'React Developer',
    'Full-Stack Architect',
    'Portfolio',
  ],
  authors: [{ name: 'Brian Mutuku', url: 'https://murbxp.dev' }],
  openGraph: {
    title: 'Brian Mutuku — No-Code / Pro-Code Developer',
    description:
      'Architecting enterprise-grade applications across Bubble.io, Flutter, React, and TypeScript.',
    url: 'https://murbxp.dev',
    siteName: 'Brian Mutuku Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Mutuku — No-Code / Pro-Code Developer',
    description:
      'Architecting enterprise-grade applications across Bubble.io, Flutter, React, and TypeScript.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  )
}
