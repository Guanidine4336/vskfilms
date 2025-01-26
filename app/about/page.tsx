import { SiteHeader } from "@/components/site-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <SiteHeader />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">About Us</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-zinc-300 mb-6">
              We are VSK Films Powered by Kripalu Innovations, a production house at heart but much more in spirit.
              Founded on a shared passion for storytelling, our mission is to create meaningful content that not only
              looks stunning but also delivers results.
            </p>
            <p className="text-lg text-zinc-300 mb-6">
              With years of experience collaborating with some of the world's most exciting brands, we've built a
              reputation for excellence and creativity.
            </p>
            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Our Philosophy</h2>
            <p className="text-lg text-zinc-300 mb-6">
              Our philosophy is simple: find the extra in the ordinary. We're hungry to tell purposeful stories, fueled
              by innovation and a relentless drive to push boundaries. From global campaigns to local stories, we're
              here to make an impact, one frame at a time.
            </p>
            <div className="mt-12 p-8 bg-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-zinc-300">
                To create meaningful content that not only looks stunning but also delivers results, pushing the
                boundaries of storytelling and visual excellence.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

