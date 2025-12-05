'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, Search, Hash } from 'lucide-react'
import { motion } from 'framer-motion'
import { blogPosts } from '@/lib/blog-data'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [subscribeMessage, setSubscribeMessage] = useState('')

  const categories = ['All', 'Bubble.io', 'FlutterFlow', 'Xano', 'AI', 'Supabase']

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubscribeStatus('loading')
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await response.json()
      
      if (response.ok) {
        setSubscribeStatus('success')
        setSubscribeMessage(data.message)
        setEmail('')
      } else {
        setSubscribeStatus('error')
        setSubscribeMessage(data.error)
      }
    } catch {
      setSubscribeStatus('error')
      setSubscribeMessage('Something went wrong. Please try again.')
    }

    setTimeout(() => {
      setSubscribeStatus('idle')
      setSubscribeMessage('')
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Tutorials, guides, and thoughts on no-code development, AI integration, and modern tech stacks.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all shadow-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <Link href={`/blog/${post.id}`} className="block">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            {post.date.split(',')[0]}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md"
                          >
                            <Hash size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 p-10 lg:p-14 bg-gray-900 text-white rounded-3xl"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Get the latest tutorials and insights on no-code development delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/20"
                />
                <button 
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {subscribeMessage && (
                <p className={`mt-4 text-sm ${subscribeStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {subscribeMessage}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
