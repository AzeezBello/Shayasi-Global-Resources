import type { Metadata } from "next"

export const siteConfig = {
  name: "Shayasi Global Resources",
  shortName: "Shayasi",
  url: "https://shayasiglobalresources.com",
  description:
    "Shayasi Global Resources is a diversified Nigerian company specializing in oil and gas, strategic investments, and real estate development, with agricultural expansion through Shayasi Farms.",
  location: "Lagos, Nigeria",
  email: "info@shayasiglobalresources.com",
  phone: "+2348024071895",
  addressLines: ["AYINKE HOUSE", "120 Mushin Road", "Isolo, Lagos, Nigeria"],
  keywords: [
    "Shayasi Global Resources",
    "Oil and Gas Nigeria",
    "Investment company Lagos",
    "Real estate development Nigeria",
    "Agriculture investment Nigeria",
  ],
} as const

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const

export const companyMetrics = [
  { value: "4", label: "Core business areas" },
  { value: "01", label: "Agricultural subsidiary" },
  { value: "Lagos", label: "Head office base" },
] as const

export const sectors = [
  "Oil & Gas",
  "Investments",
  "Real Estate",
  "Agriculture",
] as const

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString()
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const canonical = absoluteUrl(path)

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: absoluteUrl("/shayasi-logo.png"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "AYINKE HOUSE, 120 Mushin Road",
      addressLocality: "Isolo, Lagos",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        areaServed: "NG",
        availableLanguage: ["en"],
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": `${siteConfig.url}#organization`,
    },
    inLanguage: "en",
  },
] as const
