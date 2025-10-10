'use client'

import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Adir Cohen',
      role: 'Founder & CEO',
      company: 'Deploy',
      content: 'Brian is an exceptional developer who consistently delivers outstanding results. His expertise in Bubble.io and ability to implement complex integrations helped us deliver scalable applications to our clients. He writes clean, efficient code and collaborates exceptionally well with cross-functional teams. A true asset to any development team.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Wanjiru Kamau',
      role: 'Product Owner',
      company: 'Productive',
      content: 'Working with Brian has been transformative for our development process. His technical expertise in WordPress and custom Elementor plugins helped us extend functionality for clients in ways we never thought possible. Projects were always delivered on time with excellent quality and attention to detail.',
      rating: 5,
    },
    {
      id: 3,
      name: 'James Omondi',
      role: 'Product Owner',
      company: 'FFili',
      content: 'Brian built our entire influencer marketing platform from the ground up. His smart algorithm implementation for product-influencer matching and the robust content management system he created have been game-changers. True no-code expert who delivers enterprise-grade solutions.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Don't just take my word for it - hear what clients have to say about working together.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 hover:shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={48} className="text-gray-900" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-gray-100">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
