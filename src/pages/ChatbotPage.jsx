import React from "react"
import { motion } from "framer-motion"
import Chatbot from "../components/Chatbot/Chatbot"

const ChatbotPage = () => {
  return (
    <main
      className="relative flex flex-col items-center px-4 pt-20 pb-5 min-h-screen bg-[#fdfaf5] text-[#2b2119] overflow-y-auto"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_#fffbe6_0%,_#f7f1df_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-7 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"
      />

      {/* Borders */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-serif font-bold text-red-700 mb-2"
      >
        Trợ Lý Học Tập AI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg md:text-xl text-yellow-800 font-medium italic tracking-wide mb-6 max-w-2xl"
      >
        “Người bạn đồng hành trong hành trình học tập và khám phá tri thức.”
      </motion.p>

      {/* Chat wrapper: column flex, fixed viewport portion, gives Chatbot a full-height parent */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="w-full flex flex-1"
      >
        <Chatbot />
      </motion.div>
    </main>
  )
}

export default ChatbotPage
