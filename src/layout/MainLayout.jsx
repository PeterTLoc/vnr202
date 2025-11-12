import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayout = () => {
  const { pathname } = useLocation()
  const hideFooter = pathname === "/chatbot" || pathname === "/quiz"

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8ee] text-[#2b2119] font-sans relative">
      {/* Light paper texture background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"
      />

      <Header />

      {/* Add top padding equal to header height */}
      <main className="flex-grow">
        <Outlet className="flex-grow"/>
      </main>

      {!hideFooter && <Footer />}
    </div>
  )
}

export default MainLayout
