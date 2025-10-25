import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { questions } from "./questions"
import ProgressBar from "./ProgressBar"
import QuestionCard from "./QuestionCard"
import ScoreScreen from "./ScoreScreen"

const Quiz = () => {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [answers, setAnswers] = useState([])

  const handleAnswer = (correct, selected) => {
    const questionObj = questions[current]

    // Save user answer data
    setAnswers((prev) => [
      ...prev,
      {
        question: questionObj.question,
        selected,
        correctAnswer: questionObj.answers.find((a) => a.correct)?.text,
        isCorrect: correct,
      },
    ])

    if (correct) setScore(score + 1)

    // Animate progress AFTER user picks an answer
    const newProgress = ((current + 1) / questions.length) * 100
    setProgress(newProgress)

    const next = current + 1
    next < questions.length ? setCurrent(next) : setShowScore(true)
  }

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.15, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.1, ease: "easeIn" } },
  }

  const restartQuiz = () => {
    setScore(0)
    setCurrent(0)
    setProgress(0)
    setAnswers([])
    setShowScore(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full max-w-[768px] mx-auto 
                 h-[calc(100vh-290px)] rounded-xl overflow-hidden
                 bg-[#fdfaf5] text-[#2b2119]  shadow-md border border-yellow-900/10 relative"
    >
      {/* Keep bar visible above question animation */}
      {!showScore && <ProgressBar progress={progress} />}

      <div
        className="flex-1 overflow-hidden px-6 py-6 space-y-4 
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
                   relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={showScore ? "score" : current}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col justify-between p-6"
          >
            {showScore ? (
              <ScoreScreen
                score={score}
                total={questions.length}
                answers={answers}
                onRestart={restartQuiz}
              />
            ) : (
              <QuestionCard
                question={questions[current]}
                current={current}
                total={questions.length}
                onAnswer={(correct, selected) =>
                  handleAnswer(correct, selected)
                }
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Quiz
