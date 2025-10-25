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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full max-w-[768px] mx-auto 
                 h-[calc(100vh-290px)] rounded-xl overflow-hidden
                 bg-[#fdfaf5] text-[#2b2119] "
    >
      {/* === Scrollable chat area === */}
      <div
        className="flex-1 overflow-y-auto px-4 py-3 space-y-3 
                   scrollbar-thin scrollbar-thumb-[#c2a85e]/40 
                   scrollbar-track-transparent hover:scrollbar-thumb-[#c2a85e]/70"
      >
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`max-w-[80%] px-4 py-3 rounded-xl leading-relaxed tracking-wide shadow-sm ${
                msg.sender === "user"
                  ? "ml-auto bg-gradient-to-br from-red-700 to-yellow-600 text-[#fffbe6]"
                  : "bg-[#fff8e1] border border-[#e6d3a3] text-[#2b2119]"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      {/* === Input bar === */}
      <div className="p-3 border-t border-yellow-900/20 bg-[#fffaf0]">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Nhập câu hỏi..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 px-4 py-2 border border-yellow-900/30 rounded-md 
                       bg-[#fffbe6] text-[#2b2119] placeholder-[#a38a48]
                       focus:outline-none focus:ring-1 focus:ring-yellow-700"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 12px rgba(194,168,94,0.3)",
            }}
            onClick={sendMessage}
            className="px-4 py-2 font-semibold rounded-md
                       bg-gradient-to-br from-yellow-600 via-red-700 to-yellow-600
                       text-[#fffbe6] transition-transform duration-200"
          >
            Gửi
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Chatbot
