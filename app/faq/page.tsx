import { Minus, Plus } from "lucide-react"

import CtaBanner from "@/components/cta-banner"
import PageHero from "@/components/page-hero"
import { buildPageMetadata, siteConfig } from "@/lib/seo"

const faqItems = [
  {
    question: "What does Shayasi Global Resources Limited do?",
    answer:
      "Shayasi Global Resources Limited is a diversified Nigerian company operating across Oil and Gas, strategic investments, real estate, and agriculture through Shayasi Farms. The company focuses on value-driven projects, sector partnerships, and long-term growth opportunities.",
    category: "Company",
  },
  {
    question: "Does Shayasi operate in the oil and gas sector?",
    answer:
      "Yes. Shayasi Global Resources operates in the downstream oil and gas sector, supplying and distributing refined petroleum products such as petrol, diesel, and gas. The company also manages fuel-station operations and works with businesses, retailers, and government-related stakeholders.",
    category: "Oil and Gas",
  },
  {
    question: "What real estate services does the company offer?",
    answer:
      "The real estate arm covers the buying and selling of lands and buildings, leasing and rental of residential and commercial properties, property management, and long-term property investment opportunities.",
    category: "Real Estate",
  },
  {
    question: "Does Shayasi offer investment opportunities?",
    answer:
      "Yes. Shayasi offers strategic investment opportunities across real estate, agriculture, and downstream oil and gas. The company takes a hands-on approach to identifying, managing, and monitoring projects aimed at sustainable long-term returns.",
    category: "Investments",
  },
  {
    question: "What is Shayasi Farms?",
    answer:
      "Shayasi Farms is the agricultural arm of Shayasi Global Resources. It focuses on crop farming, livestock farming, and agricultural trading, with selected produce reaching both local and international markets.",
    category: "Agriculture",
  },
  {
    question: "Which agricultural products does Shayasi Farms work with?",
    answer:
      "Shayasi Farms cultivates crops such as soya beans, sorghum, hibiscus, rice, ginger, and more. The agricultural business emphasizes productivity, quality, and responsible land use.",
    category: "Agriculture",
  },
  {
    question: "Can I contact Shayasi for partnerships or project discussions?",
    answer:
      "Yes. The company welcomes conversations around strategic partnerships, project opportunities, investment interest, and broader business collaboration. The contact page provides direct access through email, phone, and office location details.",
    category: "Partnerships",
  },
  {
    question: "Where is Shayasi Global Resources located?",
    answer:
      `The company is based in Lagos, Nigeria. The office address listed on the site is ${siteConfig.addressLines.join(", ")}.`,
    category: "Contact",
  },
  {
    question: "How can I reach the team?",
    answer:
      `You can contact the team by email at ${siteConfig.email}, by phone at ${siteConfig.phone}, or by using the contact page for location details and map directions.`,
    category: "Contact",
  },
] as const

const faqCategories = [
  "Company",
  "Oil and Gas",
  "Real Estate",
  "Investments",
  "Agriculture",
  "Partnerships",
  "Contact",
] as const

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export const metadata = buildPageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about Shayasi Global Resources, including its oil and gas operations, investments, real estate services, Shayasi Farms, and contact details.",
  path: "/faq",
})

export default function FaqPage() {
  return (
    <main className="pb-8 md:pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <PageHero
        eyebrow="FAQ"
        title="Answers to common questions about Shayasi Global Resources."
        description="This page brings together the most common questions about the company, its sectors, Shayasi Farms, investment opportunities, and how to get in touch."
        aside={
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Popular topics
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {faqCategories.map((category) => (
                <div
                  key={category}
                  className="rounded-[1.35rem] border border-border/70 bg-background/75 px-4 py-4 text-sm font-semibold tracking-tight text-foreground"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="section-shell page-space">
        <div className="grid gap-4">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="surface-card group p-0 fade-in-up"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-6 py-6 [&::-webkit-details-marker]:hidden md:px-7 md:py-7">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {item.category}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                    {item.question}
                  </h2>
                </div>
                <span className="mt-1 inline-flex shrink-0 rounded-full border border-border/70 bg-background/70 p-3 text-muted-foreground">
                  <Plus className="size-4 group-open:hidden" />
                  <Minus className="hidden size-4 group-open:block" />
                </span>
              </summary>

              <div className="px-6 pb-6 md:px-7 md:pb-7">
                <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <CtaBanner
        eyebrow="Still have questions?"
        title="Need a more specific answer about Shayasi, a project, or a partnership opportunity?"
        description="Reach out directly and the team can help with business inquiries, partnerships, sector-specific questions, or investment conversations."
        ctaLabel="Contact Us"
      />
    </main>
  )
}
