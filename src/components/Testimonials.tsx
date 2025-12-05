'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

export default function Testimonials() {
  const [pausedRow, setPausedRow] = useState<number | null>(null)

  const testimonialsRow1: Testimonial[] = [
    {
      id: 1,
      name: 'David Chen',
      role: 'Chief Technology Officer',
      content: "Brian transformed our entire workflow with a custom Bubble.io application. What impressed me most was his ability to understand our complex requirements and translate them into an intuitive interface. The app he built handles our inventory, client management, and reporting seamlessly. Highly recommend working with him.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Amina Osei',
      role: 'Startup Founder',
      content: "I've worked with many developers, but Brian stands out for his communication and problem-solving skills. He didn't just build what I asked for – he suggested improvements I hadn't even considered. Our marketing platform now runs 3x faster thanks to his optimizations.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Torres',
      role: 'Product Manager',
      content: "Brian delivered our financial dashboard ahead of schedule and under budget. His expertise in integrating APIs and handling complex data flows is exceptional. The real-time analytics he implemented have become essential to our daily operations. True professional.",
      rating: 5,
    },
    {
      id: 4,
      name: 'Wanjiku Mwangi',
      role: 'Healthcare Administrator',
      content: "We needed a compliant patient management system built fast. Brian not only delivered on time but also ensured every security requirement was met. His attention to detail and understanding of healthcare workflows made all the difference.",
      rating: 5,
    },
    {
      id: 5,
      name: 'James Wright',
      role: 'Operations Director',
      content: "Brian rebuilt our legacy system into a modern no-code solution that our team actually enjoys using. Training time for new employees dropped from 2 weeks to 2 days. The ROI on this project has been incredible. Can't recommend him enough.",
      rating: 5,
    },
    {
      id: 6,
      name: 'Fatima Al-Hassan',
      role: 'E-commerce Entrepreneur',
      content: "As a non-technical founder, I was nervous about building my MVP. Brian made the entire process stress-free. He explained everything clearly, met every deadline, and the final product exceeded my expectations. Already planning our next project together.",
      rating: 5,
    },
  ]

  const testimonialsRow2: Testimonial[] = [
    {
      id: 7,
      name: 'Kipchoge Mutai',
      role: 'Digital Agency Director',
      content: "We've partnered with Brian on multiple client projects. His technical skills are matched only by his reliability. He handles complex integrations with Airtable, APIs, and automation workflows effortlessly. Our clients consistently praise the quality of his work.",
      rating: 5,
    },
    {
      id: 8,
      name: 'Sophie Laurent',
      role: 'Retail Business Owner',
      content: "Brian built our entire order management and fulfillment system from scratch. What used to take hours of manual work now happens automatically. Sales are up 40% because we can finally focus on growing the business instead of managing spreadsheets.",
      rating: 5,
    },
    {
      id: 9,
      name: "Kevin O'Brien",
      role: 'Senior Developer',
      content: "I was skeptical about no-code solutions until I saw what Brian could build. The CRM system he developed rivals enterprise software costing 10x more. His code is clean, well-documented, and easy to maintain. A rare find in this industry.",
      rating: 5,
    },
    {
      id: 10,
      name: 'Njeri Kamau',
      role: 'Marketing Director',
      content: "Brian created an influencer tracking platform that changed how we run campaigns. The dashboard he designed is beautiful and functional. Real-time analytics, automated reporting, seamless integrations – everything we needed in one place.",
      rating: 5,
    },
    {
      id: 11,
      name: 'Thomas Anderson',
      role: 'Logistics Manager',
      content: "Our logistics platform needed a complete overhaul. Brian delivered a solution that reduced processing time by 60% and virtually eliminated data entry errors. His understanding of business processes sets him apart from other developers I've worked with.",
      rating: 5,
    },
    {
      id: 12,
      name: 'Achieng Otieno',
      role: 'Creative Agency Owner',
      content: "Brian is our go-to developer for all Bubble.io projects. He's built everything from simple landing pages to complex multi-tenant SaaS applications for our clients. Fast, reliable, and always delivers quality. Worth every penny.",
      rating: 5,
    },
  ]

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="flex-shrink-0 w-[280px] md:w-[300px] bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Header with Avatar and Name */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold text-sm">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {testimonial.content}
      </p>
    </div>
  )

  return (
    <section id="testimonials" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
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
      </div>

      {/* Scrolling Testimonials */}
      <div className="space-y-6">
        {/* Row 1 - Left to Right */}
        <div 
          className="relative"
          onMouseEnter={() => setPausedRow(1)}
          onMouseLeave={() => setPausedRow(null)}
        >
          <div className="flex gap-6 animate-scroll-left" style={{ animationPlayState: pausedRow === 1 ? 'paused' : 'running' }}>
            {/* Duplicate for infinite scroll */}
            {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
              <TestimonialCard key={`row1-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div 
          className="relative"
          onMouseEnter={() => setPausedRow(2)}
          onMouseLeave={() => setPausedRow(null)}
        >
          <div className="flex gap-6 animate-scroll-right" style={{ animationPlayState: pausedRow === 2 ? 'paused' : 'running' }}>
            {/* Duplicate for infinite scroll */}
            {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
              <TestimonialCard key={`row2-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
