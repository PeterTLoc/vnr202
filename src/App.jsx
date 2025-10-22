import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Content from "./pages/Content"
import QuizPage from "./pages/QuizPage"
import ChatbotPage from "./pages/ChatbotPage"
import AIUsage from "./pages/AIUsage"
import "./styles/App.css"
import MainLayout from "./layout/MainLayout"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/ai-usage" element={<AIUsage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
