import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import WorkProcess from '@/components/WorkProcess'
import Testimonials from '@/components/Testimonials'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Full-page ribbon gradient background */}
      <div
        className="absolute inset-0 -z-20 w-full h-full"
        style={{
          backgroundImage: "url('/mesh-gradient.svg')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 -z-10 w-full h-full dot-pattern opacity-[0.35]" />

      <Header />
      <Hero />
      <Skills />
      <About />
      <WorkProcess />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
