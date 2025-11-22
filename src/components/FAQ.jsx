const faqs = [
  { q: "How does Hydrix detect my water intake?", a: "Built‑in sensors measure changes in water level and flow to log each sip automatically." },
  { q: "Is the bottle dishwasher safe?", a: "The stainless body is. The smart lid should be hand‑washed." },
  { q: "How long does the battery last?", a: "Up to 10 days depending on usage and notification settings." },
  { q: "Do I need a subscription?", a: "No. The app and core tracking features are included." },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-10 divide-y divide-cyan-400/10 overflow-hidden rounded-2xl border border-cyan-400/15 bg-slate-900/60">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="cursor-pointer list-none px-6 py-5 text-white outline-none transition hover:bg-white/5">
                <div className="flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="ml-6 h-6 w-6 rounded-full border border-cyan-400/20 text-cyan-200/80 group-open:rotate-45">+</span>
                </div>
              </summary>
              <div className="px-6 pb-6 text-cyan-100/85">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
