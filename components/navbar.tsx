"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { navigation } from "@/lib/seo"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto w-full max-w-7xl">
        <div className="surface-card overflow-hidden rounded-[2rem] border border-white/75 bg-white/78">
          <div className="flex items-center justify-between gap-4 px-5 py-1 sm:px-6">
            <Link href="/" className="flex min-w-0 items-center" onClick={closeMenu}>
              <span className="flex shrink-0 items-center justify-center">
                <Image
                  src="/shayasi-logo.png"
                  alt="Shayasi Global Resources logo"
                  width={224}
                  height={110}
                  quality={100}
                  className="h-auto w-[7.1rem] object-contain sm:w-[8rem] md:w-[8.75rem]"
                  priority
                />
              </span>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full bg-foreground/5 p-1 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground",
                    isActive(item.href) && "bg-white text-foreground shadow-sm",
                    !isActive(item.href) && "hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button asChild size="sm">
                <Link href="/contact" onClick={closeMenu}>
                  Start a conversation
                  <ArrowRight />
                </Link>
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border/70 bg-white/80 text-foreground lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {isOpen ? (
            <div
              id="mobile-navigation"
              className="border-t border-border/70 px-4 pb-4 pt-2 lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground",
                      isActive(item.href) && "bg-white text-foreground shadow-sm",
                      !isActive(item.href) && "hover:bg-white/70 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}

                <Button asChild className="mt-2 w-full justify-center">
                  <Link href="/contact" onClick={closeMenu}>
                    Start a conversation
                    <ArrowRight />
                  </Link>
                </Button>
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
