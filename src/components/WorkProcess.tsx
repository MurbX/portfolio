'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discovery',
    description:
      'I start every engagement with an in-depth discovery call to understand your goals, constraints, and success metrics — then recommend whether no-code, pro-code, or a hybrid approach is the right fit.',
    rotate: -2,
  },
  {
    title: 'Architecture',
    description:
      'Before writing a single line, I map out the data model, integrations, and workflows. This is where I choose the right stack — Bubble, Flutter, React, or a mix — to keep your app scalable and maintainable.',
    rotate: 1.5,
  },
  {
    title: 'Design',
    description:
      'I design intuitive interfaces in Figma and validate them with you before any build work begins. Each screen is reviewed and approved so there are no surprises once development starts.',
    rotate: 1,
  },
  {
    title: 'Build & Ship',
    description:
      'I build with clean architecture, test against real data, and ship on time. From custom plugins and API integrations to mobile deployment, I handle the full stack end-to-end.',
    rotate: -1.5,
  },
]

export default function WorkProcess() {
  return (
    <section className="mx-4 lg:mx-8 bg-black rounded-[2rem] py-20 lg:py-28 overflow-hidden relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 self-start"
          >
            <span className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </span>
            <span className="px-5 py-2.5 border border-white rounded-full text-sm font-medium text-white">
              Work Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-[3.5rem] font-semibold text-white leading-tight"
          >
            My Work Process
          </motion.h2>
        </div>

        {/* 2x2 Grid with rotations like Skills cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: step.rotate }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#141414] rounded-[1.25rem] p-8 lg:p-10 group cursor-pointer
                hover:bg-[#D4FF5B] transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="px-5 py-2.5 bg-[#D4FF5B] text-black rounded-full text-sm font-semibold group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  {step.title}
                </span>
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium opacity-60 group-hover:opacity-100 group-hover:text-black transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Read More
                </span>
              </div>
              <p className="text-white text-lg lg:text-xl leading-relaxed group-hover:text-black transition-colors duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
