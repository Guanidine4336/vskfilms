import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <SiteHeader />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact Us</h1>
          <p className="text-lg text-zinc-300 mb-12">
            Let's bring your vision to life! Reach out to us for inquiries, collaborations, or just to say hello. We're
            always excited to connect and explore new ideas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-white" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-zinc-300">Saket, Delhi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-white" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-zinc-300">7266006663</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-white" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-zinc-300">contact@vskfilms.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-6">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Input className="bg-zinc-700 border-zinc-600 text-white" placeholder="Name" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Input className="bg-zinc-700 border-zinc-600 text-white" placeholder="Email" type="email" />
                  </div>
                  <div className="grid gap-2">
                    <Textarea
                      className="bg-zinc-700 border-zinc-600 text-white min-h-[150px]"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
            <p className="text-zinc-300">
              Stay updated with our latest projects and behind-the-scenes moments on social media.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

