'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Heart } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing accessible, maintainable code'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Beautiful pixels and user experience'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'MVP to production in 30 days'
    },
    {
      icon: Heart,
      title: 'Detail Oriented',
      description: 'I sweat the details that matter'
    }
  ]

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gray-50">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-transparent -z-10"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about bringing technical and design aspects together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full">
              <Image
                src="/images/portfolio-image-2.png"
                alt="Brian Mutuku"
                width={700}
                height={933}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Intro Text */}
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am passionate about bringing technical and design aspects together. User experience, beautiful pixels and writing clean accessible code matters to me. I sweat the details.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300">
                      <Icon className="text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} strokeWidth={2} />
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{highlight.title}</h4>
                      <p className="text-xs text-gray-600">{highlight.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Story Sections */}
            <div className="space-y-6">
              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">My Journey</h3>
                <p className="text-gray-700 leading-relaxed">
                  Over the years, I've learned lots of other tools in dev, a versatile product designer with three years of experience who can help you from start to finish - whether it's building MVPs or managing complex products, and everything in between!
                </p>
              </div>

              <div className="border-l-4 border-gray-900 pl-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Beyond the Code</h3>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not at my desk I am probably lifting weights, doing yoga or simply hitting the road! I'm a huge health and fitness enthusiast. I like to stay healthy, both physically and mentally!
                </p>
              </div>

              <div className="bg-gray-900 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Let's Work Together</h3>
                <p className="text-gray-100 leading-relaxed">
                  I take projects from idea through design, development, and testing until it's perfect - with the goal of creating high quality products that users love. Let's chat about bringing your ideas to life!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
