import { Menu, Droplets, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-cyan-400/10 bg-slate-900/50 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,255,0.08)]">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-2 rounded-xl bg-cyan-500/20 blur-xl" />
                <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 ring-1 ring-cyan-500/30">
                  <Droplets className="h-5 w-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">HYDRIX</span>
            </div>
            <div className="hidden items-center gap-8 text-sm text-cyan-100/80 sm:flex">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#tracking" className="hover:text-white transition-colors">Tracking</a>
              <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center gap-2">
              <motion.button whileTap={{ scale: 0.97 }} className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-slate-800/70 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur hover:border-cyan-300/60 hover:text-white">
                <ShoppingCart className="h-4 w-4" />
                Buy Now
              </motion.button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-800/60 text-cyan-100 sm:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
