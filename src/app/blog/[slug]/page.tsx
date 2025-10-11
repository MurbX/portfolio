'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    slug: 'bubble-vs-traditional-code',
    title: 'Bubble.io vs Traditional Code: Which Should You Choose?',
    excerpt: 'An in-depth comparison of Bubble.io and traditional coding. Explore the advantages, limitations, and ideal use cases for each approach to help you make the right choice for your next project.',
    content: `
The debate between no-code platforms like Bubble.io and traditional coding is more relevant than ever. As a developer who works with both, I've seen firsthand how each approach has its place in modern software development. Let me share my insights on when to use each and why.

## What is Bubble.io?

Bubble is a visual programming platform that allows you to build fully functional web applications without writing code. It provides a drag-and-drop interface, built-in database, user authentication, and powerful workflow tools that let you create complex applications entirely through visual configuration.

## What is Traditional Coding?

Traditional coding involves writing applications using programming languages like JavaScript, Python, Ruby, or others. You have complete control over every aspect of your application, from the database structure to the user interface, but you're responsible for building everything from scratch or integrating various frameworks and libraries.

## Advantages of Bubble.io

**Speed of Development** - Build MVPs and full applications 10x faster than traditional coding. What might take weeks or months in code can often be done in days with Bubble.

**No Technical Debt** - Bubble handles all infrastructure, updates, and security patches automatically. You don't need to worry about server maintenance, dependency updates, or security vulnerabilities.

**Lower Cost** - No need to hire a full development team. A single Bubble developer or even a non-technical founder can build sophisticated applications.

**Built-in Features** - User authentication, database management, API connections, and payment processing are all built-in and ready to use.

**Rapid Iteration** - Make changes and see them live instantly. No build processes, no deployment pipelines - just click and publish.

**Responsive by Default** - Bubble's responsive engine makes it easy to create applications that work on all devices without writing separate mobile code.

## Disadvantages of Bubble.io

**Platform Lock-in** - Your application is tied to Bubble's platform. You can't easily migrate to another system or export your code.

**Performance Limitations** - For very high-traffic applications or complex calculations, Bubble may not perform as well as optimized custom code.

**Customization Constraints** - While Bubble is powerful, there are limits to what you can customize. Some specific features or interactions might be difficult or impossible to implement.

**Learning Curve** - Despite being "no-code," Bubble has its own logic and way of doing things that takes time to master.

**Pricing at Scale** - As your application grows, Bubble's pricing can become expensive compared to self-hosted solutions.

**Limited Control** - You're dependent on Bubble's roadmap for new features and can't directly access or modify the underlying code.

## Advantages of Traditional Code

**Complete Control** - You have 100% control over every aspect of your application. If you can imagine it, you can build it.

**Performance Optimization** - Optimize your code for maximum performance. Handle millions of users with proper architecture and scaling.

**No Platform Lock-in** - Your code is yours. You can host it anywhere, migrate between providers, or completely change your tech stack.

**Custom Solutions** - Build exactly what you need without constraints. Implement any feature, no matter how complex or unique.

**Integration Flexibility** - Integrate with any system, library, or service without limitations.

**Cost at Scale** - Once built, traditional applications can be cheaper to run at scale with self-hosting options.

## Disadvantages of Traditional Code

**Development Time** - Building from scratch takes significantly longer. Even simple features require time to code, test, and debug.

**Higher Costs** - Need to hire developers, DevOps engineers, and potentially a full team. Salaries and infrastructure costs add up quickly.

**Technical Complexity** - Managing servers, databases, security, updates, and infrastructure requires expertise and ongoing maintenance.

**Slower Iteration** - Changes require coding, testing, and deployment. The feedback loop is longer than with visual platforms.

**Security Responsibility** - You're responsible for all security measures. A single mistake can lead to vulnerabilities.

**Technical Debt** - Code can become outdated, dependencies need updates, and maintaining old code becomes challenging over time.

## When to Choose Bubble.io

Choose Bubble when you need to:
- Validate an idea quickly with an MVP
- Build internal tools or admin dashboards
- Create customer portals or booking systems
- Launch a SaaS product without a technical co-founder
- Build CRUD applications (Create, Read, Update, Delete)
- Get to market fast and iterate based on user feedback

Bubble is perfect for startups, solopreneurs, and businesses that need to move fast and test ideas without huge upfront investment.

## When to Choose Traditional Code

Choose traditional coding when you need:
- Maximum performance for high-traffic applications
- Complete customization and unique features
- Complex algorithms or data processing
- Full control over your tech stack
- To build something that will scale to millions of users
- Integration with specialized systems or hardware

Traditional code is ideal for established companies, complex enterprise applications, and products where performance and customization are critical.

## My Recommendation

The best approach? Use both strategically. Start with Bubble to validate your idea and get early traction. Once you've proven product-market fit and have revenue, you can decide whether to stick with Bubble (many successful companies do) or migrate critical parts to custom code.

I've helped dozens of startups build their MVPs in Bubble and later transition to code for specific features that needed more control, while keeping the rest in Bubble. This hybrid approach gives you speed when you need it and control when it matters.

The future of development isn't no-code vs. traditional code - it's knowing which tool to use for each problem. Master both, and you'll have an unstoppable advantage.
    `,
    category: 'Insights',
    author: 'Brian Mutuku',
    date: 'October 10, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop',
    tags: ['Bubble.io', 'Development', 'Comparison'],
  },
]

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[0]
  
  const recentPosts: { slug: string; title: string; readTime: string; date: string; image: string }[] = []

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
              {/* Recent Posts - Hidden when no posts */}
              {recentPosts.length > 0 && (
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
              )}

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
