import React from 'react';
import './QuizCompletion.css';
import { useNavigate } from 'react-router-dom';

const QuizCompletion = () => {
    const navigate = useNavigate();

    // (function() {
    //     setTimeout(() => {
    //         navigate('/students/quiz-results');
    //     }, 2000);
    // })();

  return (
    <div className="quiz-screen">
      {/* Header */}
      <header className="quiz-screen__header">
        <div className="quiz-screen__badge">
          <div className="quiz-screen__icon-container">
            <span className="quiz-screen__icon">⚡</span>
          </div>
          <div className="quiz-screen__badge-text">
            <h1 className="quiz-screen__title">HODLer Academy</h1>
            <p className="quiz-screen__subtitle">• QUIZ DE BITCOIN 101 (DEMO)</p>
          </div>
        </div>
        {/* <div className="quiz-screen__controls">
          <span className="quiz-screen__demo-tag">DEMO</span>
          <button className="quiz-screen__close-btn">×</button>
        </div> */}
      </header>

      {/* Main Content */}
      <main className="quiz-screen__content">
        <div className="quiz-screen__alert">
          <span className="quiz-screen__alert-icon">✨</span>
          ¡Excelente!
        </div>

        <div className="quiz-screen__reward-visual">
          <div className="quiz-screen__circle-outer">
            <div className="quiz-screen__circle-inner">
              <span className="quiz-screen__star">⭐</span>
            </div>
          </div>
        </div>

        <h2 className="quiz-screen__main-heading">¡PRUEBA COMPLETADA!</h2>
        <p className="quiz-screen__instruction">
          Espera a que el profesor cierre la sesión para ver los resultados.
        </p>

        {/* <div className="quiz-screen__points-badge">
          <span className="quiz-screen__currency-symbol">$</span>
          <span className="quiz-screen__amount">200</span>
        </div> */}
      </main>

      {/* Footer / User Icon */}
      <footer className="quiz-screen__footer">
        <div className="quiz-screen__user-avatar">N</div>
      </footer>
    </div>
  );
};

export default QuizCompletion;