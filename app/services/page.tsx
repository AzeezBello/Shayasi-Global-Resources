import type { Metadata } from "next"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Building2, Factory, TrendingUp } from "lucide-react"

import CtaBanner from "@/components/cta-banner"
import PageHero from "@/components/page-hero"
import { siteImages } from "@/lib/site-images"

const serviceAreas = [
  {
    title: "Oil & Gas",
    description:
      "The oil and gas industry remains a vital pillar of the Nigerian economy. Shayasi Global Resources participates in this sector through strategic partnerships and energy investment initiatives.",
    highlights: [
      "Petroleum trading and supply chain operations",
      "Energy infrastructure investments",
      "Strategic partnerships in upstream and downstream projects",
      "Support services for oil and gas operations",
    ],
    icon: Factory,
    image: siteImages.services.oil,
    alt: "Oil and gas transport and facility operations",
  },
  {
    title: "Investments",
    description:
      "Our investment division identifies and develops opportunities across various sectors with high growth potential.",
    highlights: [
      "Infrastructure development",
      "Agricultural projects",
      "Energy and natural resources",
      "Strategic joint ventures",
      "Emerging business sectors",
    ],
    icon: TrendingUp,
    image: siteImages.services.investment,
    alt: "Investment growth illustration",
  },
  {
    title: "Real Estate",
    description:
      "Real estate development plays a key role in urban expansion and economic growth. Shayasi Global Resources invests in and develops properties designed to meet modern residential and commercial needs.",
    highlights: [
      "Residential property development",
      "Commercial property investments",
      "Land acquisition and development",
      "Property management",
    ],
    icon: Building2,
    image: siteImages.services.realEstate,
    alt: "Modern real estate development property",
  },
] satisfies Array<{
  title: string
  description: string
  highlights: string[]
  icon: LucideIcon
  image: string
  alt: string
}>

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our services across Oil and Gas Nigeria, investment company Lagos initiatives, and real estate development Nigeria opportunities.",
}

export default function ServicesPage() {
  return (
    <main className="pb-8 md:pb-12">
      <PageHero
        eyebrow="Services"
        title="Our Services"
        description="Shayasi Global Resources operates across multiple sectors that contribute to economic development and long-term investment growth."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Coverage
            </p>
            <div className="mt-5 space-y-3">
              {serviceAreas.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.35rem] border border-border/70 bg-background/75 px-4 py-4"
                >
                  <p className="font-semibold tracking-tight text-foreground">{service.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{service.highlights[0]}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="section-shell page-space">
        <div className="grid gap-5">
          {serviceAreas.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="surface-card overflow-hidden p-0 fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/68 via-slate-950/8 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/14 p-3 text-white backdrop-blur-sm">
                    <Icon className="size-5" />
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Our focus areas include:
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {service.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="surface-card p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Investment approach
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              By leveraging industry knowledge and partnerships, we aim to build profitable and sustainable investment portfolios.
            </p>
          </div>

          <div className="surface-card p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Real estate objective
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Through strategic planning and innovative design, we aim to deliver projects that create long-term value.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Next step"
        title="Need more information about our service areas or potential collaboration?"
        description="Reach out to discuss energy, investments, real estate, or broader strategic opportunities."
      />
    </main>
  )
}
