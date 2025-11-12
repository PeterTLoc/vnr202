import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main
      className="relative flex flex-col items-center justify-center text-center 
                 px-4 sm:px-6 pt-28 pb-12 min-h-screen 
                 bg-[#fdfaf5] text-[#2b2119] overflow-hidden"
    >
      {/* === Soft Background === */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_#fffbe6_0%,_#f7f1df_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-7 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"
      />

      {/* === Gradient Borders === */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      {/* === Title === */}
      <motion.h1
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-serif font-bold text-red-700 mb-3"
      >
        Dự Án Nhóm 8
      </motion.h1>

      {/* === Subtitle === */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg md:text-xl text-yellow-800 font-medium italic tracking-wide max-w-3xl"
      >
        Công cuộc đổi mới, công nghiệp hóa, hiện đại hóa và hội nhập quốc tế
        (1996–nay)
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-6 h-[2px] w-40 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 max-w-2xl text-base md:text-lg text-[#3c2f25] leading-relaxed"
      >
        Trong tiến trình lịch sử Việt Nam hiện đại, công cuộc đổi mới mở ra một
        kỷ nguyên phát triển mới — nơi tinh thần dân tộc, sáng tạo và hội nhập
        cùng thế giới hòa quyện để xây dựng đất nước giàu mạnh, văn minh.
      </motion.p>

      {/* === Navigation Buttons === */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center">
        <Link
          to="/content"
          className="inline-flex items-center px-5 py-2 rounded-md shadow-sm font-medium text-white
                     bg-gradient-to-r from-red-700 to-yellow-500 hover:scale-[1.01] transition-transform"
        >
          Xem nội dung
        </Link>

        <Link
          to="/chatbot"
          className="inline-flex items-center px-5 py-2 rounded-md border border-yellow-600 font-medium
                     bg-transparent text-red-700 hover:bg-yellow-50 transition-colors"
        >
          Mở Chatbot
        </Link>
      </div>

      {/* === Quote === */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="mt-10 text-sm text-yellow-900 italic max-w-xl"
      >
        “Không có con đường nào dẫn đến tương lai mà không qua đổi mới.”
      </motion.blockquote>
    </main>
  )
}

export default Home
