import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ava L.",
    text: "Hydrix made staying hydrated effortless. The gentle glow reminder is genius and the app insights are beautiful.",
  },
  {
    name: "Noah P.",
    text: "I love the build quality. It looks like a device from the future and the battery lasts forever.",
  },
  {
    name: "Mia R.",
    text: "The temperature display is surprisingly useful. No more lukewarm sips!",
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl font-bold text-white sm:text-4xl">Loved by Early Adopters</motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-slate-900/60 p-6 shadow-[0_0_60px_rgba(0,255,255,0.08)]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
              <div className="flex items-center gap-1 text-cyan-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cyan-400/70 text-cyan-400/70" />
                ))}
              </div>
              <p className="mt-3 text-cyan-100/90">{t.text}</p>
              <p className="mt-4 text-sm font-semibold text-white">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
