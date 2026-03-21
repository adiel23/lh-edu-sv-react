import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './features/home/pages/HomePage';
import EnterSessionPage from './features/students/pages/EnterSessionPage';
import DashboardPage from './features/teachers/pages/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/students/enter-session" element={<EnterSessionPage/>} />
        <Route path="/teachers/dashboard" element={<DashboardPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;