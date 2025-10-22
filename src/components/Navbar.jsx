import React from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const Navbar = () => {
  const location = useLocation()

  const links = [
    { path: "/", label: "Trang chủ" },
    { path: "/content", label: "Nội dung" },
    { path: "/chatbot", label: "Chatbot" },
    { path: "/quiz", label: "Quiz" },
    { path: "/ai-usage", label: "AI Usage" },
  ]

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-16 fixed top-0 left-0 w-full z-50 
                 bg-gradient-to-b from-black/90 to-zinc-900/60 
                 backdrop-blur-sm border-b border-yellow-700/40 
                 shadow-[0_2px_20px_rgba(255,215,0,0.15)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Title */}
        <motion.h2
          whileHover={{ scale: 1.05, textShadow: "0px 0px 10px #e2b714" }}
          className="text-2xl font-serif text-yellow-400 tracking-wide"
        >
          Nhóm 8 — <span className="text-gray-200">Đổi Mới & Hội Nhập</span>
        </motion.h2>

        {/* Links */}
        <ul className="flex gap-6 text-gray-300 font-medium">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative hover:text-yellow-400 transition-all duration-300
                  ${location.pathname === path ? "text-yellow-400" : ""}`}
              >
                {label}
                {location.pathname === path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
