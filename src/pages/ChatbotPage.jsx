import React from "react"
import { motion } from "framer-motion"
import Chatbot from "../components/Chatbot/Chatbot"

const ChatbotPage = () => {
  return (
    <div
      className="relative flex flex-col items-center 
                 w-full min-h-[calc(100vh-64px)] px-6 pt-24 pb-10 
                 bg-[#fdfaf5] text-[#2b2119]  overflow-hidden"
    >
      {/* === Background Texture === */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_#fffbe6_0%,_#f7f1df_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* === Decorative Borders === */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      {/* === Title === */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-red-700 mb-4 text-center"
      >
        Trợ Lý Học Tập AI
      </motion.h1>

      {/* === Subtitle === */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-yellow-800 italic text-base md:text-lg text-center mb-8"
      >
        “Người bạn đồng hành trong hành trình học tập và khám phá tri thức.”
      </motion.p>

      {/* === Divider === */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-8 h-[1.5px] w-48 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600"
      />

      {/* === Chatbot Container === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl flex-1 flex 
                   justify-center items-stretch overflow-hidden"
      >
        <Chatbot />
      </motion.div>
    </div>
  )
}

export default ChatbotPage
