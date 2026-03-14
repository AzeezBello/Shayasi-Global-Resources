import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: {
    default: "Shayasi Global Resources",
    template: "%s | Shayasi Global Resources",
  },
  description:
    "Oil & Gas, Investment and Real Estate development company based in Lagos Nigeria.",
}

export default function RootLayout({ children }: any) {
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