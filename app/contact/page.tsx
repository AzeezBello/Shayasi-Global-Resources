import type { Metadata } from "next"
import { ArrowRight, Clock3, ExternalLink, Mail, MapPin, Phone } from "lucide-react"

import PageHero from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/seo"

const inquiryTopics = [
  {
    title: "Strategic partnerships",
    description: "Conversations around sector-aligned collaboration and opportunity development.",
  },
  {
    title: "Investment and project interest",
    description: "Introductions related to relevant projects, land, or long-view investment themes.",
  },
  {
    title: "General business inquiries",
    description: "Questions about the company, its services, or Shayasi Farms.",
  },
] as const

const mapQuery = encodeURIComponent("AYINKE HOUSE, 120 Mushin Road, Isolo, Lagos, Nigeria")
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Shayasi Global Resources in Lagos, Nigeria for business inquiries and partnership discussions.",
}

export default function Contact() {
  return (
    <main className="pb-8 md:pb-12">
      <PageHero
        eyebrow="Contact"
        title="Reach the team in Lagos for thoughtful business conversations."
        description="Whether you are exploring a partnership, a project conversation, or a general inquiry, the most direct route is through the contact details below."
        aside={
          <div>
            <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
              <Clock3 className="size-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
              Best reasons to reach out
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              The team is best positioned for focused conversations around partnerships, opportunities, and business alignment.
            </p>

            <div className="mt-6 space-y-3">
              {inquiryTopics.map((topic, index) => (
                <div
                  key={topic.title}
                  className="rounded-[1.45rem] border border-border/70 bg-background/80 px-4 py-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold tracking-tight text-foreground">{topic.title}</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{topic.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="section-shell page-space pt-3">
        <div className="surface-card overflow-hidden p-0">
          <div className="flex flex-col gap-4 border-b border-border/70 px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Location map
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                {siteConfig.location}
              </p>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Open larger map
              <ExternalLink className="size-4" />
            </a>
          </div>

          <div className="aspect-[21/9] w-full">
            <iframe
              title="Map showing Shayasi Global Resources office location"
              src={mapEmbedSrc}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section-shell page-space pt-0">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface-card p-6 md:p-7">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Contact details
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              Email and phone both provide a direct route for new conversations, while the office address provides a clear physical point of contact in Lagos.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-[1.4rem] border border-border/70 bg-background/75 p-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-semibold tracking-tight text-foreground">Office address</p>
                    <div className="mt-2 space-y-1 text-sm leading-7 text-muted-foreground">
                      {siteConfig.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-border/70 bg-background/75 p-5">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-semibold tracking-tight text-foreground">Email</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-border/70 bg-background/75 p-5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 text-primary" />
                  <div>
                    <p className="font-semibold tracking-tight text-foreground">Contact number</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {siteConfig.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={`mailto:${siteConfig.email}`}>Email the team</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.phone}`}>Call the team</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={mapLink} target="_blank" rel="noreferrer">
                  Open map
                </a>
              </Button>
            </div>
          </div>

          <div className="dark-panel p-6 md:p-7">
            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/58">
                Visit or write
              </p>
              <h2 className="mt-4 text-[1.85rem] font-semibold tracking-tight text-white">
                Clear, direct access to the Shayasi team.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                For meaningful conversations, send an email with a short description of the opportunity or inquiry, or call directly for a faster point of contact. If location context matters, use the map above to navigate to the office in Isolo, Lagos.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="rounded-[1.45rem] border border-white/12 bg-white/8 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/52">
                    Call directly
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    {siteConfig.phone}
                    <ArrowRight className="size-4" />
                  </a>
                </div>

                <div className="rounded-[1.45rem] border border-white/12 bg-white/8 p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/52">
                  Recommended first step
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Start with an email inquiry
                  <ArrowRight className="size-4" />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
