'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Calendar, User, Monitor, Smartphone } from 'lucide-react'
import { getProjectBySlug, projects, type ProjectImage } from '@/lib/project-data'
import { useState } from 'react'

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === 'mobile') return <Smartphone size={16} />
  if (platform === 'both')
    return (
      <span className="flex gap-1">
        <Monitor size={16} />
        <Smartphone size={16} />
      </span>
    )
  return <Monitor size={16} />
}

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-2xl">
      {/* Browser top bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-8">
          <div className="bg-white rounded-md h-7 border border-gray-200" />
        </div>
      </div>
      {children}
    </div>
  )
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden">
      {/* Notch */}
      <div className="relative bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-2xl z-10" />
      </div>
      {children}
    </div>
  )
}

function ScreenDisplay({ image, title, index }: { image: ProjectImage; title: string; index: number }) {
  if (image.isMobile) {
    return (
      <div className="flex justify-center py-10 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
        <PhoneFrame>
          <div className="relative w-[280px] h-[600px] lg:w-[320px] lg:h-[690px]">
            <Image
              src={image.src}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </PhoneFrame>
      </div>
    )
  }

  return (
    <div className="p-4 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
      <BrowserFrame>
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={image.src}
            alt={`${title} screenshot ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      </BrowserFrame>
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#projects" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  const currentImage = project.images[selectedImage]

  return (
    <main className="min-h-screen bg-[#F9F9F9] relative">
      {/* Background */}
      <div
        className="absolute inset-0 -z-20 w-full h-full"
        style={{
          backgroundImage: "url('/mesh-gradient.svg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 -z-10 w-full h-full dot-pattern opacity-[0.35]" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              Visit Live Site
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-black text-white text-xs font-semibold rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-3">{project.title}</h1>
          <p className="text-xl lg:text-2xl text-gray-500 font-medium mb-8">{project.subtitle}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <User size={16} />
              {project.role}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} />
              {project.year}
            </span>
            <span className="inline-flex items-center gap-2">
              <PlatformIcon platform={project.platform} />
              {project.platform === 'both'
                ? 'Web & Mobile'
                : project.platform === 'mobile'
                  ? 'Mobile App'
                  : 'Web App'}
            </span>
          </div>
        </motion.div>

        {/* Main Image with Device Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6"
        >
          <ScreenDisplay image={currentImage} title={project.title} index={selectedImage} />
        </motion.div>

        {/* Thumbnail Strip */}
        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex gap-3 mb-16 overflow-x-auto pb-2"
          >
            {project.images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setSelectedImage(i)}
                className={`relative flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  img.isMobile ? 'w-16 h-24 lg:w-20 lg:h-28' : 'w-28 h-20 lg:w-36 lg:h-24'
                } ${
                  selectedImage === i
                    ? 'border-black shadow-lg scale-105'
                    : 'border-gray-200 hover:border-gray-400 opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img.src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-2xl font-bold mb-4">About this project</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
        </motion.div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`}>
                  <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                    <div className="relative h-52 bg-gray-100">
                      <Image
                        src={p.cardImage}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold text-white">{p.title}</h3>
                      <p className="text-white/70 text-sm">{p.subtitle}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
