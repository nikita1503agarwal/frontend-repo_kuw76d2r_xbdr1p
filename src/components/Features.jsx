import { Cpu, Droplet, Bluetooth, Thermometer, BatteryFull, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const items = [
  {
    icon: Droplet,
    title: "Hydration Tracking",
    desc: "Automatic intake detection with smart reminders and daily goals.",
  },
  {
    icon: Bluetooth,
    title: "Bluetooth App",
    desc: "Syncs seamlessly with iOS and Android to visualize your progress.",
  },
  {
    icon: Thermometer,
    title: "Temperature Display",
    desc: "Live temperature readout so every sip is just right.",
  },
  {
    icon: Cpu,
    title: "Water-Level Sensor",
    desc: "Precision sensor monitors every drop with ultra-low latency.",
  },
  {
    icon: BatteryFull,
    title: "Long Battery Life",
    desc: "Up to 10 days on a single charge with USB‑C fast charging.",
  },
  {
    icon: ShieldCheck,
    title: "Health Benefits",
    desc: "Boost energy, focus, and wellness with science‑backed hydration.",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Engineered for Pure Performance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-center text-cyan-100/80"
        >
          Every detail designed to help you build a consistent hydration habit.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-slate-900/50 p-6 shadow-[0_0_60px_rgba(0,255,255,0.08)] backdrop-blur"
            >
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl"
              />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-slate-800/60 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-cyan-100/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
