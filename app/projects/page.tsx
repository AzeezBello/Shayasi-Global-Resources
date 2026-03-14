import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import { Building2, Factory, Leaf, ShieldCheck, TrendingUp, Users } from "lucide-react"

import CtaBanner from "@/components/cta-banner"
import PageHero from "@/components/page-hero"

const projectThemes = [
  {
    title: "Energy supply chain participation",
    description:
      "Opportunity areas connected to the oil and gas value chain, with emphasis on partnership fit and operational practicality.",
    icon: Factory,
  },
  {
    title: "Residential and commercial real estate",
    description:
      "Land and development themes shaped around utility, location logic, and durable asset positioning.",
    icon: Building2,
  },
  {
    title: "Agriculture and trading",
    description:
      "Agribusiness opportunities that connect production, supply, and market participation through Shayasi Farms.",
    icon: Leaf,
  },
  {
    title: "Strategic investment partnerships",
    description:
      "Long-view collaborations across sectors where capital, execution discipline, and timing align.",
    icon: TrendingUp,
  },
] satisfies Array<{
  title: string
  description: string
  icon: LucideIcon
}>

const evaluationCriteria = [
  {
    title: "Commercial clarity",
    description: "The opportunity should be understandable, practical, and grounded in real demand.",
    icon: ShieldCheck,
  },
  {
    title: "Partnership alignment",
    description: "Execution fit matters, especially where sector complexity or local context is significant.",
    icon: Users,
  },
  {
    title: "Long-term value",
    description: "Priority is given to themes that can remain relevant and productive over time.",
    icon: TrendingUp,
  },
  {
    title: "Operational relevance",
    description: "Every initiative is viewed through what it takes to deliver it responsibly and steadily.",
    icon: Factory,
  },
] satisfies Array<{
  title: string
  description: string
  icon: LucideIcon
}>

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the strategic project themes and opportunity areas aligned with Shayasi Global Resources.",
}

export default function ProjectsPage() {
  return (
    <main className="pb-8 md:pb-12">
      <PageHero
        eyebrow="Projects"
        title="Representative themes that reflect the company's strategic direction."
        description="This page outlines the kinds of opportunities the business is positioned to evaluate and develop across its core sectors."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Positioning note
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              The themes below describe the kinds of initiatives aligned with the company&apos;s focus areas. They are meant to clarify direction, not overstate a public project list.
            </p>
          </div>
        }
      />

      <section className="section-shell page-space">
        <div className="grid gap-5 md:grid-cols-2">
          {projectThemes.map((theme, index) => {
            const Icon = theme.icon

            return (
              <div
                key={theme.title}
                className="surface-card p-6 md:p-7 fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                  {theme.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {theme.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <span className="eyebrow">Opportunity screening</span>
            <h2 className="mt-5 section-title text-balance">
              A project only makes sense if its economics, partners, and execution path are all legible.
            </h2>
            <p className="mt-4 lead-copy">
              The company favors patient, coherent opportunities over volume. That means keeping the evaluation lens simple and disciplined.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {evaluationCriteria.map((criterion, index) => {
              const Icon = criterion.icon

              return (
                <div
                  key={criterion.title}
                  className="surface-card p-6 fade-in-up"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="inline-flex rounded-full bg-accent/35 p-3 text-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {criterion.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {criterion.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Project conversations"
        title="Have an opportunity that aligns with the company's strategic themes?"
        description="Reach out for a more direct discussion around project fit, sector focus, or partnership potential."
      />
    </main>
  )
}
