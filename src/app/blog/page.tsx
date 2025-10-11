'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react'
import { motion } from 'framer-motion'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  author: string
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const posts: BlogPost[] = [
    {
      id: 'getting-started-bubble-io',
      title: 'Getting Started with Bubble.io: A Complete Guide for Beginners',
      excerpt: 'Learn how to build your first web application using Bubble.io, the leading no-code platform. This comprehensive guide covers everything from setup to deployment.',
      date: 'October 10, 2025',
      readTime: '8 min read',
      category: 'No-Code',
      tags: ['Bubble.io', 'Tutorial', 'Beginners'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      author: 'Brian Mutuku'
    },
    {
      id: 'bubble-api-integrations',
      title: 'Mastering API Integrations in Bubble.io',
      excerpt: 'Discover how to integrate external APIs into your Bubble.io applications. Learn best practices for authentication, data handling, and error management.',
      date: 'October 5, 2025',
      readTime: '10 min read',
      category: 'Development',
      tags: ['Bubble.io', 'APIs', 'Integration'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      author: 'Brian Mutuku'
    },
    {
      id: 'no-code-vs-traditional',
      title: 'No-Code vs Traditional Development: When to Use Each',
      excerpt: 'A detailed comparison of no-code platforms and traditional coding. Understand the pros, cons, and ideal use cases for each approach.',
      date: 'September 28, 2025',
      readTime: '12 min read',
      category: 'Insights',
      tags: ['No-Code', 'Development', 'Comparison'],
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
      author: 'Brian Mutuku'
    },
    {
      id: 'building-mvp-30-days',
      title: 'How I Build MVPs in 30 Days Using No-Code',
      excerpt: 'My proven process for taking an idea from concept to live product in just 30 days using no-code tools like Bubble.io and FlutterFlow.',
      date: 'September 15, 2025',
      readTime: '15 min read',
      category: 'Case Study',
      tags: ['MVP', 'No-Code', 'Process'],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop',
      author: 'Brian Mutuku'
    },
    {
      id: 'database-design-bubble',
      title: 'Database Design Best Practices in Bubble.io',
      excerpt: 'Learn how to structure your database in Bubble.io for optimal performance and scalability. Avoid common pitfalls and set up your data correctly from the start.',
      date: 'September 1, 2025',
      readTime: '14 min read',
      category: 'Development',
      tags: ['Bubble.io', 'Database', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
      author: 'Brian Mutuku'
    },
    {
      id: 'flutterflow-mobile-apps',
      title: 'Building Beautiful Mobile Apps with FlutterFlow',
      excerpt: 'A comprehensive guide to creating stunning mobile applications using FlutterFlow. From design to deployment on iOS and Android.',
      date: 'August 20, 2025',
      readTime: '11 min read',
      category: 'Mobile',
      tags: ['FlutterFlow', 'Mobile', 'Tutorial'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      author: 'Brian Mutuku'
    }
  ]

  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))]

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights, tutorials, and thoughts on no-code development, product design, and tech
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 transition-colors"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <section className="pb-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
              <Link 
                href={`/blog/${filteredPosts[0].id}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-4 w-fit">
                      {filteredPosts[0].category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                      {filteredPosts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{filteredPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-3 transition-all">
                      Read Full Article
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <>
              {filteredPosts.length > 1 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.slice(1).map((post, index) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300"
                      >
                        {/* Post Image */}
                        <Link href={`/blog/${post.id}`} className="block overflow-hidden">
                          <div className="relative h-48 bg-gray-200">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </Link>

                        {/* Post Content */}
                        <div className="p-6">
                          {/* Category */}
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                              {post.category}
                            </span>
                          </div>

                          {/* Title */}
                          <Link href={`/blog/${post.id}`}>
                            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                              {post.title}
                            </h2>
                          </Link>

                          {/* Excerpt */}
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={16} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded"
                              >
                                <Tag size={12} />
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Read More Link */}
                          <Link 
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all group"
                          >
                            Read More
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* Newsletter CTA */}
          {filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mt-16 p-12 bg-gray-900 text-white rounded-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights on no-code development, product design, and tech trends delivered straight to your inbox.
              </p>
              <div className="flex gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  )
}
