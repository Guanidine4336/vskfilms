"use client"

import Link from "next/link"
import { Mountain, Youtube, Instagram, Twitter, Facebook } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "/#what-we-do" },
  { name: "Our Workflow", href: "/#workflow" },
  { name: "About Us", href: "/#about" },
  { name: "Contact Us", href: "/contact" },
]

const socialLinks = [
  { icon: Youtube, href: "https://youtube.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Facebook, href: "https://facebook.com" },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-white" />
          <span className="hidden font-bold text-white sm:inline-block">VSK Films</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-white hover:text-zinc-300">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-zinc-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="h-5 w-5" />
            </Link>
          ))}
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-white hover:text-zinc-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

