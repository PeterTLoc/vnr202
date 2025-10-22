import React from "react"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-black to-zinc-900 opacity-95" />
      <div className="absolute -z-10 w-[600px] h-[600px] bg-yellow-900/10 blur-3xl rounded-full" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-serif font-bold text-yellow-400 drop-shadow-[0_0_12px_rgba(226,183,20,0.5)]"
      >
        Chào mừng đến với Dự Án Nhóm 8
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
      >
        <span className="text-yellow-500 font-medium">Chủ đề:</span> Công cuộc{" "}
        <span className="text-yellow-400">đổi mới</span>,{" "}
        <span className="text-yellow-400">công nghiệp hóa</span>,{" "}
        <span className="text-yellow-400">hiện đại hóa</span> và{" "}
        <span className="text-yellow-400">hội nhập quốc tế</span> (1996–nay).
      </motion.p>

      {/* Line Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-10 h-[2px] w-64 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
      />

      {/* Quote or CTA */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="mt-10 text-sm text-gray-500 italic tracking-wide"
      >
        “Không có con đường nào dẫn đến tương lai mà không qua đổi mới.”
      </motion.p>
    </div>
  )
}

export default Home
