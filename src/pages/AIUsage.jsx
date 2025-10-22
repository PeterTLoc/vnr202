import React from "react"
import { motion } from "framer-motion"

const AIUsage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden
      bg-gradient-to-b from-[#0b0a09] via-[#111010] to-[#1a1816]
      text-[#d9c79c] font-serif flex flex-col items-center justify-center px-6 py-12"
    >
      {/* Faint fog texture overlay */}
      <div className="absolute inset-0 bg-[url('/fog-texture.png')] opacity-10 animate-pulse mix-blend-overlay pointer-events-none" />

      {/* Subtle golden border */}
      <div className="absolute inset-0 border border-[#a38a48]/40 rounded-lg pointer-events-none" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center 
        drop-shadow-[0_0_10px_rgba(217,199,156,0.5)] tracking-wider z-10"
      >
        AI Usage & Academic Integrity
      </motion.h1>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="relative z-10 max-w-3xl w-full bg-[#1b1a18]/70 border border-[#a38a48]/30 
        rounded-2xl shadow-[0_0_25px_rgba(194,168,94,0.15)] p-8 backdrop-blur-sm"
      >
        <ul className="space-y-5 text-lg leading-relaxed">
          <li>
            <b className="text-[#c2a85e]">Công cụ:</b> ChatGPT (hỗ trợ ý tưởng,
            viết code, gợi ý bố cục)
          </li>
          <li>
            <b className="text-[#c2a85e]">Mục đích:</b> Hỗ trợ chứ không thay
            thế tư duy và biên soạn của sinh viên
          </li>
          <li>
            <b className="text-[#c2a85e]">Kiểm chứng:</b> Đối chiếu với Giáo
            trình LLCT, Nghị quyết Đại hội XIII
          </li>
          <li>
            <b className="text-[#c2a85e]">Cam kết:</b> Không để AI làm thay toàn
            bộ sản phẩm
          </li>
        </ul>

        {/* Decorative faint bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#a38a48]/10 to-transparent rounded-b-2xl pointer-events-none" />
      </motion.div>

      {/* Gentle gold mist bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#a38a48]/10 to-transparent pointer-events-none" />
    </motion.div>
  )
}

export default AIUsage
