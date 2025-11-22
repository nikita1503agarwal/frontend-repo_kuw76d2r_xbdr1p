import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/15 bg-slate-900/60 p-10 shadow-[0_0_100px_rgba(0,255,255,0.12)] backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Talk to our team</h2>
              <p className="mt-3 text-cyan-100/80">Have questions about Hydrix or need help with an order? Send us a message and we’ll get back within 24 hours.</p>
              <div className="mt-8 space-y-3 text-sm text-cyan-100/80">
                <p>Support: support@hydrix.com</p>
                <p>Press: press@hydrix.com</p>
                <p>Partnerships: partners@hydrix.com</p>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-cyan-100">Name</label>
                <input className="w-full rounded-xl border border-cyan-400/20 bg-slate-800/60 px-4 py-3 text-white placeholder-cyan-100/50 outline-none transition focus:border-cyan-300/60" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-cyan-100">Email</label>
                <input type="email" className="w-full rounded-xl border border-cyan-400/20 bg-slate-800/60 px-4 py-3 text-white placeholder-cyan-100/50 outline-none transition focus:border-cyan-300/60" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-cyan-100">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-cyan-400/20 bg-slate-800/60 px-4 py-3 text-white placeholder-cyan-100/50 outline-none transition focus:border-cyan-300/60" placeholder="Tell us how we can help" />
              </div>
              <motion.button whileTap={{ scale: 0.98 }} className="group relative w-full rounded-2xl px-6 py-3 text-sm font-semibold text-white">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-90 transition group-hover:opacity-100" />
                <span className="absolute inset-0 rounded-2xl blur-xl bg-cyan-500/40 group-hover:bg-cyan-400/60" />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
