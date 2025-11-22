export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Ultra‑realistic Gallery</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-100/80">
          Premium mockups, close‑ups, and lifestyle scenes showcasing Hydrix.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-3 shadow-[0_20px_70px_rgba(0,255,255,0.08)]">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-[radial-gradient(circle_at_60%_40%,rgba(34,211,238,0.35),rgba(2,6,23,1))]">
                <div className="absolute inset-0">
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-2xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-64 w-24 rounded-[2rem] border border-cyan-400/30 bg-slate-900/50 shadow-[inset_0_0_30px_rgba(255,255,255,0.06)]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
