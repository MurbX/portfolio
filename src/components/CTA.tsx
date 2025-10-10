'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-full mb-6"
          >
            <Sparkles size={20} className="text-purple-600" />
            <span className="text-sm font-medium text-gray-900">Let's Create Something Amazing</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Idea Into Reality?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I specialize in building scalable web and mobile applications using no-code and full-stack solutions. 
            Let's bring your vision to life in just 30 days!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Start a Project
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
