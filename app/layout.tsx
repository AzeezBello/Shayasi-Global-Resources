import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "Shayasi Global Resources",
  description:
    "Oil & Gas, Investments and Real Estate development company based in Lagos Nigeria.",
  keywords: [
    "Oil and Gas Nigeria",
    "Real Estate Lagos",
    "Investment company Nigeria"
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  )
}