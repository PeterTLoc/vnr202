import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { responses } from "./aiResponses"

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const chatEndRef = useRef(null)

  const sendMessage = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg = { sender: "user", text: trimmed }
    const botReply =
      responses[trimmed.toLowerCase()] ||
      "Mình chưa có câu trả lời cho câu hỏi này, bạn có thể thử lại nhé!"
    const botMsg = { sender: "bot", text: botReply }

    setMessages((prev) => [...prev, userMsg, botMsg])
    setInput("")
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    // ✅ full-width outer container so scrollbar reaches screen edge
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex flex-col h-[calc(100vh-164px)] w-full font-serif"
    >
      {/* Scrollable full-width chat area */}
      <div
        className="flex-1 overflow-y-auto scrollbar-thin 
        scrollbar-thumb-[#a38a48]/40 scrollbar-track-transparent 
        hover:scrollbar-thumb-[#c2a85e]/60"
        style={{
          scrollbarGutter: "stable both-edges",
        }}
      >
        {/* Centered message content */}
        <div className="w-full max-w-3xl mx-auto px-5 py-4 space-y-3">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`max-w-[80%] px-4 py-3 rounded-xl leading-relaxed tracking-wide ${
                  msg.sender === "user"
                    ? "ml-auto bg-[#3b2f15]/60 border border-[#d1b456]/40 text-[#e8d7a0] text-right shadow-[0_0_10px_rgba(194,168,94,0.1)]"
                    : "bg-[#1b1a18]/70 border border-[#a38a48]/30 text-gray-200 shadow-[0_0_6px_rgba(194,168,94,0.05)]"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input bar (also centered, inside same width constraint) */}
      <div className="p-3 border-t border-[#2a281f]/50">
        <div className="w-full max-w-3xl mx-auto flex items-center gap-2">
          <input
            type="text"
            placeholder="Nhập câu hỏi..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 bg-[#1a1816]/80 border border-[#a38a48]/30 text-[#e8d7a0] 
            px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#c2a85e] placeholder-gray-500"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 12px rgba(194,168,94,0.3)",
            }}
            onClick={sendMessage}
            className="bg-gradient-to-br from-[#a38a48] to-[#c2a85e] text-black 
            font-semibold px-4 py-2 rounded-lg transition-transform duration-200"
          >
            Gửi
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Chatbot
