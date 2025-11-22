export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-cyan-400/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-10 text-cyan-100/70">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Hydrix. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
