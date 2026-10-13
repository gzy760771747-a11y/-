import { FeatureCard } from './components/FeatureCard'
import { InteractiveButton } from './components/InteractiveButton'
import { Navbar } from './components/Navbar'

const features = [
  {
    number: '01',
    title: '专注体验',
    description: '清晰的内容层级与恰到好处的留白，让每一次浏览都轻松自然。',
    accent: 'violet' as const,
  },
  {
    number: '02',
    title: '响应式布局',
    description: '从手机到桌面，页面会自然调整布局，在不同屏幕上保持舒适。',
    accent: 'lime' as const,
  },
  {
    number: '03',
    title: '随时可成长',
    description: '组件化结构简单清楚，方便继续加入新页面、内容和交互。',
    accent: 'coral' as const,
  },
]

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden" aria-hidden="true">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-violet-300/25 blur-3xl" />
        <div className="absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full bg-lime-300/25 blur-3xl" />
        <div className="ambient-grid absolute inset-0 opacity-40" />
      </div>

      <Navbar />

      <main>
        <section
          id="home"
          className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-32 lg:pt-24"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-xs font-bold text-violet-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_0_4px_rgba(163,230,53,0.2)]" />
              为好奇心准备的数字空间
            </div>

            <h1 className="max-w-3xl text-5xl leading-[1.02] font-black tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl">
              把下一个想法，
              <span className="text-violet-600">变成看得见</span>
              的作品。
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              这是一个轻盈、现代的前端起点。从一个小小的互动开始，慢慢构建属于你的网页体验。
            </p>

            <div className="mt-9">
              <InteractiveButton />
            </div>

            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-slate-200/80 pt-7">
              <div>
                <dt className="text-xs font-bold tracking-widest text-slate-400 uppercase">速度</dt>
                <dd className="mt-1 text-lg font-black">即时响应</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-widest text-slate-400 uppercase">体验</dt>
                <dd className="mt-1 text-lg font-black">全端适配</dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-widest text-slate-400 uppercase">状态</dt>
                <dd className="mt-1 text-lg font-black text-violet-700">准备就绪</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-violet-200/50" aria-hidden="true" />
            <div className="relative rounded-[2rem] border border-white/80 bg-slate-950 p-5 shadow-2xl shadow-slate-900/20 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-white/60 uppercase">
                  Live canvas
                </span>
              </div>

              <div className="mt-6 rounded-3xl bg-white p-5 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">本周灵感</p>
                    <p className="mt-2 text-3xl font-black tracking-tight">12 个瞬间</p>
                  </div>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lime-300 text-xl" aria-hidden="true">
                    ✦
                  </div>
                </div>

                <div className="mt-8 flex h-28 items-end gap-2" aria-label="灵感活跃度示意图">
                  {[35, 52, 44, 72, 58, 86, 100].map((height, index) => (
                    <div key={height} className="flex h-full flex-1 items-end rounded-full bg-slate-100">
                      <div
                        className={`w-full rounded-full ${index === 6 ? 'bg-violet-600' : 'bg-slate-300'}`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between rounded-2xl bg-violet-50 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-violet-600 text-xs font-black text-white">N</span>
                    <div>
                      <p className="text-xs font-black text-slate-900">新的起点</p>
                      <p className="text-[11px] text-slate-500">刚刚创建</p>
                    </div>
                  </div>
                  <span className="text-violet-600" aria-hidden="true">↗</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="relative border-y border-slate-200/80 bg-white/60 py-24 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black tracking-[0.24em] text-violet-700 uppercase">简单，但不普通</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  为每一种屏幕，也为每一个新想法。
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-500">
                好的起点不需要复杂。清楚的结构、友好的细节，以及继续生长的空间，已经足够。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard key={feature.number} {...feature} />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 rounded-[2rem] bg-lime-300 px-7 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <p className="text-xs font-black tracking-[0.2em] text-lime-950/60 uppercase">Next step</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">你的下一页，从这里开始。</h2>
            </div>
            <a
              href="#home"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              回到顶部 <span aria-hidden="true">↑</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 NOVA. 从一个好奇的问题开始。</p>
          <p>React · TypeScript · Vite · Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
