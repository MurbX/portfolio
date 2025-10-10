import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Stats from '@/components/Stats'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Experience />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
