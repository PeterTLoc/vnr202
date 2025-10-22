import React from "react"
import Chatbot from "../components/Chatbot/Chatbot"

const ChatbotPage = () => {
  return (
    <div
      className="relative h-[calc(100vh-64px)] w-full overflow-y-auto 
      bg-gradient-to-b from-[#0b0a09] via-[#111010] to-[#1a1816] 
      text-[#d9c79c] font-serif flex flex-col items-center"
    >
      {/* Subtle moving mist / fog effect */}
      <div className="absolute inset-0 bg-[url('/fog-texture.png')] opacity-10 animate-pulse mix-blend-overlay pointer-events-none" />

      {/* Faint golden border */}
      <div className="absolute inset-0 border border-[#a38a48]/40 rounded-lg pointer-events-none" />

      <h1 className="z-10 text-3xl font-bold tracking-wider text-center my-3 drop-shadow-[0_0_10px_rgba(217,199,156,0.5)]">
        Trợ lý học tập AI
      </h1>

      {/* Chatbot fills width but keeps max width styling */}
      <div className="relative z-10 w-full">
        <Chatbot />
      </div>

      {/* Decorative golden glow */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#a38a48]/10 to-transparent pointer-events-none" />
    </div>
  )
}

export default ChatbotPage
