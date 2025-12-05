'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { getBlogPost, getRelatedPosts, blogPosts } from '@/lib/blog-data'

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = getBlogPost(slug)
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [subscribeMessage, setSubscribeMessage] = useState('')

  // If post not found, show 404
  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  const relatedPosts = getRelatedPosts(slug, post.category, 3)

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

  const handleShare = () => {
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
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href="/blog" className="hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <ChevronRight size={16} />
              <span className="text-gray-900">{post.category}</span>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold text-sm">
                  BM
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-video rounded-2xl overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container-custom max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg prose-gray max-w-none"
          >
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              
              // Handle bold text paragraphs
              if (paragraph.startsWith('**') && paragraph.includes('**')) {
                const match = paragraph.match(/\*\*(.+?)\*\*(.*)/)
                if (match) {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      <strong className="font-semibold text-gray-900">{match[1]}</strong>
                      {match[2]}
                    </p>
                  )
                }
              }

              // Handle lists
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '))
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                )
              }

              // Handle numbered lists
              if (/^\d+\./.test(paragraph)) {
                const items = paragraph.split('\n').filter(line => /^\d+\./.test(line))
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
                )
              }

              // Regular paragraph
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                )
              }

              return null
            })}
          </motion.article>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Enjoyed this article?</h3>
                <p className="text-gray-600 text-sm">Share it with others who might find it useful.</p>
              </div>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <Share2 size={18} />
                Share Article
              </button>
            </div>
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-8 bg-gray-50 rounded-2xl"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Get More Insights</h3>
              <p className="text-gray-600 mb-6">
                Subscribe to receive the latest tutorials and articles directly in your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-4 focus:ring-gray-100"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {subscribeMessage && (
                <p className={`mt-3 text-sm ${subscribeStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {subscribeMessage}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <Link href={`/blog/${relatedPost.id}`} className="block">
                    <div className="relative h-40 overflow-hidden bg-gray-100">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-gray-900 group-hover:text-gray-600 transition-colors mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{relatedPost.readTime}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-12">
        <div className="container-custom text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to all articles
          </Link>
        </div>
      </section>
    </main>
  )
}
