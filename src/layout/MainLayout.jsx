import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = () => {
  const { pathname } = useLocation()
  const isChatbot = pathname === "/chatbot"

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-gray-100">
      <Navbar />

      <main className="pt-16"> {/* Adjusted padding-top to match approximate navbar height (py-3 + content ~4rem/64px, but pt-16=4rem for safety) */}
        <Outlet />
      </main>

      {!isChatbot && <Footer />}
    </div>
  )
}

export default MainLayout