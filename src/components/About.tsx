'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter } from 'lucide-react'

const pills = [
  { name: 'Bubble.io', rotate: -12, dark: true, size: 'lg' },
  { name: 'FlutterFlow', rotate: 8, dark: false, size: 'md' },
  { name: 'Webflow', rotate: -5, dark: false, size: 'lg' },
  { name: 'Xano', rotate: 15, dark: false, size: 'md' },
  { name: 'Figma', rotate: -8, dark: false, size: 'lg' },
  { name: 'Framer', rotate: 10, dark: false, size: 'md' },
  { name: 'Flutter', rotate: -6, dark: true, size: 'lg' },
  { name: 'React', rotate: 12, dark: false, size: 'lg' },
  { name: 'TypeScript', rotate: -10, dark: true, size: 'md' },
  { name: 'Supabase', rotate: 7, dark: false, size: 'lg' },
  { name: 'Next.js', rotate: -14, dark: true, size: 'md' },
]

function Pill({ pill, index }: { pill: typeof pills[number]; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: pill.rotate }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.05 }}
      whileHover={{ rotate: 0, scale: 1.12, y: -8, transition: { duration: 0.15 } }}
      className={`rounded-full font-semibold cursor-default select-none transition-shadow duration-300 hover:shadow-lg ${
        pill.size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
      } ${
        pill.dark
          ? 'bg-black text-white'
          : 'bg-white text-black border-2 border-black'
      }`}
    >
      {pill.name}
    </motion.span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Badge — top right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-end mb-10"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </span>
            <span className="px-6 py-3 border border-black rounded-full text-base font-medium text-black">
              About
            </span>
          </div>
        </motion.div>

        {/* Photo card + Title row */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-10">
          {/* Photo card — left, rotated, square transparent bg like testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.15 } }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="shrink-0 w-[240px] lg:w-[280px] rounded-[1.5rem] bg-black/5 backdrop-blur-sm border border-black/10"
          >
            {/* Photo in circle border */}
            <div className="flex items-center justify-center pt-6 pb-4">
              <div className="w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-4 border-black/10">
                <Image
                  src="/images/potrait_cropped.png"
                  alt="Brian Mutuku"
                  width={220}
                  height={220}
                  className="object-cover object-top w-full h-full"
                />
              </div>
            </div>

            {/* Social icons pill — bottom-left */}
            <div className="flex items-center justify-start px-3 py-3">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full">
                <a href="https://www.linkedin.com/in/brian-mutuku-developer/" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-black transition-colors duration-150">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/MurbX" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-black transition-colors duration-150">
                  <Github size={18} />
                </a>
                <a href="https://x.com/MurbBrian_ke" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-black transition-colors duration-150">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Heading — right side */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-[5rem] font-semibold text-black leading-[1.5] text-center lg:text-left flex-1"
          >
            I&apos;ve been{' '}
            <span className="bg-black text-white px-5 py-2 rounded-xl inline-block leading-[1.15] mx-1">
              Building
            </span>
            <br />
            Applications since{' '}
            <span className="bg-black text-white px-5 py-2 rounded-xl inline-block leading-[1.15] mx-1">
              2020
            </span>
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black text-center max-w-2xl mx-auto text-lg leading-relaxed mb-20"
        >
          I&apos;m a versatile developer with 5+ years of expertise across
          healthcare, fintech, proptech, and community platforms. Every project
          starts with a discovery call so I can understand your goals and
          recommend the best path forward.
        </motion.p>

        {/* Previously Worked With — scattered pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center md:items-end gap-10"
        >
          <p className="text-black font-bold text-2xl lg:text-3xl uppercase tracking-wider shrink-0 leading-tight">
            Previously
            <br />
            Worked With
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 max-w-4xl">
            {pills.map((pill, i) => (
              <Pill key={pill.name} pill={pill} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
