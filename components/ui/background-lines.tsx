"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type React from "react"

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode
  className?: string
  svgOptions?: {
    duration?: number
  }
}) => {
  return (
    <div className={cn("relative w-full min-h-screen bg-black overflow-hidden", className)}>
      <SVG svgOptions={svgOptions} />
      {children}
    </div>
  )
}

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: [0, 1, 1, 0],
    pathLength: [0, 1],
  },
}

const SVG = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number
  }
}) => {
  // Generate short line paths at different angles and positions
  const generatePaths = (count: number) => {
    const paths = []
    for (let i = 0; i < count; i++) {
      const x1 = Math.random() * 100
      const y1 = Math.random() * 100
      const length = Math.random() * 3 + 1 // Short lines between 1-4% of viewport
      const angle = Math.random() * 360
      const radians = (angle * Math.PI) / 180
      const x2 = x1 + Math.cos(radians) * length
      const y2 = y1 + Math.sin(radians) * length
      paths.push(`M${x1} ${y1} L${x2} ${y2}`)
    }
    return paths
  }

  const paths = generatePaths(40) // Generate 40 short lines

  const colors = [
    "#46A5CA", // blue
    "#4FAE4D", // green
    "#A534A0", // purple
    "#D7C200", // yellow
    "#59BBEB", // light blue
    "#55BC54", // light green
  ]

  return (
    <motion.svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full opacity-70"
    >
      {paths.map((path, idx) => (
        <motion.path
          key={`path-${idx}`}
          d={path}
          stroke={colors[idx % colors.length]}
          strokeWidth="0.2"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 4,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: Math.random() * 5,
            repeatDelay: Math.random() * 3,
          }}
        />
      ))}
    </motion.svg>
  )
}

