'use client'

import { motion } from 'framer-motion'
import { Phone, Instagram, Github, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

      {/* Left social sidebar */}
      <div className="hidden lg:flex flex-col items-center gap-5 absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40">
        <span className="text-sm font-medium text-black writing-vertical rotate-180 tracking-wider">
          @MurbBrian
        </span>
        <div className="flex flex-col items-center gap-5">
          <a href="https://x.com/MurbBrian_ke" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black/60 transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black/60 transition-colors">
            <Instagram size={22} />
          </a>
          <a href="https://github.com/MurbX" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black/60 transition-colors">
            <Github size={22} />
          </a>
        </div>
        <div className="w-px h-16 bg-black/30" />
      </div>

      {/* Main content */}
      <div className="w-full px-6 lg:px-10 lg:pl-36">
        <motion.h1
          className="text-[clamp(3.2rem,10.5vw,9rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          No-Code{' '}
          <span className="bg-black text-white px-5 py-2 rounded-xl inline-block leading-[1.1] mx-1">
            &amp; Pro-Code
          </span>{' '}
          Full-Stack
          <br />
          Solutions{' '}
          <span className="bg-black text-white px-5 py-2 rounded-xl inline-block leading-[1.1] mx-1">
            Architect.
          </span>
        </motion.h1>

        <motion.p
          className="mt-8 text-black text-xl max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I architect enterprise-grade applications across Bubble.io, Flutter,
          React, and TypeScript — helping clients cut costs and scale with
          confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 pl-3 pr-6 py-3 border border-black rounded-full text-[15px] font-medium text-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
          >
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition-colors duration-300">
              <Phone size={14} />
            </span>
            Schedule a Call
          </a>

          <a
            href="/resume.pdf"
            download="Brian-Mutuku-Resume.pdf"
            className="inline-flex items-center gap-3 pl-3 pr-6 py-3 bg-black text-white border border-black rounded-full text-[15px] font-medium hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition-colors duration-300">
              <Download size={14} />
            </span>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
