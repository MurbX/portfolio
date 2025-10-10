import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brian Mutuku - Senior Bubble Developer & No-Code Specialist',
  description: 'Full-stack developer specializing in no-code solutions, Bubble.io, FlutterFlow, and modern web development.',
  keywords: ['Bubble Developer', 'No-Code', 'FlutterFlow', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Brian Mutuku', url: 'https://murbxpn8n.dev' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Brian Mutuku - Senior Bubble Developer',
    description: 'Full-stack developer specializing in no-code solutions',
    url: 'https://murbxpn8n.dev',
    siteName: 'Brian Mutuku Portfolio',
    locale: 'en_US',
    type: 'website',
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
