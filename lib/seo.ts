export const siteConfig = {
  name: "Shayasi Global Resources",
  shortName: "Shayasi",
  url: "https://shayasiglobalresources.com",
  description:
    "Shayasi Global Resources is a diversified Nigerian company specializing in oil and gas, strategic investments, and real estate development, with agricultural expansion through Shayasi Farms.",
  location: "Lagos, Nigeria",
  email: "info@shayasiglobalresources.com",
  phone: "+234 800 000 0000",
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
  { href: "/projects", label: "Projects" },
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
