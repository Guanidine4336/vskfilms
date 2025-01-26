// "use client"

// import { cn } from "@/lib/utils"
// import { motion } from "framer-motion"
// import type React from "react"
// import { useMemo } from "react"

// export const BackgroundLines: React.FC<{
//   children?: React.ReactNode
//   className?: string
//   svgOptions?: {
//     duration?: number
//     pathCount?: number
//   }
// }> = ({ children, className, svgOptions }) => {
//   return (
//     <div className={cn("relative h-[20rem] md:h-screen w-full bg-black overflow-hidden", className)}>
//       <SVG svgOptions={svgOptions} />
//       {children}
//     </div>
//   )
// }

// const pathVariants = {
//   initial: { pathLength: 0, opacity: 0 },
//   animate: {
//     pathLength: 1,
//     opacity: [0, 1, 1, 0],
//     transition: {
//       pathLength: { type: "spring", duration: 5, bounce: 0 },
//       opacity: { duration: 2, times: [0, 0.2, 0.8, 1] },
//     },
//   },
// }

// const SVG: React.FC<{
//   svgOptions?: {
//     duration?: number
//     pathCount?: number
//   }
// }> = ({ svgOptions }) => {
//   const paths = useMemo(() => generatePaths(svgOptions?.pathCount || 5), [svgOptions?.pathCount])
//   const colors = useMemo(() => generateColors(paths.length), [paths.length])

//   return (
//     <svg
//       viewBox="0 0 1440 900"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="absolute inset-0 w-full h-full"
//     >
//       {paths.map((path, idx) => (
//         <motion.path
//           key={`path-${idx}`}
//           d={path}
//           stroke={colors[idx]}
//           strokeWidth="2"
//           strokeLinecap="round"
//           variants={pathVariants}
//           initial="initial"
//           animate="animate"
//           transition={{
//             duration: svgOptions?.duration || 10,
//             ease: "linear",
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "loop",
//             delay: Math.random() * 2,
//             repeatDelay: Math.random() * 2,
//           }}
//         />
//       ))}
//     </svg>
//   )
// }

// function generatePaths(count: number): string[] {
//   const paths: string[] = []
//   for (let i = 0; i < count; i++) {
//     const path = `M${Math.random() * 1440},${Math.random() * 900} 
//                   Q${Math.random() * 1440},${Math.random() * 900} 
//                    ${Math.random() * 1440},${Math.random() * 900}`
//     paths.push(path)
//   }
//   return paths
// }

// function generateColors(count: number): string[] {
//   const colors = [
//     "#FF6B6B",
//     "#4ECDC4",
//     "#45B7D1",
//     "#FFA07A",
//     "#98D8C8",
//     "#F7FFF7",
//     "#FF9FF3",
//     "#FFC75F",
//     "#F9F871",
//     "#B83B5E",
//   ]
//   return Array(count)
//     .fill(0)
//     .map(() => colors[Math.floor(Math.random() * colors.length)])
// }

