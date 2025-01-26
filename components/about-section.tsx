"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Us</h2>
          <div className="space-y-6 text-lg text-zinc-300">
            <p>
              We are VSK Films Powered by Kripalu Innovations, a production house at heart but much more in spirit.
              Founded on a shared passion for storytelling, our mission is to create meaningful content that not only
              looks stunning but also delivers results.
            </p>
            <p>
              With years of experience collaborating with some of the world's most exciting brands, we've built a
              reputation for excellence and creativity.
            </p>
            <p className="text-xl font-semibold text-white">
              Our philosophy is simple: find the extra in the ordinary.
            </p>
            <p>
              We're hungry to tell purposeful stories, fueled by innovation and a relentless drive to push boundaries.
              From global campaigns to local stories, we're here to make an impact, one frame at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

