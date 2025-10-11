'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    slug: 'getting-started-with-bubble-io',
    title: 'Getting Started with Bubble.io: A Complete Guide for Beginners',
    excerpt: 'Learn how to build your first web application using Bubble.io, the leading no-code platform. This comprehensive guide covers everything from setup to deployment.',
    content: `
Bubble.io has revolutionized the way we build web applications. In this comprehensive guide, I'll walk you through everything you need to know to get started with this powerful no-code platform.

## What is Bubble.io?

Bubble is a visual programming platform that allows you to build fully functional web applications without writing code. It's perfect for entrepreneurs, startups, and developers who want to quickly validate ideas or build MVPs.

## Key Features

**Visual Development** - Bubble provides an intuitive drag-and-drop interface that makes building complex applications accessible to everyone.

**Database Management** - Built-in database with relationships, privacy rules, and real-time data synchronization.

**Responsive Design** - Create mobile-first applications that work seamlessly across all devices.

**API Integration** - Connect to any external service using Bubble's API Connector plugin.

**Custom Workflows** - Build complex business logic without writing a single line of code.

## Getting Started

First, create an account at bubble.io. Once you're in, you'll be greeted with the Bubble editor where you can start building your application immediately.

The learning curve is gentle, and the Bubble community is incredibly supportive. I recommend starting with their official tutorials before diving into your own project.

Happy bubbling! 🚀
    `,
    category: 'No-Code',
    author: 'Brian Mutuku',
    date: 'October 10, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=600&fit=crop',
    tags: ['Bubble.io', 'Tutorial', 'Beginners'],
  },
]

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[0] // In real app, find by slug
  
  const recentPosts = [
    { 
      slug: 'bubble-api-integrations', 
      title: 'Mastering API Integrations in Bubble.io', 
      readTime: '10 min read',
      date: 'October 5, 2025',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' 
    },
    { 
      slug: 'no-code-vs-traditional', 
      title: 'No-Code vs Traditional Development', 
      readTime: '12 min read',
      date: 'September 28, 2025',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop' 
    },
    { 
      slug: 'building-mvp-30-days', 
      title: 'How I Build MVPs in 30 Days', 
      readTime: '15 min read',
      date: 'September 15, 2025',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=300&fit=crop' 
    },
  ]

  const categories = ['No-Code', 'Development', 'Insights', 'Case Study', 'Mobile']

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Article Header */}
      <section className="pt-32 pb-12">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                By {post.author}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg flex items-center gap-1"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="pb-20">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <article className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed space-y-6">
                    {post.content.split('\n\n').map((paragraph, index) => {
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                            {paragraph.replace('## ', '')}
                          </h2>
                        )
                      }
                      if (paragraph.startsWith('**')) {
                        const parts = paragraph.split('**')
                        return (
                          <p key={index}>
                            <strong className="font-bold text-gray-900">{parts[1]}</strong>
                            {parts[2]}
                          </p>
                        )
                      }
                      return <p key={index}>{paragraph}</p>
                    })}
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Share this article</h3>
                    <button 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: post.title,
                            text: post.excerpt,
                            url: window.location.href,
                          })
                        } else {
                          navigator.clipboard.writeText(window.location.href)
                          alert('Link copied to clipboard!')
                        }
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <Share2 size={20} />
                      Share
                    </button>
                  </div>
                </div>
              </motion.div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
                <div className="space-y-6">
                  {recentPosts.map((p) => (
                    <Link 
                      key={p.slug} 
                      href={`/blog/${p.slug}`} 
                      className="block group"
                    >
                      <div className="flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image 
                            src={p.image} 
                            alt={p.title} 
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors mb-1">
                            {p.title}
                          </h4>
                          <p className="text-sm text-gray-500">{p.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link 
                      key={cat} 
                      href={`/blog?category=${cat}`} 
                      className="block px-4 py-3 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all duration-300"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-900 rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest insights on no-code development delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600" 
                  />
                  <button className="w-full px-4 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
