"use client"

import Link from "next/link"
import {  Youtube, Instagram, Twitter, Facebook } from "lucide-react"
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
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Mountain className="w-6 h-6 text-white" /> */}
          <span className="items-center hidden font-bold text-white sm:inline-flex">
 
              <img
                src="/WHITE.png"  
                alt="VSK Films icon"
                className="w-8 h-8 ml-3"  
              />
        </span>


        </Link>

        <div className="items-center hidden space-x-8 md:flex">
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
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
          <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t md:hidden border-zinc-800">
          <div className="px-4 py-3 space-y-1">
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

