import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react" // nice subtle icons

const ScoreScreen = ({ score, total, answers, onRestart }) => (
  <div className="flex flex-col h-full text-center overflow-y-auto px-4 py-6">
    {/* Header */}
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-yellow-800 mb-3">
        Kết quả của bạn
      </h2>
      <p className="text-lg md:text-xl text-[#2b2119]">
        Bạn trả lời đúng{" "}
        <span className="text-red-700 font-bold">{score}</span> /{" "}
        <span className="text-red-700 font-bold">{total}</span> câu!
      </p>
    </div>

    {/* Results list */}
    <div className="space-y-4 text-left max-h-[60vh] overflow-y-auto pr-2">
      {answers.map((ans, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          className={`p-4 rounded-lg border ${
            ans.isCorrect
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-[#2b2119]">
              Câu {index + 1}: {ans.question}
            </h4>
            {ans.isCorrect ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
          </div>

          <p className="text-sm">
            <span className="font-medium">Câu trả lời của bạn:</span>{" "}
            <span
              className={`${
                ans.isCorrect ? "text-green-700" : "text-red-700"
              } font-medium`}
            >
              {ans.selected}
            </span>
          </p>

          {!ans.isCorrect && (
            <p className="text-sm mt-1">
              <span className="font-medium text-yellow-900">
                Đáp án đúng:
              </span>{" "}
              <span className="text-green-700 font-medium">
                {ans.correctAnswer}
              </span>
            </p>
          )}
        </motion.div>
      ))}
    </div>

    {/* Restart Button */}
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ y: 0 }}
      onClick={onRestart}
      className="mt-6 mx-auto px-6 py-2 font-semibold rounded-md
                 bg-gradient-to-br from-yellow-600 via-red-700 to-yellow-600
                 text-[#fffbe6] transition-transform duration-200"
    >
      Làm lại
    </motion.button>
  </div>
)

export default ScoreScreen
