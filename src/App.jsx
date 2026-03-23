import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './features/home/pages/HomePage';
import EnterSessionPage from './features/students/pages/EnterSessionPage';
import DashboardPage from './features/teachers/pages/DashboardPage';
import QuizPage from './features/students/pages/QuizPage';
import QuizCompletion from './features/students/pages/QuizCompletion';
import StudentQuizResults from './features/students/pages/QuizResults';
import DashboardHome from './features/teachers/components/DashboardHome';
import CreateSession from './features/teachers/components/CreateSession';
import Lobby from './features/teachers/components/Lobby';
import LiveSession from './features/teachers/components/LiveSession';
import TeacherQuizResults from './features/teachers/components/QuizResults';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/students/enter-session" element={<EnterSessionPage/>} />
        <Route path="/students/quiz" element={<QuizPage/>} />
        <Route path="/students/quiz-completion" element={<QuizCompletion/>} />
        <Route path="/students/quiz-results" element={<StudentQuizResults/>} />
        <Route path="/teachers/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardHome />} /> {/* Lo que se ve por defecto */}
          <Route path="sessions/new" element={<CreateSession/>} />
          <Route path="sessions/lobby" element={<Lobby/>} />
          <Route path="sessions/live" element={<LiveSession/>} />
          <Route path="sessions/result" element={<TeacherQuizResults/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;