"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { FaFilm, FaVideo, FaMusic, FaCamera, FaClipboard, FaRegHandshake } from 'react-icons/fa'

interface Item {
  title: string
  description: string
  link?: string
  icon: JSX.Element
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: Item[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4", className)}>
      {items.map((item, idx) => (
        // Check if 'link' is defined before rendering the Link component
        item.link ? (
          <Link
            href={item.link}
            key={item.link}
            className="relative block w-full h-full p-2 group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex flex-col items-center justify-center text-center h-full mb-4"> {/* Center content vertically and horizontally */}
                <div className="mb-4"> {/* Add margin below the icon */}
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </Card>
          </Link>
        ) : (
          // If link is not available, render the card without Link
          <div
            key={item.title}
            className="relative block w-full h-full p-2 group"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-zinc-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex flex-col items-center justify-center text-center h-full mb-4"> {/* Center content vertically and horizontally */}
                <div className="mb-4"> {/* Add margin below the icon */}
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </Card>
          </div>
        )
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-zinc-900/80 backdrop-blur-sm group-hover:border-zinc-700 relative z-20",
        className,
      )}
      style={{ border: "1px solid rgba(221, 158, 49, 0.5)" }}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>
}