'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight, Download } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/50 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo with hover effect */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors group"
          >
            <span className="inline-block group-hover:scale-105 transition-transform">
              &lt;BR /&gt;
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors rounded-lg hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a 
                href="/#contact" 
                className="px-5 py-2.5 text-gray-700 font-medium border border-gray-300 rounded-[12px] hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 inline-flex items-center gap-2 group"
              >
                Contact
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="px-5 py-2.5 bg-gray-900 text-white font-medium rounded-[12px] hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
              <a 
                href="#contact" 
                className="px-5 py-2.5 text-center text-gray-700 font-medium border border-gray-300 rounded-[12px] hover:bg-gray-50 transition-all duration-200 inline-flex items-center justify-center gap-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Me
                <ArrowUpRight size={16} />
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="px-5 py-2.5 bg-gray-900 text-white font-medium rounded-[12px] hover:bg-gray-800 transition-all duration-200 shadow-sm inline-flex items-center justify-center gap-2" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
