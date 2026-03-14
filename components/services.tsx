import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { ArrowRight, Building2, Factory, TrendingUp } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Oil & Gas",
    description:
      "We participate in the oil and gas value chain through strategic partnerships, supply chain services, and energy investment opportunities.",
    icon: Factory,
    points: ["Strategic partnerships", "Supply chain services", "Energy investment opportunities"],
  },
  {
    title: "Investments",
    description:
      "Our investment division focuses on identifying high-potential ventures across infrastructure, agriculture, and emerging industries.",
    icon: TrendingUp,
    points: ["Infrastructure", "Agriculture", "Emerging industries"],
  },
  {
    title: "Real Estate",
    description:
      "We develop and invest in residential, commercial, and mixed-use real estate projects that support urban growth and economic development.",
    icon: Building2,
    points: ["Residential", "Commercial", "Mixed-use"],
  },
] satisfies Array<{
  title: string
  description: string
  icon: LucideIcon
  points: string[]
}>

export default function ServicesGrid() {
  return (
    <section className="section-shell page-space">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow">Our core business areas</span>
          <h2 className="mt-5 section-title text-balance">
            Diversified sectors with a shared focus on growth, value, and sustainability.
          </h2>
          <p className="mt-4 lead-copy">
            Shayasi Global Resources operates across energy, investments, real estate, and agriculture with a long-term vision for economic development in Nigeria.
          </p>
        </div>

        <Button asChild variant="outline" size="lg" className="self-start md:self-auto">
          <Link href="/services">
            Explore Our Services
            <ArrowRight />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <Card
              key={service.title}
              className="fade-in-up border-white/70 bg-white/78"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="px-6 pt-6">
                <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                  <Icon className="size-5" />
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
