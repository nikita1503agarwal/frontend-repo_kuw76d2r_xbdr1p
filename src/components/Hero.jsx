import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Neon backdrop gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.12),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-36 pb-20 sm:pt-40 sm:pb-28 lg:flex lg:items-center lg:gap-10">
        <div className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl"
          >
            The Smart Water Bottle from the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-cyan-100/90"
          >
            Hydrix tracks hydration in real-time, syncs with your phone, displays temperature, and glows when it’s time to sip.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
          >
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="group relative rounded-2xl px-6 py-3 text-sm font-semibold text-white">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90 transition group-hover:opacity-100" />
              <span className="absolute inset-0 rounded-2xl blur-xl bg-cyan-500/40 group-hover:bg-cyan-400/60" />
              <span className="relative z-10">Preorder Now</span>
            </motion.button>
            <motion.a href="#features" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="rounded-2xl border border-cyan-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur hover:border-cyan-300/60 hover:text-white">
              See Features
            </motion.a>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/60 px-4 py-2 text-xs text-cyan-200/80">
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              Real-time Hydration Tracking
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/60 px-4 py-2 text-xs text-cyan-200/80">
              10-day Battery
            </div>
          </div>
        </div>

        {/* 3D scene / mockup */}
        <div className="relative mx-auto mt-16 w-full max-w-3xl rounded-3xl border border-cyan-400/10 bg-slate-900/40 p-2 shadow-[0_0_80px_rgba(0,255,255,0.12)] backdrop-blur-lg lg:mt-0 lg:flex-auto">
          <div className="aspect-[16/10] overflow-hidden rounded-2xl">
            {/* Subtle animated gradient fallback */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-full w-full bg-gradient-to-b from-slate-800 to-slate-900"
            >
              <motion.div
                aria-hidden
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.4, 0.7, 0.4], y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative h-72 w-28 rounded-[2rem] border border-cyan-400/30 bg-gradient-to-b from-slate-700/60 to-slate-900/60 shadow-[inset_0_0_30px_rgba(255,255,255,0.06),0_30px_100px_rgba(0,255,255,0.12)]"
                >
                  <div className="absolute -top-2 left-1/2 h-10 w-16 -translate-x-1/2 rounded-b-2xl border border-cyan-400/30 bg-slate-800/80" />
                  <div className="absolute inset-x-2 top-8 h-10 rounded-xl bg-slate-900/80 shadow-inner" />
                  <motion.div
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.4, 0.9, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-x-3 bottom-6 h-28 rounded-xl bg-gradient-to-b from-cyan-500/30 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>
            {/* Optional: Spline scene, commented since external asset may not exist */}
            {/* <Spline scene="https://prod.spline.design/your-scene-url/scene.splinecode" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
