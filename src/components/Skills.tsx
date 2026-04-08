'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const skills = [
  {
    name: 'Bubble.io',
    logo: '/images/bubble-logo.svg',
    description:
      'Building scalable web applications with visual programming and complex workflows.',
  },
  {
    name: 'FlutterFlow',
    logo: '/images/flutterflow-logo.svg',
    description:
      'Creating beautiful cross-platform mobile apps with pixel-perfect design.',
  },
  {
    name: 'Webflow',
    logo: '/images/webflow-logo.svg',
    description:
      'Designing and developing responsive marketing websites with clean animations.',
  },
  {
    name: 'Xano',
    logo: '/images/xano-logo.svg',
    description:
      'Building robust backend APIs and database architectures for scalable applications.',
  },
  {
    name: 'Framer',
    logo: '/images/framer-logo.svg',
    description:
      'Developing performant interactive websites with advanced motion and design.',
  },
  {
    name: 'Figma',
    logo: '/images/figma-logo.svg',
    description:
      'Crafting intuitive user interfaces and design systems from concept to production.',
  },
  {
    name: 'Flutter',
    logo: '/images/flutter-logo.svg',
    description:
      'Building beautiful cross-platform mobile applications with a single codebase.',
  },
  {
    name: 'React',
    logo: '/images/react-logo.svg',
    description:
      'Creating dynamic, component-driven web interfaces with modern React patterns.',
  },
  {
    name: 'TypeScript',
    logo: '/images/typescript-logo.svg',
    description:
      'Writing type-safe, maintainable code for scalable frontend and backend applications.',
  },
  {
    name: 'Supabase',
    logo: '/images/supabase-logo.svg',
    description:
      'Building real-time backends with authentication, storage, and PostgreSQL databases.',
  },
  {
    name: 'Next.js',
    logo: '/images/nextjs-logo.svg',
    description:
      'Developing fast, SEO-optimized web applications with server-side rendering.',
  },
]

const cardRotations = [-2, 0, 2]

export default function Skills() {
  const [startIndex, setStartIndex] = useState(0)
  const cardsPerView = 3
  const maxIndex = skills.length - cardsPerView

  const prev = () => setStartIndex((i) => Math.max(0, i - 1))
  const next = () => setStartIndex((i) => Math.min(maxIndex, i + 1))

  const visibleSkills = skills.slice(startIndex, startIndex + cardsPerView)

  return (
    <section className="mx-4 lg:mx-8 bg-black rounded-[2rem] py-20 lg:py-28 overflow-hidden relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          {/* Left: badge + heading */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </span>
              <span className="px-5 py-2.5 border border-white rounded-full text-sm font-medium text-white">
                Why Choose me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-[3.5rem] font-semibold text-white leading-[1.15]"
            >
              My Extensive
              <br />
              List of Skills
            </motion.h2>
          </div>

          {/* Right: description + arrows */}
          <div className="lg:max-w-sm lg:pt-14">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white leading-relaxed text-lg"
            >
              A deep toolkit across no-code and pro-code stacks — so I can pick
              the right tool for every project instead of forcing one approach.
            </motion.p>
            <div className="w-full h-px bg-white/30 mt-6" />

            <div className="flex items-center gap-4 mt-6 justify-end">
              <button
                onClick={prev}
                disabled={startIndex === 0}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={startIndex >= maxIndex}
                className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <AnimatePresence mode="popLayout">
            {visibleSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: cardRotations[i] }}
                exit={{ opacity: 0, y: -30 }}
                whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#141414] rounded-[1.25rem] p-8 lg:p-10 min-h-[360px] cursor-pointer"
              >
                <div className="mb-10 h-10 relative w-fit">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={100}
                    height={40}
                    className="object-contain h-10 w-auto brightness-0 invert opacity-80"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {skill.name}
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
