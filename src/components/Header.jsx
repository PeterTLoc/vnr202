import React from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const Header = () => {
  const location = useLocation()

  const links = [
    { path: "/", label: "Trang chủ" },
    { path: "/content", label: "Nội dung" },
    { path: "/chatbot", label: "Chatbot" },
    { path: "/quiz", label: "Quiz" },
    { path: "/ai-usage", label: "AI Usage" },
  ]

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#fdf8ee]/95 backdrop-blur-sm border-b border-yellow-300/40 shadow-sm"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 select-none">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-serif font-bold shadow-md"
            style={{
              background:
                "linear-gradient(135deg,#b91c1c 0%, #eab308 70%, #facc15 100%)",
            }}
          >
            8
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-serif font-semibold text-red-700">
              Nhóm 8
            </span>
            <span className="text-xs text-yellow-700 italic -mt-0.5">
              Đổi Mới & Hội Nhập
            </span>
          </div>
        </Link>

        {/* Simple nav */}
        <nav className="flex items-center gap-6" aria-label="Primary">
          {links.map((l) => {
            const active = location.pathname === l.path
            return (
              <Link
                key={l.path}
                to={l.path}
                className={`relative text-sm font-medium transition-colors ${
                  active
                    ? "text-red-700 font-semibold"
                    : "text-[#3b2d1f] hover:text-red-700"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg,#eab308,#b91c1c,#eab308)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
