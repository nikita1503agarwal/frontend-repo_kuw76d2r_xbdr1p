import { motion } from "framer-motion"
import { Droplet, BellRing, Activity } from "lucide-react"

export default function Tracking() {
  return (
    <section id="tracking" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Stay perfectly hydrated, effortlessly</h2>
            <p className="mt-4 text-cyan-100/85">Hydrix detects each sip automatically and updates your daily goal in real time. Gentle glow reminders nudge you to drink before dehydration kicks in.</p>
            <div className="mt-8 space-y-4">
              <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-slate-800/60 text-cyan-300">
                  <Droplet className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Auto‑intake detection</p>
                  <p className="text-sm text-cyan-100/80">No buttons. No logging. Hydrix senses and records every sip precisely.</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-slate-800/60 text-cyan-300">
                  <BellRing className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Smart reminders</p>
                  <p className="text-sm text-cyan-100/80">Adaptive notifications based on your activity, weather, and habits.</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-slate-800/60 text-cyan-300">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Daily goals that evolve</p>
                  <p className="text-sm text-cyan-100/80">Personalized hydration targets that adapt as your day unfolds.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/15 bg-slate-900/60 p-6 shadow-[0_0_80px_rgba(0,255,255,0.12)]">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90">
                {/* Mock app card */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div initial={{ rotate: -2 }} animate={{ rotate: [ -2, 2, -2 ] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="w-72 rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-4 shadow-[0_20px_60px_rgba(0,255,255,0.12)]">
                    <div className="mb-3 h-6 w-24 rounded-full bg-cyan-500/20" />
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-800/60">
                      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/30 blur-2xl" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: [100, 0, 100] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="h-24 w-24 rounded-full border border-cyan-400/40 text-center">
                          <div className="mt-8 text-3xl font-bold text-white">78%</div>
                          <div className="text-xs text-cyan-100/80">Today</div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-cyan-100/80">
                      <div className="rounded-lg border border-cyan-400/20 bg-slate-800/60 p-2">Morning</div>
                      <div className="rounded-lg border border-cyan-400/20 bg-slate-800/60 p-2">Afternoon</div>
                      <div className="rounded-lg border border-cyan-400/20 bg-slate-800/60 p-2">Evening</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
