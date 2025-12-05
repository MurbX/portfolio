'use client'

import { useState, useRef, MouseEvent } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  liveLink?: string
  githubLink?: string
  features: string[]
  inDevelopment?: boolean
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index]
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  const projects: Project[] = [
    {
      id: 1,
      title: 'Palmera AI',
      description: "An AI-powered real-estate recommendation platform that helps users find properties through natural conversation. Users describe their preferences — location, budget, bedrooms, lifestyle needs — and the AI returns curated property matches. Features multilingual support (English/Hebrew), smart property cards, and responsive chat UI.",
      image: '/images/palmera-ai.png',
      tags: ['Bubble.io', 'OpenAI', 'Airtable', 'AI Assistant'],
      category: 'AI/ML',
      liveLink: 'https://ai.palmera.realestate/',
      features: [
        'Conversational Property Search',
        'Dual-Language Support (EN/HE)',
        'Real-Time Property Matching',
        'Smart Result Cards',
      ],
    },
    {
      id: 2,
      title: 'Powercouple',
      description: "An innovative investor app for managing and tracking real estate investments, serving over 1,000 investors. Features a personal interface for each investor with ongoing investment updates, advanced portfolio management tools, a community area showcasing success stories, and a smart real-time notification system for market opportunities.",
      image: '/images/PCouple-qsnz98oytd1u76haslykn6sdaz3l4ovc0gob0sgpy8.webp',
      tags: ['Bubble.io', 'Real Estate', 'Investment', 'FinTech'],
      category: 'No-Code',
      liveLink: undefined,
      inDevelopment: true,
      features: [
        'Personal Investor Dashboard',
        'Portfolio Performance Tracking',
        'Community Success Stories',
        'Real-Time Notifications',
      ],
    },
    {
      id: 3,
      title: 'Craftad.ai',
      description: "An advanced system for creating marketing and advertising content that generates high-quality, targeted content tailored to specific audiences. The platform enables the production of unique campaigns that highlight messages and brands, helping to increase impact and exposure in the digital market.",
      image: '/images/Craftad-2-r1gy4yz1m5yl5mkmm3fjttqz7sy75wkaaqzxfhgz8g.webp',
      tags: ['Bubble.io', 'AI/ML', 'Marketing', 'Content Generation'],
      category: 'AI/ML',
      liveLink: 'https://craftad.ai',
      features: [
        'AI Content Generation',
        'Targeted Campaigns',
        'Brand Messaging',
        'Digital Market Exposure',
      ],
    },
    {
      id: 4,
      title: 'AHNA Management System',
      description: "A comprehensive management system for a leading international company, featuring 6 advanced modules including Project, Personnel, Customer, Supplier, Management Dashboard, and Reporting & Analytics. Implemented intelligent agent pool management with skills tracking and optimal project matching, resulting in 40% efficiency improvement.",
      image: '/images/ahna image.webp',
      tags: ['Bubble.io', 'Management', 'Analytics', 'Dashboard'],
      category: 'No-Code',
      liveLink: 'https://ahna-61278.bubbleapps.io',
      features: [
        '6 Advanced Modules',
        'Agent Pool Management',
        '40% Efficiency Improvement',
        'Skills Tracking System',
      ],
    },
    {
      id: 5,
      title: 'FFili Influencer Marketing Platform',
      description: "A revolutionary influencer marketing platform connecting brands, influencers, and audiences. Features smart algorithm technology for product-influencer matching, personalized campaign recommendations, and a robust content management system.",
      image: '/images/FFili-client-r1hqo8t6rw7xnqeg2518uliezlnfherm7a3iy2bn1c.webp',
      tags: ['Bubble.io', 'Marketing', 'AI Algorithms', 'CMS'],
      category: 'No-Code',
      liveLink: 'https://ffili.com',
      features: [
        'Smart Matching Algorithm',
        'Campaign Management',
        'Content Management System',
        'Personalized Recommendations',
      ],
    },
    {
      id: 6,
      title: 'Katchings Financial Advisory Platform',
      description: 'An innovative fintech platform empowering financial advisors to create personalized client portals for investment tracking. Integrated comprehensive financial dashboards and a dedicated management interface for consulting agencies.',
      image: '/images/Katching-qso0h10b6izp18vm41bxan0di5a4p3p716pkttji3k.webp',
      tags: ['Bubble.io', 'FinTech', 'Investment', 'Analytics'],
      category: 'No-Code',
      liveLink: 'https://katchings.com',
      features: [
        'Client Portal Management',
        'Investment Tracking',
        'Financial Dashboards',
        'Agency Management Interface',
      ],
    },
    {
      id: 7,
      title: 'OpenTrade Analytics Suite',
      description: 'A revolutionary trading platform offering a smart trading experience based on real-time market data. Implemented advanced financial data collection with cTrader integration and an intelligent algorithm for market pattern identification and personalized trading recommendations.',
      image: '/images/Opentrade333-r1saixk7i1u4e15khljzuc5riauu7vbtyp6nt8q7a8.webp',
      tags: ['Bubble.io', 'Trading', 'cTrader', 'Real-time Data'],
      category: 'No-Code',
      liveLink: 'https://opentrade-56584.bubbleapps.io',
      features: [
        'Real-time Market Data',
        'cTrader Integration',
        'Pattern Identification',
        'Trading Recommendations',
      ],
    },
    {
      id: 8,
      title: 'Hi Preemie Baby Care App',
      description: 'A comprehensive NICU baby care management application specializing in premature infant care. Features an intelligent scheduling system for feeding, diaper changes, and medication, integrated with a comprehensive medical database and care guidelines.',
      image: '/images/Preemie-qso04f09hjq79l72r334cbkql1fufamuarm2168nkw.webp',
      tags: ['Bubble.io', 'Healthcare', 'Medical', 'Scheduling'],
      category: 'No-Code',
      liveLink: 'https://hi-preemie.com',
      features: [
        'Intelligent Scheduling',
        'Medical Database',
        'Care Guidelines',
        'Premature Infant Care',
      ],
    },
  ]

  const categories = ['All', 'No-Code', 'Full-Stack', 'Mobile', 'AI/ML', 'In Development']

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : activeFilter === 'In Development'
      ? projects.filter((p) => p.inDevelopment === true)
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A selection of recent projects showcasing my expertise in no-code development,
            full-stack solutions, and modern web applications.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden cursor-pointer border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* In Development Badge */}
                {project.inDevelopment && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      In Development
                    </span>
                  </div>
                )}
                
                {/* Links Overlay */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-xl transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white rounded-xl transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{project.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-900">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0"></span>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary inline-block">
            Let's Build Something Together
          </a>
        </motion.div>
      </div>
    </section>
  )
}
