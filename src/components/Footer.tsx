'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-4 lg:mx-8 mb-4 lg:mb-8 bg-[#141414] rounded-[2rem] py-12 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8">
          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#about" className="text-white/60 hover:text-[#D4FF5B] text-sm font-medium transition-colors">
              About
            </a>
            <a href="#skills" className="text-white/60 hover:text-[#D4FF5B] text-sm font-medium transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-white/60 hover:text-[#D4FF5B] text-sm font-medium transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-white/60 hover:text-[#D4FF5B] text-sm font-medium transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-white/60 hover:text-[#D4FF5B] text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Copyright */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-white/40 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-current" /> in Kenya
            </p>
            <p className="text-white/40 text-sm">
              &copy; {currentYear} Brian Mutuku. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
