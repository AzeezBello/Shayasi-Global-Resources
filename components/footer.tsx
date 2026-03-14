import Link from "next/link"


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Shayasi Global Resources</h3>
          <p className="text-gray-300">
            We are a diversified Nigerian company specializing in Oil & Gas, Investments, Real Estate, and Agriculture through our subsidiary Shayasi Farms.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/subsidiaries/shayasi-farms" className="hover:underline">Shayasi Farms</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p>AYINKE HOUSE</p>
          <p>120 Mushin Road, Isolo, Lagos, Nigeria</p>
          <p className="mt-2">Email: info@shayasiglobalresources.com</p>
          <p>Phone: +234 800 000 0000</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Shayasi Global Resources. All rights reserved.
      </div>
    </footer>
  )
}