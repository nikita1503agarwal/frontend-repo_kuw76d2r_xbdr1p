import { motion } from "framer-motion"

const tiers = [
  { name: "Hydrix Lite", price: 79, features: ["Smart reminders", "Basic tracking", "7‑day battery"], popular: false },
  { name: "Hydrix Pro", price: 129, features: ["Full tracking", "Temperature display", "Water‑level sensor", "10‑day battery"], popular: true },
  { name: "Hydrix Max", price: 169, features: ["All Pro features", "Carbon sleeve", "Wireless charging dock"], popular: false },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-100/80">Choose the Hydrix that fits your lifestyle.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <motion.div key={t.name} whileHover={{ y: -6 }} className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur transition-shadow ${t.popular ? 'border-cyan-400/40 bg-slate-900/70 shadow-[0_0_80px_rgba(0,255,255,0.2)]' : 'border-cyan-400/15 bg-slate-900/60 shadow-[0_0_60px_rgba(0,255,255,0.08)]'}`}>
              {t.popular && <div className="absolute right-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-white">Popular</div>}
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <div className="mt-2 text-3xl font-bold text-white">
                ${t.price}
                <span className="ml-1 text-sm font-normal text-cyan-100/70">USD</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-cyan-100/85">
                {t.features.map((f) => (
                  <li key={f} className="rounded-lg border border-cyan-400/15 bg-slate-800/60 px-3 py-2">{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:from-cyan-500/30 hover:to-blue-600/30">Preorder</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
