import React from "react"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[calc(100vh-100px)] px-6 bg-[#fdfaf5] text-[#2b2119]">
      {/* Subtle aged paper background texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_#fffbe6_0%,_#f7f1df_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* Decorative border top and bottom */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-serif font-bold text-red-700 mb-4"
      >
        Dự Án Nhóm 8
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-yellow-800 font-medium italic tracking-wide"
      >
        “Công cuộc đổi mới, công nghiệp hóa, hiện đại hóa và hội nhập quốc tế (1996–nay)”
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-8 h-[1.5px] w-48 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600"
      />

      {/* Body / quote */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="mt-8 max-w-2xl text-base md:text-lg text-[#3c2f25] leading-relaxed"
      >
        Trong tiến trình lịch sử Việt Nam hiện đại, công cuộc đổi mới mở ra một kỷ nguyên phát triển
        mới — nơi tinh thần dân tộc, sáng tạo và hội nhập cùng thế giới hòa quyện để xây dựng đất nước
        giàu mạnh, văn minh.
      </motion.p>

      {/* Quotation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-10 text-sm text-yellow-900 italic"
      >
        “Không có con đường nào dẫn đến tương lai mà không qua đổi mới.”
      </motion.p>
    </div>
  )
}

export default Home
