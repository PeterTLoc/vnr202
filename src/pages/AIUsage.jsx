import React from "react"
import { motion } from "framer-motion"
import { BookOpen, CheckCircle, PenTool, Shield } from "lucide-react"

const AIUsage = () => {
  const items = [
    {
      icon: PenTool,
      title: "Công cụ",
      text: "Chatbot AI hỗ trợ tìm kiếm thông tin, gợi ý cấu trúc, và giúp phân tích, tổng hợp tài liệu.",
    },
    {
      icon: BookOpen,
      title: "Mục đích",
      text: "Dùng AI để hỗ trợ quá trình học tập và sáng tạo, không thay thế tư duy của sinh viên.",
    },
    {
      icon: CheckCircle,
      title: "Kiểm chứng",
      text: "Đối chiếu nội dung với Giáo trình Lý luận chính trị, Nghị quyết Đại hội XIII của Đảng.",
    },
    {
      icon: Shield,
      title: "Cam kết",
      text: "Không sử dụng AI để tạo ra toàn bộ sản phẩm, đảm bảo tính trung thực và trách nhiệm học thuật.",
    },
  ]

  return (
    <main
      className="relative flex flex-col items-center justify-center text-center 
                 px-4 pt-20 pb-12 min-h-screen 
                 bg-[#fdfaf5] text-[#2b2119] overflow-hidden"
    >
      {/* === Soft Background === */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_#fffbe6_0%,_#f7f1df_60%)] opacity-90"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-7 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"
      />

      {/* === Gradient Borders === */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      {/* === Title & Subtitle === */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-serif font-bold text-red-700 mb-3"
      >
        Sử Dụng AI & Tính Trung Thực Học Thuật
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-yellow-800 italic mb-6 max-w-2xl"
      >
        “AI là công cụ hỗ trợ — tri thức và đạo đức mới là nền tảng của học thuật.”
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="h-[2px] w-40 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 mb-10"
      />

      {/* === Info Grid === */}
      <div className="max-w-5xl w-full text-left grid md:grid-cols-2 gap-8">
        {items.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <Icon className="w-6 h-6 text-[#b47a1b] mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-[#b47a1b] mb-1">{title}</h3>
              <p className="text-[#3c2f25] leading-relaxed">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* === Quote === */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="mt-14 max-w-2xl text-sm md:text-base text-yellow-900 italic leading-relaxed"
      >
        “Trí tuệ nhân tạo chỉ là công cụ — tri thức, đạo đức và tinh thần học thuật
        mới là nền tảng của sự phát triển bền vững.”
      </motion.p>
    </main>
  )
}

export default AIUsage
