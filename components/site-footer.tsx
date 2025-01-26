import Link from "next/link"
import Image from "next/image"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-20 text-white bg-zinc-950">
      <div className="container grid grid-cols-1 gap-12 px-4 mx-auto md:grid-cols-4">
        <div>
          <h3 className="mb-6 text-lg font-semibold">VSK Films</h3>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-zinc-400 hover:text-white">
                About VSK Films
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
          <h3 className="mb-6 text-lg font-semibold">ABOUT</h3>
          <p className="mb-6 text-zinc-400">
          VSK Films, powered by Kripalu Innovations, creates impactful, story-driven content with a focus on innovation.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-zinc-400 hover:text-white" aria-label="Youtube">
              <Youtube className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-semibold">NEWS & FILM UPDATES</h3>
          <p className="mb-6 text-zinc-400">New projects are in the works at VSK Films! Stay tuned for exciting releases!</p>
          <div className="flex space-x-2">
            <Input type="email" placeholder="Your email" className="bg-zinc-900 border-zinc-800" />
            <Button variant="secondary">
              <span className="sr-only">Subscribe</span>→
            </Button>
          </div>
        </div>

        <div>
  <h3 className="mb-6 text-lg font-semibold">FOLLOW ON INSTAGRAM</h3>
  <div className="grid grid-cols-3 gap-2">
    <div className="overflow-hidden rounded-md aspect-square bg-zinc-900">
      <Image
        src="/b1.png"
        alt="Instagram post 1"
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="overflow-hidden rounded-md aspect-square bg-zinc-900">
      <Image
        src="/w1.png"
        alt="Instagram post 2"
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="overflow-hidden rounded-md aspect-square bg-zinc-900">
      <Image
        src="/b2.png"
        alt="Instagram post 3"
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="overflow-hidden rounded-md aspect-square bg-zinc-900">
      <Image
        src="w2.png"
        alt="Instagram post 4"
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="overflow-hidden rounded-md aspect-square bg-zinc-900">
      <Image
        src="b3.png"
        alt="Instagram post 5"
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
    <div className="overflow-hidden rounded-md aspect-square bg-zinc-900">
      <Image
        src="/w3.png"
        alt="Instagram post 6"
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
  </div>
</div>

      </div>
      <p className="py-4 mb-0 text-sm text-center text-zinc-500">
        &copy; {new Date().getFullYear()} VSK Films. All Rights Reserved.
      </p>



    </footer>
  )
}

