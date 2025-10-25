import React from "react"
import { motion } from "framer-motion"

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-[#e6d3a3]/30 rounded-full h-2 mx-auto mt-6 mb-2 overflow-hidden">
    <motion.div
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="h-full bg-gradient-to-r from-[#c2a85e] via-[#a38a48] to-[#c2a85e]"
    />
  </div>
)

export default ProgressBar
