import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemoProvider from './context/DemoContext';
import HomePage from './features/home/pages/HomePage';
import LoginPage from './features/auth/pages/LoginPage';
import EnterSessionPage from './features/students/pages/EnterSessionPage';
import OnboardingPage from './features/students/pages/OnboardingPage';
import DashboardPage from './features/teachers/pages/DashboardPage';
import QuizPage from './features/students/pages/QuizPage';
import QuizCompletion from './features/students/pages/QuizCompletion';
import StudentQuizResults from './features/students/pages/QuizResults';
import DashboardHome from './features/teachers/components/DashboardHome';
import CreateSession from './features/teachers/components/CreateSession';
import Lobby from './features/teachers/components/Lobby';
import LiveSession from './features/teachers/components/LiveSession';
import TeacherQuizResults from './features/teachers/components/QuizResults';
import DashboardPlaceholder from './features/teachers/components/DashboardPlaceholder';
import StudentList from './features/teachers/components/StudentList';
import TeacherReports from './features/teachers/components/TeacherReports';
import TeacherSettings from './features/teachers/components/TeacherSettings';

function App() {
  return (
    <DemoProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/students/enter-session" element={<EnterSessionPage/>} />
        <Route path="/students/onboarding" element={<OnboardingPage/>} />
        <Route path="/students/quiz" element={<QuizPage/>} />
        <Route path="/students/quiz-completion" element={<QuizCompletion/>} />
        <Route path="/students/quiz-results" element={<StudentQuizResults/>} />
        <Route path="/teachers/dashboard" element={<DashboardPage />}>
          <Route index element={<DashboardHome />} /> {/* Lo que se ve por defecto */}
          <Route path="students" element={<StudentList />} />
          <Route path="reports" element={<TeacherReports />} />
          <Route path="settings" element={<TeacherSettings />} />
          <Route path="sessions" element={<CreateSession />} />
          <Route path="sessions/new" element={<CreateSession/>} />
          <Route path="sessions/lobby" element={<Lobby/>} />
          <Route path="sessions/live" element={<LiveSession/>} />
          <Route path="sessions/result" element={<TeacherQuizResults/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </DemoProvider>
  );
}

export default App;