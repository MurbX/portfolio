'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const testimonials = [
  {
    name: 'Adir Cohen',
    role: 'CEO',
    company: 'Deploy Technologies LTD',
    content:
      '"Brian is one of the most reliable developers I\'ve worked with. He consistently delivers complex Bubble.io applications with exceptional quality and attention to detail. His ability to handle intricate integrations and custom workflows has made him an invaluable asset to our team."',
    image: '/images/adir cohen.png',
  },
  {
    name: 'Yoni Gilboa',
    role: 'CEO & Founder',
    company: 'CureBox',
    content:
      '"Brian architected our entire healthcare platform from the ground up. His expertise in React, TypeScript, and Supabase brought CureBox to life with a polished, production-ready experience. Beyond his technical skill, his communication and problem-solving made the whole process seamless."',
    image: '/images/yoni-gilboa.jpg',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </span>
          <span className="px-5 py-2.5 border border-black rounded-full text-sm font-medium text-black">
            Testimonials
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-[4.5rem] font-semibold text-black leading-[1.1] mb-6"
        >
          Client{' '}
          <span className="bg-black text-white px-4 rounded-lg inline-block leading-[1.15]">
            Talking
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-black text-lg max-w-xl leading-relaxed mb-12"
        >
          Real feedback from founders and CEOs I&apos;ve worked directly with
          on production applications.
        </motion.p>

        {/* Testimonial layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-end gap-6 md:ml-12 lg:ml-20"
        >
          {/* Left — Arrows in row + Avatar card */}
          <div className="flex items-end gap-4">
            {/* Arrows — beside the card on the left, in a row */}
            <div className="flex flex-row gap-3 mb-6">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-150"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-150"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Avatar card — slight rotation */}
            <motion.div
              animate={{ rotate: 2 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.15 }}
              className="w-[240px] lg:w-[280px] rounded-[1.5rem] bg-black/5 backdrop-blur-sm border border-black/10 shrink-0"
            >
              {/* Avatar */}
              <div className="flex items-center justify-center pt-10 pb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black/20 relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Social icons — pill, bottom-left corner */}
              <div className="flex items-center justify-start px-3 pb-3">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full">
                  <a href="#" className="text-white transition-colors duration-150">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-white transition-colors duration-150">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="text-white transition-colors duration-150">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Quote card */}
          <motion.div
            animate={{ rotate: -1.5 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.15 }}
            className="flex-1 bg-[#141414] rounded-[1.5rem] p-8 lg:p-12 min-h-[320px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-6">
                    {t.company}
                  </p>
                  <p className="text-white text-lg lg:text-xl leading-relaxed">
                    {t.content}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white font-bold text-lg">{t.name.toUpperCase()}</p>
                  <p className="text-white/50 text-sm mt-1">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
