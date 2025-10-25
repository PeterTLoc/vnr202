import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle, PenTool, Shield } from "lucide-react";

const AIUsage = () => {
  const items = [
    {
      icon: <PenTool className="w-6 h-6 text-[#b47a1b]" />,
      title: "Công cụ",
      text: "ChatGPT — hỗ trợ xây dựng ý tưởng, viết mã, gợi ý cấu trúc và diễn đạt.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#b47a1b]" />,
      title: "Mục đích",
      text: "Dùng AI để hỗ trợ quá trình học tập và sáng tạo, không thay thế tư duy của sinh viên.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#b47a1b]" />,
      title: "Kiểm chứng",
      text: "Đối chiếu nội dung với Giáo trình Lý luận chính trị, Nghị quyết Đại hội XIII của Đảng.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#b47a1b]" />,
      title: "Cam kết",
      text: "Không sử dụng AI để tạo ra toàn bộ sản phẩm, đảm bảo tính trung thực và trách nhiệm học thuật.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 bg-[#fdf8ee] text-[#2b2119]">
      {/* === Subtle paper background === */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_#fffbe6_0%,_#f7f1df_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

      {/* === Decorative borders === */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-700 via-yellow-500 to-red-700" />

      {/* === Title === */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-serif font-bold text-red-700 mb-4"
      >
        Sử Dụng AI & Tính Trung Thực Học Thuật
      </motion.h1>

      {/* === Subtitle Divider === */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="h-[1.5px] w-48 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 mt-6 mb-12"
      />

      {/* === Content Grid === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="max-w-5xl w-full text-left grid md:grid-cols-2 gap-8"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-[#b47a1b] mb-1">{item.title}</h3>
              <p className="text-[#3c2f25] leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* === Divider above quote === */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-14 h-[1.5px] w-48 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600"
      />

      {/* === Quote === */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8 max-w-2xl text-sm md:text-base text-yellow-900 italic leading-relaxed"
      >
        “Trí tuệ nhân tạo chỉ là công cụ — tri thức, đạo đức và tinh thần học thuật
        mới là nền tảng của sự phát triển bền vững.”
      </motion.p>
    </div>
  );
};

export default AIUsage;
