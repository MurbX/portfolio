'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent'
      } ${mobileMenuOpen ? 'max-md:bg-white/95 max-md:backdrop-blur-md' : ''}`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-[1.35rem] font-extrabold tracking-tight text-black uppercase"
          >
            MURBXP.DEV
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-black hover:text-black/60 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 pl-3 pr-6 py-2.5 border border-black rounded-full text-[15px] font-medium text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
            >
              <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
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
                  className="block px-4 py-3 text-black font-medium rounded-lg hover:bg-black/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 pl-3 pr-6 py-2.5 border border-black rounded-full text-[15px] font-medium text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                Start Project
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
