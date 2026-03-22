import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './features/home/pages/HomePage';
import EnterSessionPage from './features/students/pages/EnterSessionPage';
import DashboardPage from './features/teachers/pages/DashboardPage';
import QuizPage from './features/students/pages/QuizPage';
import QuizCompletion from './features/students/pages/QuizCompletion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/students/enter-session" element={<EnterSessionPage/>} />
        <Route path="/students/quiz" element={<QuizPage/>} />
        <Route path="/students/quiz-completion" element={<QuizCompletion/>} />
        <Route path="/teachers/dashboard" element={<DashboardPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;