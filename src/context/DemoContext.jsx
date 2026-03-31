import React, { createContext, useState } from 'react';
import {
  DEMO_PIN,
  DEMO_QUESTIONS,
  DEMO_STUDENT_NAME,
  DEMO_SIMULATED_STUDENTS,
} from '../data/demoData';

const DemoContext = createContext(null);
export { DemoContext };

const INITIAL_STATE = {
  sessionPin: null,
  questions: [],
  studentAnswers: [],
  // 'idle' | 'lobby' | 'live' | 'completed'
  sessionPhase: 'idle',
};

function DemoProvider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);

  /** Teacher creates a session → generates PIN and loads questions */
  function createSession() {
    setState({
      sessionPin: DEMO_PIN,
      questions: DEMO_QUESTIONS,
      studentAnswers: [],
      sessionPhase: 'lobby',
    });
  }

  /** Student enters PIN → returns true if valid */
  function joinSession(pin) {
    // Para el demo, permitimos cualquier PIN y nos aseguramos de que
    // la sesión se "cree" si el estado está idle.
    if (state.sessionPhase === 'idle') {
      createSession();
    }
    return true;
  }

  /** Student submits an answer for one question */
  function submitAnswer(questionId, option) {
    setState((prev) => {
      // Remover respuesta previa para la misma pregunta si existe
      const filtered = prev.studentAnswers.filter(a => a.questionId !== questionId);
      return {
        ...prev,
        studentAnswers: [
          ...filtered,
          { questionId, selectedOptionId: option.id, isCorrect: option.correcta },
        ],
      };
    });
  }

  /** Teacher starts the quiz */
  function startQuiz() {
    setState((prev) => ({ ...prev, sessionPhase: 'live' }));
  }

  /** Student finishes the quiz */
  function endQuiz() {
    setState((prev) => ({ ...prev, sessionPhase: 'completed' }));
  }

  /** Build full results list (Alexander + simulated students), sorted by score */
  function getResults() {
    const total = state.questions.length || DEMO_QUESTIONS.length;
    const alexanderCorrect = state.studentAnswers.filter((a) => a.isCorrect).length;

    const alexander = {
      id: 'alexander',
      name: DEMO_STUDENT_NAME,
      correctAnswers: alexanderCorrect,
      totalQuestions: total,
      time: '02:30',
      isMe: true,
    };

    const all = [alexander, ...DEMO_SIMULATED_STUDENTS.map((s) => ({ ...s, isMe: false }))];

    return all.sort((a, b) => b.correctAnswers - a.correctAnswers);
  }

  /** Reset everything back to initial state */
  function resetSession() {
    setState(INITIAL_STATE);
  }

  const value = {
    ...state,
    createSession,
    joinSession,
    submitAnswer,
    startQuiz,
    endQuiz,
    getResults,
    resetSession,
    studentName: DEMO_STUDENT_NAME,
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}
export default DemoProvider;
