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
      "Shayasi Global Resources Limited operates in the downstream oil and gas sector, focusing on the supply and distribution of refined petroleum products such as petrol, diesel, and gas across Nigeria.",
    highlights: [
      "Supply and distribution of petrol, diesel, and gas",
      "Service to businesses, fuel stations, and government parastatals",
      "Partnerships with reputable oil depots and trusted suppliers",
      "Fuel station management and day-to-day operations",
    ],
    focusLabel: "Our downstream activities include:",
    detailParagraphs: [
      "We serve a wide range of clients, including businesses, fuel stations, and government parastatals, working closely with reputable oil depots and trusted suppliers to ensure a consistent and reliable supply.",
      "In addition to distribution, we manage and operate fuel stations, overseeing day-to-day operations to maintain efficiency and high-quality service for all customers.",
      "With a focus on professionalism, operational excellence, and strong partnerships, Shayasi Global Resources Limited is committed to delivering dependable petroleum solutions that create value for our clients and support the energy needs of communities and organizations nationwide.",
    ],
    icon: Factory,
    image: siteImages.servicesPage.oil,
    alt: "Oil and gas transport and facility operations",
  },
  {
    title: "Investments",
    description:
      "Shayasi Global Resources Limited offers strategic investment opportunities across real estate, agriculture, and the oil and gas sectors, helping investors grow their wealth through carefully selected projects with sustainable long-term returns.",
    highlights: [
      "Real estate, agriculture, and oil and gas investment opportunities",
      "Residential, commercial, and mixed-use property projects",
      "Productive agricultural projects with long-term return potential",
      "Downstream oil and gas operations including product distribution and fuel stations",
      "Tailored opportunities aligned with investor goals",
    ],
    focusLabel: "Our investment areas include:",
    detailParagraphs: [
      "In real estate, we focus on lands and properties with strong potential for value appreciation. This includes residential, commercial, and mixed-use developments where investors can see both practical and financial benefits.",
      "In agriculture, we identify projects that are productive and profitable, contributing to food security while generating consistent returns. In the oil and gas sector, our investments focus on downstream operations such as the distribution of petroleum products and management of fuel stations, offering dependable and measurable returns.",
      "We take a hands-on approach, working closely with our investors to understand their goals and tailor opportunities that fit their needs. Our team monitors investments carefully, ensuring that each project is managed effectively to maximize performance and minimize risk. With a deep understanding of the markets we operate in and a commitment to transparency, professionalism, and practical solutions, Shayasi Global Resources Limited helps investors turn opportunities into lasting value.",
    ],
    icon: TrendingUp,
    image: siteImages.servicesPage.investment,
    alt: "Agricultural and infrastructure investment opportunity",
  },
  {
    title: "Real Estate",
    description:
      "Shayasi Global Resources Limited is a real estate company based in Nigeria, committed to providing reliable and professional property services across sales, leasing, rentals, management, and long-term investment.",
    highlights: [
      "Buying and selling of lands and buildings",
      "Leasing and rental of residential and commercial properties",
      "Property management services",
      "Property investment for long-term capital appreciation",
    ],
    focusLabel: "Our real estate activities include:",
    detailParagraphs: [
      "In addition to our real estate services, we also invest in properties, including land and buildings, with the aim of achieving long-term capital appreciation. By carefully identifying promising opportunities in the property market, we seek to create lasting value and support sustainable real estate investments.",
      "We understand that property decisions are important, whether you are purchasing land, acquiring a building, renting a property, or investing for the future. For this reason, we approach every transaction with professionalism, transparency, and careful attention to our clients' needs.",
      "Through professionalism, transparency, and a strong understanding of the property market, Shayasi Global Resources Limited continues to provide practical solutions for property ownership, management, and investment.",
    ],
    icon: Building2,
    image: siteImages.servicesPage.realEstate,
    alt: "Modern real estate development property",
  },
] satisfies Array<{
  title: string
  description: string
  highlights: string[]
  focusLabel?: string
  detailParagraphs?: string[]
  icon: LucideIcon
  image: string
  alt: string
}>

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our services across Oil and Gas Nigeria, investment company Lagos initiatives, and real estate development Nigeria opportunities including strategic sector investments, downstream petroleum supply, land sales, rentals, management, and property investment.",
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
                    {service.focusLabel ?? "Our focus areas include:"}
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

                  {service.detailParagraphs ? (
                    <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                      {service.detailParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
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
              We work closely with investors to match opportunities to their goals, monitor performance carefully, and build transparent portfolios designed for sustainable long-term returns.
            </p>
          </div>

          <div className="surface-card p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Real estate objective
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              We combine market understanding, transparency, and disciplined property selection to support ownership, management, and long-term capital appreciation.
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
