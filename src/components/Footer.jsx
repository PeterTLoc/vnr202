import React from "react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="border-t border-yellow-800/50 bg-[#faf6ed] text-[#3b2d1f] py-6 px-4 text-center relative"
    >
      {/* Decorative gradient border top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      {/* Main text */}
      <p className="text-sm md:text-base font-serif tracking-wide">
        © 2025 <span className="text-red-700 font-semibold">Nhóm 8</span> — LLCT.{" "}
        <span className="text-yellow-800 italic">Mọi quyền được bảo lưu.</span>
      </p>

      {/* Subtext */}
      <p className="text-xs mt-2 text-yellow-900">
        Được thiết kế với <span className="text-red-600 font-medium">Tailwind CSS</span> ✦ Hỗ trợ bởi{" "}
        <span className="text-red-600 font-medium">AI</span>
      </p>

      {/* Bottom border for balance */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-500" />
    </motion.footer>
  )
}

export default Footer
