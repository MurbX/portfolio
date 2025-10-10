'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Rocket, Calendar, Zap, CheckCircle } from 'lucide-react'

export default function Stats() {
  const stats = [
    { 
      icon: TrendingUp, 
      value: '4,000+', 
      label: 'Active Users', 
      description: 'Organically grown',
    },
    { 
      icon: Rocket, 
      value: '50+', 
      label: 'Projects Delivered', 
      description: 'Successfully completed',
    },
    { 
      icon: Calendar, 
      value: '3+', 
      label: 'Years Experience', 
      description: 'Building digital products',
    },
    { 
      icon: Zap, 
      value: '30', 
      label: 'Days to MVP', 
      description: 'Average delivery',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full mb-6"
          >
            <CheckCircle className="text-blue-600" size={20} />
            <span className="text-sm font-medium text-gray-900">Proven Track Record</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Achievements & Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building powerful digital solutions that drive real results and create lasting impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Clean minimal card */}
                <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-900 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-gray-900 transition-colors duration-300">
                      <Icon className="text-gray-900 group-hover:text-white transition-colors duration-300" size={24} strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-1">
                    <h3 className="text-4xl font-bold text-gray-900">
                      {stat.value}
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-500">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional impact statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="text-left">
              <p className="text-sm text-gray-600 mb-1">Trusted by</p>
              <p className="text-2xl font-bold text-gray-900">Global Companies</p>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-left">
              <p className="text-sm text-gray-600 mb-1">Success Rate</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">98%+</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
