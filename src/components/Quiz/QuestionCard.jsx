import React from "react"

const QuestionCard = ({ question, current, total, onAnswer }) => (
  <div className="flex flex-col justify-between h-full">
    <div>
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-6">
        {question.question}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.answers.map((ans, i) => (
          <button
            key={i}
            onClick={() => onAnswer(ans.correct, ans.text)}
            className="bg-[#fff8e1] border border-[#e6d3a3] 
                       hover:border-yellow-700 rounded-lg px-4 py-3 text-left
                       transition-all duration-150 shadow-sm 
                       hover:bg-[#fff3cc]"
          >
            {ans.text}
          </button>
        ))}
      </div>
    </div>

    <p className="mt-6 text-center text-sm text-yellow-800/70">
      Câu {current + 1} / {total}
    </p>
  </div>
)

export default QuestionCard
