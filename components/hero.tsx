import Link from "next/link"
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { companyMetrics, siteConfig } from "@/lib/seo"

export default function Hero() {
  return (
    <section className="section-shell pt-8 md:pt-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,rgba(212,177,103,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(33,94,88,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.92))] px-6 py-10 shadow-[0_28px_90px_-44px_rgba(15,23,42,0.45)] md:px-10 md:py-14">
        <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.85fr] lg:items-end">
          <div className="relative z-10 fade-in-up">
            <span className="eyebrow">
              <Sparkles className="size-3.5" />
              Strategic growth from Lagos, Nigeria
            </span>

            <h1 className="mt-6 display-title max-w-5xl text-balance text-foreground">
              Powering Energy,
              <span className="block">
                Investments &amp;
                <span className="italic text-primary"> Sustainable Development</span>
              </span>
            </h1>

            <p className="mt-6 max-w-3xl lead-copy">
              Shayasi Global Resources is a diversified Nigerian company specializing in Oil &amp; Gas, strategic investments, and real estate development. Through innovation, industry partnerships, and long-term vision, we deliver projects that drive economic growth and sustainable development across Nigeria.
            </p>

            <div className="mt-6 max-w-2xl rounded-[1.5rem] border border-primary/12 bg-primary/6 px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Our mission is simple
              </p>
              <p className="mt-2 text-base leading-7 text-foreground/85">
                To build value-driven ventures that support industries, communities, and future generations.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {companyMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="stat-card fade-in-up"
                  style={{ animationDelay: `${120 + index * 90}ms` }}
                >
                  <p className="text-2xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 grid gap-4">
            <div className="surface-card p-6 md:p-7 fade-in-up" style={{ animationDelay: "220ms" }}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Why Shayasi
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    Innovation, partnerships, and long-term sector vision.
                  </p>
                </div>

                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <ShieldCheck className="size-5" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Oil & Gas participation",
                  "Strategic investments",
                  "Real estate development",
                  "Agricultural expansion through Shayasi Farms",
                ].map((sector) => (
                  <div
                    key={sector}
                    className="rounded-2xl border border-border/70 bg-white/70 px-4 py-3 text-sm text-foreground"
                  >
                    {sector}
                  </div>
                ))}
              </div>
            </div>

            <div className="dark-panel p-6 md:p-7 fade-in-up" style={{ animationDelay: "320ms" }}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                Head office
              </p>

              <div className="mt-4 flex items-start gap-3 text-white/78">
                <MapPin className="mt-1 size-4 shrink-0" />
                <div className="space-y-1">
                  {siteConfig.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/68">
                Operating from our head office in Lagos, Shayasi Global Resources works with industry partners and stakeholders to develop projects that create value, promote economic growth, and support national development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
