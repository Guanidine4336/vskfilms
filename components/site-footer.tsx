import Link from "next/link"
import Image from "next/image"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-white py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-lg font-semibold mb-6">EDGE'S PRODUCTION</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-zinc-400 hover:text-white">
                About Edge
              </Link>
            </li>
            <li>
              <Link href="/videos" className="text-zinc-400 hover:text-white">
                Latest Videos
              </Link>
            </li>
            <li>
              <Link href="/studio" className="text-zinc-400 hover:text-white">
                Studio Tour
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-zinc-400 hover:text-white">
                Press & News
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-zinc-400 hover:text-white">
                Help (FAQ)
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">ABOUT</h3>
          <p className="text-zinc-400 mb-6">
            Lorem ipsum dolor sit amet. Turel upn gravida nibh vel velit auctor aliquet aen sollic conseut ipsutis.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-zinc-400 hover:text-white" aria-label="Youtube">
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">NEWS & FILM UPDATES</h3>
          <p className="text-zinc-400 mb-6">Lorem Ipsner gravida nibh veml auctsi aliquet. Aene sollic conseut.</p>
          <div className="flex space-x-2">
            <Input type="email" placeholder="Your email" className="bg-zinc-900 border-zinc-800" />
            <Button variant="secondary">
              <span className="sr-only">Subscribe</span>→
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">FOLLOW ON INSTAGRAM</h3>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-zinc-900 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt={`Instagram post ${i + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

