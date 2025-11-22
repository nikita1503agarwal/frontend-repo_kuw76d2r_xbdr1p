import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Tracking from './components/Tracking'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-cyan-50">
      {/* subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Tracking />
        <Gallery />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* floating orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-20 top-40 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-20 bottom-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
    </div>
  )
}

export default App
