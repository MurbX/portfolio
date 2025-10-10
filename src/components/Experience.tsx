'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Briefcase } from 'lucide-react'

interface ExperienceItem {
  company: string
  logo: string
  position: string
  period: string
  description: string
  location?: string
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: 'Deploy',
      logo: 'deploy-logo.svg',
      position: 'Senior Bubble Developer',
      period: 'Nov 2025 - Present',
      location: 'Tel Aviv, Israel',
      description:
        'As a Senior Bubble Developer at Deploy, I am currently working on developing & deploying scalable bubble.io web applications. My role involves complex integrations with external APIs, advanced database management, and implementing custom workflows to create high-performance user experiences. I collaborate closely with cross-functional teams, write clean, efficient code, and ensure projects meet high standards of quality while staying on schedule.',
    },
    {
      company: 'Bubble.io Developer',
      logo: 'bubble-logo.svg',
      position: 'Bubble.io Developer / Founder',
      period: 'Nov 2021 - Present',
      location: 'Kenya',
      description:
        "As an independent Bubble developer for over 3 years, I specialize in building custom no-code applications & digital products. Working directly with clients, I've delivered everything from startup MVPs to enterprise-level solutions, focusing on scalability, clean architecture, and seamless user experiences. My expertise spans complex API integrations, custom plugins, and creating robust workflows that solve real business problems. I take pride in transforming ideas into fully functional products while maintaining high code quality standards.",
    },
    {
      company: 'Productive',
      logo: 'productive logo.svg',
      position: 'WordPress Plugin Developer (Elementor)',
      period: 'April 2024 - July 2024',
      location: 'Israel',
      description:
        'As a WordPress Plugin Developer at Productive, I developed custom plugins to extend Elementor functionality and enhance client websites. I created tailored plugins optimized for scalability and performance, collaborated with designers and product teams to deliver user-friendly, responsive solutions, and provided technical support, troubleshooting, and documentation. 🚀',
    },
  ]

  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <Briefcase size={20} className="text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Work Experience</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here is a quick summary of my most recent experiences
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gray-900 border-4 border-white shadow-lg hidden md:block z-10"></div>

                {/* Content Card */}
                <div className="md:ml-20 group">
                  <div className="bg-white rounded-2xl border border-gray-200 hover:border-gray-900 transition-all duration-300 overflow-hidden hover:shadow-xl">
                    <div className="p-10">
                      <div className="flex flex-col md:flex-row gap-8">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center p-4 group-hover:bg-gray-100 transition-colors">
                            <Image
                              src={`/images/${exp.logo}`}
                              alt={exp.company}
                              width={60}
                              height={60}
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {exp.position}
                            </h3>
                            <p className="text-lg font-semibold text-gray-700">
                              {exp.company}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1.5">
                                <MapPin size={16} />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>

                          <p className="text-gray-600 leading-relaxed text-base">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
