import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-20 border-t border-yellow-700/40 
                 bg-gradient-to-t from-black/80 to-zinc-900/60
                 backdrop-blur-sm shadow-[0_-2px_20px_rgba(255,215,0,0.15)]
                 text-gray-400 text-center py-6 px-4"
    >
      <p className="text-sm font-light tracking-wide">
        © 2025 <span className="text-yellow-400 font-medium">Nhóm 8</span> — LLCT.{" "}
        <span className="text-gray-500">All rights reserved.</span>
      </p>
      <p className="text-xs mt-2 text-gray-600">
        Designed with <span className="text-yellow-500">Tailwind</span> ✦ Powered by{" "}
        <span className="text-yellow-500">AI</span>
      </p>
    </motion.footer>
  );
};

export default Footer;
