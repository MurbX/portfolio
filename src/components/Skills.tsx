'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Skills() {
  const tools = [
    { name: 'Bubble', logo: 'bubble-logo.svg' },
    { name: 'FlutterFlow', logo: 'flutterflow-logo.svg' },
    { name: 'Webflow', logo: 'webflow-logo.svg' },
    { name: 'Xano', logo: 'xano-logo.svg' },
    { name: 'Framer', logo: 'framer-logo.svg' },
    { name: 'Figma', logo: 'figma-logo.svg' },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            I work with a stack of the best tools I use frequently:
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.15, 
                rotateY: 10,
                rotateX: 10,
                transition: { duration: 0.2 } 
              }}
              className="perspective-1000"
            >
              <div className="flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl grayscale hover:grayscale-0 transition-all duration-300 preserve-3d">
                <Image
                  src={`/images/${tool.logo}`}
                  alt={tool.name}
                  width={120}
                  height={60}
                  className="object-contain h-16 w-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
