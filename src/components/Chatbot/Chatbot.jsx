import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef(null)

  const API_BASE = import.meta.env.VITE_API_BASE || "/api"

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg = { sender: "user", text: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setLoading(true)

    try {
      // Build URL from env or fallback
      const url = `${API_BASE.replace(/\/$/, "")}/vnr`;

      // Prevent mixed-content: if site is HTTPS and API is HTTP, bail early with a helpful message
      if (typeof window !== "undefined" && window.location.protocol === "https:" && url.startsWith("http:")) {
        console.warn("Blocked mixed-content request to", url)
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text:
              "Không thể kết nối tới API vì trang đang chạy trên HTTPS nhưng API sử dụng HTTP. Hãy cấu hình API để dùng HTTPS hoặc cấu hình proxy trên hosting.",
          },
        ])
        setLoading(false)
        return
      }

      // Send message to API
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: trimmed }),
      })

      if (!response.ok) {
        const text = await response.text().catch(() => "(no body)")
        throw new Error(`API error ${response.status}: ${text}`)
      }

      const data = await response.json()

      // Adjust this based on your API’s actual response format
      const botText =
        data?.reply || data?.message || "Xin lỗi, mình chưa hiểu câu hỏi này."

      const botMsg = { sender: "bot", text: botText }
      setMessages((prev) => [...prev, botMsg])
    } catch (error) {
      console.error("Error:", error)
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Lỗi kết nối máy chủ, vui lòng thử lại sau." },
      ])
    } finally {
      setLoading(false)
    }
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
                 bg-[#fdfaf5] text-[#2b2119]"
    >
      {/* === Chat messages === */}
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
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#fff8e1] border border-[#e6d3a3] text-[#2b2119] 
                         px-4 py-3 rounded-xl w-fit shadow-sm"
            >
              Đang trả lời...
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </div>

      {/* === Input === */}
      <div className="p-3 border-t border-yellow-900/20 bg-[#fffaf0]">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Nhập câu hỏi..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={loading}
            className="flex-1 px-4 py-2 border border-yellow-900/30 rounded-md 
                       bg-[#fffbe6] text-[#2b2119] placeholder-[#a38a48]
                       focus:outline-none focus:ring-1 focus:ring-yellow-700
                       disabled:opacity-60"
          />
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 12px rgba(194,168,94,0.3)",
            }}
            onClick={sendMessage}
            disabled={loading}
            className="px-4 py-2 font-semibold rounded-md
                       bg-gradient-to-br from-yellow-600 via-red-700 to-yellow-600
                       text-[#fffbe6] transition-transform duration-200
                       disabled:opacity-50"
          >
            {loading ? "..." : "Gửi"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Chatbot
