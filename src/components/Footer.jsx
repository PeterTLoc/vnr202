import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#fdf8ee] border-t border-yellow-300/40 text-[#3b2d1f] shadow-inner"
      role="contentinfo"
    >
      <div
        aria-hidden
        className="w-full h-[2px] bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm font-serif text-[#3b2d1f]/90">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-red-700">Nhóm 8</span> —{" "}
          <span className="italic text-yellow-700">
            Đổi mới & hội nhập quốc tế
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-[#3b2d1f]/80">
          <Link to="/privacy" className="hover:underline hover:text-red-700">
            Chính sách
          </Link>
          <Link to="/contact" className="hover:underline hover:text-red-700">
            Liên hệ
          </Link>
          <span className="hidden sm:inline">•</span>
          <div className="text-[11px] text-yellow-800">
            Thiết kế đồng nhất ✦ Nhóm 8
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
