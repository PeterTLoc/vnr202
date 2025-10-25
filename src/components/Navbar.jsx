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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#fdf8ee]/95 border-b border-yellow-800/50 shadow-[0_2px_8px_rgba(120,80,20,0.15)] backdrop-blur-sm"
    >
      {/* Top decorative line */}
      <div className="w-full h-[3px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand Title */}
        <motion.h2
          whileHover={{ scale: 1.03 }}
          className="text-xl md:text-2xl font-serif text-red-700 tracking-wide"
        >
          <span className="font-bold text-red-800">Nhóm 8</span>{" "}
          <span className="text-yellow-800 italic">&mdash; Đổi Mới & Hội Nhập</span>
        </motion.h2>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm md:text-base font-medium text-[#3b2d1f]">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative px-1 pb-1 transition-all duration-300 hover:text-red-700 ${
                  location.pathname === path ? "text-red-700 font-semibold" : ""
                }`}
              >
                {label}
                {location.pathname === path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-[2px] w-full h-[2px] bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom decorative line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-yellow-500 via-red-700 to-yellow-500" />
    </motion.nav>
  )
}

export default Navbar
