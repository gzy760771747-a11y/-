type FeatureCardProps = {
  number: string
  title: string
  description: string
  accent: 'violet' | 'lime' | 'coral'
}

const accentStyles = {
  violet: 'bg-violet-100 text-violet-700',
  lime: 'bg-lime-200 text-lime-900',
  coral: 'bg-orange-100 text-orange-700',
}

export function FeatureCard({ number, title, description, accent }: FeatureCardProps) {
  return (
    <article className="group rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/5 sm:p-8">
      <div
        className={`mb-10 grid h-11 w-11 place-items-center rounded-2xl text-xs font-black ${accentStyles[accent]}`}
      >
        {number}
      </div>
      <h3 className="text-xl font-black tracking-tight text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-8 h-px w-full bg-slate-100">
        <div className="h-px w-0 bg-slate-950 transition-all duration-300 group-hover:w-full" />
      </div>
    </article>
  )
}
