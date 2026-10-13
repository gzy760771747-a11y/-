import { useState } from 'react'
import brandMark from '../assets/brand-mark.svg'

const navigation = [
  { label: '首页', href: '#home' },
  { label: '亮点', href: '#features' },
  { label: '关于', href: '#about' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-50">
      <nav
        aria-label="主导航"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"
      >
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <img src={brandMark} alt="" className="h-9 w-9" />
          <span className="text-sm font-black tracking-[0.2em] text-slate-950">NOVA</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#start"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-violet-700"
          >
            开始探索
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-950 shadow-sm backdrop-blur md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="sr-only">菜单</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 w-full bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`h-0.5 w-full bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 w-full bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-5 top-20 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl shadow-slate-950/10 backdrop-blur md:hidden"
        >
          <div className="flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
