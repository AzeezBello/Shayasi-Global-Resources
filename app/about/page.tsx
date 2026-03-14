import type { Metadata } from "next"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Building2, Factory, Handshake, Sprout, TrendingUp } from "lucide-react"

import CtaBanner from "@/components/cta-banner"
import PageHero from "@/components/page-hero"
import { siteImages } from "@/lib/site-images"

const businessAreas = [
  {
    title: "Real Estate",
    summary: "Property services, leasing, management, and strategic asset growth.",
    description:
      "We make property simple, profitable, and stress free. From helping clients buy, sell, lease, and manage residential or commercial properties, to making smart strategic investments, we ensure every project balances practical use with strong financial returns.",
    icon: Building2,
  },
  {
    title: "Investment",
    summary: "Carefully selected opportunities built for sustainable long-term returns.",
    description:
      "Our investments are carefully chosen to generate sustainable growth. Beyond real estate, we focus on agriculture and oil and gas ventures that offer consistent results while driving long-term value.",
    icon: TrendingUp,
  },
  {
    title: "Agriculture",
    summary: "High-quality produce, stronger supply chains, and wider market access.",
    description:
      "Agriculture is at the heart of what we do. We cultivate and trade a variety of high-quality agricultural products, connecting Nigerian farmers and producers to national and international markets.",
    icon: Sprout,
  },
  {
    title: "Oil and Gas",
    summary: "Reliable petroleum distribution and efficient fuel-station operations.",
    description:
      "We distribute refined petroleum products such as petrol, diesel, and gas reliably across Nigeria. From managing fuel stations to supplying businesses, retailers, and government agencies, we make energy accessible, efficient, and dependable.",
    icon: Factory,
  },
] satisfies Array<{
  title: string
  summary: string
  description: string
  icon: LucideIcon
}>

const approachPillars = [
  "Strategic execution on every project",
  "Deep market insight across our sectors",
  "Strong partnerships and professional management",
  "Transparency, excellence, and long-term value creation",
] as const

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shayasi Global Resources Limited, a diversified Nigerian company delivering real estate, investment, agriculture, and oil and gas solutions with professionalism and long-term value.",
}

export default function AboutPage() {
  return (
    <main className="pb-8 md:pb-12">
      <PageHero
        eyebrow="About Us"
        title="Shayasi Global Resources Limited"
        description="Incorporated under the Companies and Allied Matters Act 1990, Nigeria, Shayasi Global Resources Limited is a dynamic, diversified company delivering real solutions across real estate, investment, agriculture, and oil and gas."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Our Business Areas
            </p>
            <div className="mt-5 space-y-3">
              {businessAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[1.35rem] border border-border/70 bg-background/75 px-4 py-4"
                >
                  <p className="font-semibold tracking-tight text-foreground">{area.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{area.summary}</p>
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
              Real solutions, smart strategy, and hands-on expertise across key sectors in Nigeria.
            </h2>
            <p className="mt-4 lead-copy">
              Shayasi Global Resources Limited is a dynamic, diversified company in Nigeria, delivering real solutions across real estate, investment, agriculture, and oil and gas. We combine hands-on expertise, smart strategies, and professional management to create real value for our clients, partners, and the communities we serve.
            </p>
            <p className="mt-4 lead-copy">
              Every area of the business is built around practical outcomes, dependable service, and opportunities that support growth for both our stakeholders and the wider economy.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/70 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.38)]">
                <Image
                  src={siteImages.about.investment}
                  alt="Strategic industrial development and operations"
                  fill
                  sizes="(min-width: 1024px) 16vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/70 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.38)]">
                <Image
                  src={siteImages.about.realEstate}
                  alt="Modern real estate development project"
                  fill
                  sizes="(min-width: 1024px) 16vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Incorporated
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                Under the Companies and Allied Matters Act 1990, Nigeria.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                This foundation reflects the structured, professional approach that guides how we operate across real estate, investments, agriculture, and oil and gas.
              </p>
            </div>

            <div className="surface-card p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Our Focus
              </p>
              <p className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                Creating value through disciplined execution, reliable partnerships, and market-led opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="surface-card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Our Business Areas
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {businessAreas.map((area, index) => {
              const Icon = area.icon

              return (
                <div
                  key={area.title}
                  className="rounded-[1.4rem] border border-border/70 bg-background/75 p-5 fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="dark-panel p-8 md:p-10">
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="max-w-2xl">
              <span className="eyebrow border-white/15 bg-white/8 text-white/70">Our Approach</span>
              <h2 className="mt-5 section-title text-white">
                We believe in doing things right, not just doing things.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/74">
                Every project we take on is approached strategically, backed by deep market insight and strong partnerships. Professionalism, transparency, and excellence are not just words; they guide everything we do.
              </p>
              <p className="mt-4 text-base leading-7 text-white/74">
                At Shayasi Global Resources Limited, we deliver value that lasts while creating a positive impact for the communities around us.
              </p>
            </div>

            <div className="grid gap-3">
              {approachPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-[1.35rem] border border-white/12 bg-white/8 px-4 py-4 text-sm text-white/82"
                >
                  {pillar}
                </div>
              ))}

              <div className="rounded-[1.35rem] border border-white/12 bg-white/8 px-4 py-5">
                <div className="inline-flex rounded-full bg-white/10 p-3 text-white">
                  <Handshake className="size-5" />
                </div>
                <p className="mt-4 text-sm leading-7 text-white/74">
                  We work to create lasting value for clients, partners, and the communities we serve through practical solutions and responsible execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Work with us"
        title="Interested in working with Shayasi Global Resources Limited across its business areas?"
        description="Reach out to discuss partnerships, projects, investments, or sector-specific collaboration."
      />
    </main>
  )
}
