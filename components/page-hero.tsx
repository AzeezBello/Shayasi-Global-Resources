import type { ReactNode } from "react"

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  aside?: ReactNode
}

export default function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: PageHeroProps) {
  return (
    <section className="section-shell pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(212,177,103,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.94))] px-6 py-10 shadow-[0_28px_90px_-44px_rgba(15,23,42,0.45)] md:px-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="fade-in-up">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-6 section-title text-balance text-[clamp(2.8rem,6vw,5.3rem)] text-foreground">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl lead-copy">{description}</p>
          </div>

          {aside ? (
            <div className="surface-card p-6 md:p-7 fade-in-up" style={{ animationDelay: "120ms" }}>
              {aside}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
