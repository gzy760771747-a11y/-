import { useState } from 'react'

const messages = [
  '灵感已就位，今天适合迈出第一步。',
  '很好！一个小动作，也能让想法向前。',
  '状态满格，继续保持这份创造力。',
]

export function InteractiveButton() {
  const [clickCount, setClickCount] = useState(0)

  const activateIdea = () => {
    setClickCount((current) => current + 1)
  }

  const message =
    clickCount === 0 ? '点击按钮，看看页面如何回应你。' : messages[(clickCount - 1) % messages.length]

  return (
    <div id="start" className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={activateIdea}
        className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-violet-600 px-6 py-3 text-sm font-black text-white shadow-xl shadow-violet-600/20 transition hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-violet-600"
      >
        点亮今天的灵感
        <span
          aria-hidden="true"
          className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition group-hover:translate-x-1"
        >
          →
        </span>
      </button>
      <p aria-live="polite" className="max-w-xs text-sm leading-6 text-slate-500">
        {message}
        {clickCount > 0 && (
          <span className="ml-2 font-bold text-violet-700">已互动 {clickCount} 次</span>
        )}
      </p>
    </div>
  )
}
