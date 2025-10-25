import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = () => {
  const { pathname } = useLocation()
  const isChatbot = pathname === "/chatbot"
  const isQuiz = pathname === "/quiz"

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8ee] text-[#2b2119] font-sans relative">
      {/* Optional subtle paper texture */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* Navbar (fixed height = 4rem / h-16) */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      {!isChatbot && !isQuiz && <Footer />}
    </div>
  )
}

export default MainLayout
