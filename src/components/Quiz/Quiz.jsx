import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { questions } from "./questions"

const Quiz = () => {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1)
    const next = current + 1
    next < questions.length ? setCurrent(next) : setShowScore(true)
  }

  return (
    <div className="flex flex-col items-center text-[#e8d7a0] font-serif">
      <AnimatePresence mode="wait">
        {showScore ? (
          <motion.div
            key="score"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="text-center text-xl md:text-2xl font-semibold 
            bg-[#1b1a18]/80 border border-[#a38a48]/30 rounded-xl 
            shadow-[0_0_15px_rgba(194,168,94,0.15)] px-6 py-6"
          >
            Bạn trả lời đúng <span className="text-[#c2a85e]">{score}</span> /{" "}
            <span className="text-[#c2a85e]">{questions.length}</span> câu!
            <div className="mt-6">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(194,168,94,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setScore(0)
                  setCurrent(0)
                  setShowScore(false)
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-br from-[#a38a48] to-[#c2a85e] 
                text-black rounded-lg font-semibold shadow-md"
              >
                Làm lại
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 drop-shadow-[0_0_8px_rgba(217,199,156,0.4)]">
              {questions[current].question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[current].answers.map((ans, i) => (
                <motion.button
                  key={i}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 10px rgba(194,168,94,0.3)",
                  }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleAnswer(ans.correct)}
                  className="bg-[#24221f]/70 border border-[#a38a48]/40 
                  hover:border-[#c2a85e]/60 rounded-lg px-4 py-3 text-left 
                  transition-all duration-200 shadow-[0_0_6px_rgba(194,168,94,0.05)] 
                  hover:bg-[#2e2b26]/70"
                >
                  {ans.text}
                </motion.button>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-[#c2a85e]/70">
              Câu {current + 1} / {questions.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Quiz
