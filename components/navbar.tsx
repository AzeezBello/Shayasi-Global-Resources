"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <header className="border-b bg-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="font-bold text-xl">
          Shayasi Global Resources
        </Link>

        <nav className="hidden md:flex gap-8">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>

        </nav>

      </div>

    </header>
  )
}