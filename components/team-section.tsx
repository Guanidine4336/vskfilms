"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Camera, Edit, Film, Video, Users, Lightbulb } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Creative Director",
    role: "Leadership",
    description: "Guiding the creative vision and ensuring excellence in every project.",
    icon: Film,
    image: "/placeholder.svg",
  },
  {
    name: "Cinematographer",
    role: "Production",
    description: "Capturing stunning visuals that tell compelling stories.",
    icon: Camera,
    image: "/placeholder.svg",
  },
  {
    name: "Editor",
    role: "Post-Production",
    description: "Crafting narratives through expert post-production.",
    icon: Edit,
    image: "/placeholder.svg",
  },
  {
    name: "Production Manager",
    role: "Management",
    description: "Ensuring smooth operations and project delivery.",
    icon: Video,
    image: "/placeholder.svg",
  },
  {
    name: "Creative Producer",
    role: "Production",
    description: "Bringing creative concepts to life through careful planning.",
    icon: Lightbulb,
    image: "/placeholder.svg",
  },
  {
    name: "Project Lead",
    role: "Management",
    description: "Coordinating teams and resources for project success.",
    icon: Users,
    image: "/placeholder.svg",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Team</h2>
          <p className="text-lg text-zinc-300">Behind every great story is a team of passionate individuals.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <member.icon className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-sm text-zinc-400 mb-4">{member.role}</p>
                  <p className="text-zinc-300">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

