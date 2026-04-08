'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { getFeaturedProjects, type Project } from '@/lib/project-data'

const rotations = [-1.5, 1.5, 1, -1, -1.5, 1.5]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
        viewport={{ once: true }}
        whileHover={{ rotate: 0, scale: 1.03, y: -8, transition: { duration: 0.15 } }}
        transition={{ delay: index * 0.08, duration: 0.4 }}
        className="group cursor-pointer bg-[#141414] rounded-[1.5rem] overflow-hidden"
      >
          {/* Screenshot area with padding */}
          <div className="relative p-5 lg:p-7">
            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Browser frame */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* Browser bar */}
              <div className="bg-gray-100 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 mx-6">
                  <div className="bg-white rounded h-5 border border-gray-200" />
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative h-[260px] lg:h-[340px]">
                <Image
                  src={project.cardImage}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Hover arrow */}
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <ArrowUpRight size={30} strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Title bar */}
          <div className="px-6 py-5 lg:px-7">
            <h3 className="text-xl lg:text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-white/50 text-sm mt-1">{project.subtitle}</p>
          </div>
      </motion.div>
    </Link>
  )
}

export default function Projects() {
  const featured = getFeaturedProjects()
  const leftColumn = featured.filter((_, i) => i % 2 === 0)
  const rightColumn = featured.filter((_, i) => i % 2 === 1)
  const leftIndices = featured.map((_, i) => i).filter((i) => i % 2 === 0)
  const rightIndices = featured.map((_, i) => i).filter((i) => i % 2 === 1)

  return (
    <section
      id="projects"
      className="mx-4 lg:mx-8 bg-black rounded-[2rem] py-20 lg:py-28 overflow-hidden relative z-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-10 h-10 rounded-full border border-white flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </span>
            <span className="px-5 py-2.5 border border-white rounded-full text-sm font-medium text-white">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-[3.5rem] font-semibold text-white leading-tight"
          >
            Take a look at the latest
            <br />
            projects I&apos;ve done
          </motion.h2>
        </div>

        {/* Two-column masonry — right column offset down */}
        <div className="hidden md:flex gap-8">
          <div className="flex-1 flex flex-col gap-8">
            {leftColumn.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={leftIndices[i]} />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-8 mt-16">
            {rightColumn.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={rightIndices[i]} />
            ))}
          </div>
        </div>

        {/* Mobile — single column */}
        <div className="flex md:hidden flex-col gap-8">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
