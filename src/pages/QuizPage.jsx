import React from "react"
import { motion } from "framer-motion"
import Quiz from "../components/Quiz/Quiz"

const QuizPage = () => {
  return (
    <main
      className="relative flex flex-col items-center text-center 
                 px-4 pt-20 pb-12 min-h-screen 
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
        className="text-3xl md:text-4xl font-serif font-bold text-red-700 mb-3"
      >
        Bài Quiz Kiểm Tra Kiến Thức
      </motion.h1>

      {/* === Subtitle === */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg md:text-xl text-yellow-800 font-medium italic tracking-wide mb-6 max-w-2xl"
      >
        “Thử thách bản thân qua các câu hỏi lịch sử Việt Nam hiện đại.”
      </motion.p>

      {/* === Divider === */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="h-[2px] w-40 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 mb-10"
      />

      {/* === Quiz Component === */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="w-full max-w-4xl mx-auto flex justify-center items-stretch"
      >
        <Quiz />
      </motion.div>
    </main>
  )
}

export default QuizPage
