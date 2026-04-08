'use client'

import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative z-10 overflow-hidden">
      {/* Background gradient SVG */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="contactBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
            </filter>
          </defs>
          <rect width="1440" height="900" fill="#F9F9F9" />
          <ellipse cx="300" cy="200" rx="400" ry="300" fill="#BEE9F8" opacity="0.5" filter="url(#contactBlur)" />
          <ellipse cx="1100" cy="700" rx="450" ry="300" fill="#D4FF5B" opacity="0.5" filter="url(#contactBlur)" />
          <ellipse cx="700" cy="450" rx="300" ry="200" fill="#c8f0a0" opacity="0.3" filter="url(#contactBlur)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <span className="px-6 py-3 border border-black rounded-full text-base font-medium text-black">
              Get In Touch
            </span>
          </div>
        </motion.div>

        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl lg:text-[5rem] font-semibold text-black leading-[1.5] text-center mb-6"
        >
          Let&apos;s{' '}
          <span className="bg-black text-white px-5 py-2 rounded-xl inline-block leading-[1.15] mx-1">
            Work
          </span>
          <br />
          Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black/60 text-center max-w-xl mx-auto text-lg leading-relaxed mb-14"
        >
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss
          how I can bring your ideas to life.
        </motion.p>

        {/* CTA buttons — pill style like Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14"
        >
          <a
            href="mailto:brianmurb22@gmail.com"
            className="inline-flex items-center gap-3 pl-3 pr-8 py-3 border-2 border-black rounded-full text-base font-medium text-black hover:bg-black hover:text-white transition-all duration-200 group"
          >
            <span className="w-10 h-10 rounded-full border border-current flex items-center justify-center transition-colors duration-200">
              <Mail size={18} />
            </span>
            brianmurb22@gmail.com
          </a>

          <a
            href="tel:+254721881858"
            className="inline-flex items-center gap-3 pl-3 pr-8 py-3 border-2 border-black rounded-full text-base font-medium text-black hover:bg-black hover:text-white transition-all duration-200 group"
          >
            <span className="w-10 h-10 rounded-full border border-current flex items-center justify-center transition-colors duration-200">
              <Phone size={18} />
            </span>
            +254 721 881 858
          </a>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/brian-mutuku-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/MurbX"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://x.com/MurbBrian_ke"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200"
          >
            <Twitter size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
