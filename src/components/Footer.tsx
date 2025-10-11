'use client'

import { Heart, Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-gray-200 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/brian-mutuku-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/MurbX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://x.com/MurbBrian_ke"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Projects
            </a>
            <a href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright & Made with love */}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-gray-600 text-sm flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-current" /> in Kenya
            </p>
            <p className="text-gray-500 text-sm">
              © {currentYear} Brian Mutuku. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
