import React from "react"
import { motion } from "framer-motion"
import Quiz from "../components/Quiz/Quiz"

const QuizPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden
      bg-gradient-to-b from-[#0b0a09] via-[#111010] to-[#1a1816]
      text-[#d9c79c] font-serif flex flex-col items-center py-10 px-6"
    >
      {/* Subtle mist/fog overlay */}
      <div className="absolute inset-0 bg-[url('/fog-texture.png')] opacity-10 animate-pulse mix-blend-overlay pointer-events-none" />

      {/* Golden border frame */}
      <div className="absolute inset-0 border border-[#a38a48]/40 rounded-lg pointer-events-none" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="z-10 text-4xl md:text-5xl font-bold tracking-wider text-center mb-8 
        drop-shadow-[0_0_10px_rgba(217,199,156,0.5)]"
      >
        Quiz Kiểm Tra Kiến Thức
      </motion.h1>

      {/* Decorative golden rune divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="z-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c2a85e] to-transparent mb-8"
      />

      {/* Quiz container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl bg-[#1b1a18]/70 border border-[#a38a48]/30 
        rounded-2xl shadow-[0_0_25px_rgba(194,168,94,0.15)] p-8 backdrop-blur-sm"
      >
        <Quiz />
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#a38a48]/10 to-transparent rounded-b-2xl pointer-events-none" />
      </motion.div>

      {/* Decorative golden bottom mist */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#a38a48]/10 to-transparent pointer-events-none" />
    </motion.div>
  )
}

export default QuizPage
