import type { Metadata } from "next"
import { CheckCircle2 } from "lucide-react"

import CtaBanner from "@/components/cta-banner"
import PageHero from "@/components/page-hero"
import { companyMetrics } from "@/lib/seo"

const coreValues = [
  {
    title: "Integrity",
    description: "We conduct business with honesty and transparency.",
  },
  {
    title: "Innovation",
    description:
      "We continuously explore new ideas and technologies to improve our operations.",
  },
  {
    title: "Sustainability",
    description:
      "Our projects are designed to create long-term value for communities and partners.",
  },
  {
    title: "Excellence",
    description: "We strive for high standards in everything we do.",
  },
] as const

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shayasi Global Resources, a diversified Nigerian investment company in Lagos focused on Oil and Gas Nigeria, real estate development Nigeria, and strategic business ventures.",
}

export default function AboutPage() {
  return (
    <main className="pb-8 md:pb-12">
      <PageHero
        eyebrow="About Shayasi Global Resources"
        title="A diversified Nigerian company focused on value, growth, and long-term impact."
        description="Shayasi Global Resources is a diversified Nigerian company focused on delivering value through investments in Oil &amp; Gas, Real Estate, and strategic business ventures."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Snapshot
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {companyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.35rem] border border-border/70 bg-background/75 px-4 py-4"
                >
                  <p className="text-2xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="section-shell page-space">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <span className="eyebrow">Company profile</span>
            <h2 className="mt-5 section-title text-balance">
              Established to participate actively in sectors that shape economic growth and industrial development in Nigeria.
            </h2>
            <p className="mt-4 lead-copy">
              The company was established with a vision to participate actively in sectors that shape economic growth and industrial development in Nigeria. Through a strong management structure and a forward-looking investment philosophy, Shayasi Global Resources continues to explore opportunities that deliver sustainable returns and long-term impact.
            </p>
            <p className="mt-4 lead-copy">
              From energy projects to property development and agricultural investments, Shayasi Global Resources operates with a commitment to integrity, innovation, and excellence.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Our Mission
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                To develop and manage investments that promote sustainable growth, economic opportunity, and long-term value for stakeholders and communities.
              </p>
            </div>

            <div className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Our Vision
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                To become a leading diversified investment company recognized for delivering innovative solutions across energy, real estate, and agribusiness sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Our Core Values
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="rounded-[1.4rem] border border-border/70 bg-background/75 p-5 fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary" />
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {value.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Work with us"
        title="Interested in Shayasi Global Resources and its long-term investment approach?"
        description="Reach out to discuss partnerships, business opportunities, or sector-specific collaboration."
      />
    </main>
  )
}
