// "use client"

// import { cn } from "@/lib/utils"
// import { motion } from "framer-motion"
// import type React from "react"

// export const BackgroundLines = ({
//   children,
//   className,
//   svgOptions,
// }: {
//   children: React.ReactNode
//   className?: string
//   svgOptions?: {
//     duration?: number
//   }
// }) => {
//   return (
//     <div className={cn("h-[20rem] md:h-screen w-full bg-black", className)}>
//       <SVG svgOptions={svgOptions} />
//       {children}
//     </div>
//   )
// }

// const pathVariants = {
//   initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
//   animate: {
//     strokeDashoffset: 0,
//     strokeDasharray: "20 800",
//     opacity: [0, 1, 1, 0],
//   },
// }

// const SVG = ({
//   svgOptions,
// }: {
//   svgOptions?: {
//     duration?: number
//   }
// }) => {
//   // ... (previous SVG paths and colors code)
//   return (
//     <motion.svg
//       viewBox="0 0 1440 900"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="absolute inset-0 w-full h-full"
//     >
//       {paths.map((path, idx) => (
//         <motion.path
//           key={`path-first-${idx}`}
//           d={path}
//           stroke={colors[idx]}
//           strokeWidth="2.3"
//           strokeLinecap="round"
//           variants={pathVariants}
//           initial="initial"
//           animate="animate"
//           transition={{
//             duration: svgOptions?.duration || 10,
//             ease: "linear",
//             repeat: Number.POSITIVE_INFINITY,
//             repeatType: "loop",
//             delay: Math.floor(Math.random() * 10),
//             repeatDelay: Math.floor(Math.random() * 10 + 2),
//           }}
//         />
//       ))}
//     </motion.svg>
//   )
// }

