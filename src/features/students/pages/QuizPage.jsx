import React, { useState } from 'react';
import styles from './QuizPage.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useDemo } from '../../../context/useDemo';
import { DEMO_QUESTIONS } from '../../../data/demoData';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  const { questions, submitAnswer } = useDemo();

  // Fallback to DEMO_QUESTIONS if student skipped the teacher flow
  const QUESTIONS = questions.length > 0 ? questions : DEMO_QUESTIONS;

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;

    submitAnswer(QUESTIONS[currentQuestionIndex].id, selectedOption);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      navigate('/students/quiz-completion');
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.quiz}>

      {/* Progress Section */}
      <section className={styles['quiz__progress-section']}>
        <div className={styles['quiz__rocket']}>
          <span className={styles['quiz__rocket-tooltip']}>¡VAMOS!</span>
          <div className={styles['quiz__rocket-icon']}>🚀</div>
        </div>
        <div className={styles['quiz__progress-info']}>
          <span className={styles['quiz__progress-label']}>PROGRESO DEL VIAJE</span>
          <span className={styles['quiz__progress-count']}><span className={styles['quiz__progress-current']}>{currentQuestionIndex + 1}</span> / {QUESTIONS.length}</span>
        </div>
        <div className={styles['quiz__progress-bar']}>
          <div
            className={styles['quiz__progress-fill']}
            style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      </section>

      {/* Question Card */}
      <section className={styles['quiz__question-card']}>
        <span className={styles['quiz__question-badge']}>{QUESTIONS[currentQuestionIndex].badge}</span>
        <h2 className={styles['quiz__question-title']}>{QUESTIONS[currentQuestionIndex].pregunta}</h2>
      </section>

      {/* Options Grid */}
      <section className={styles['quiz__options']}>
        
        {QUESTIONS[currentQuestionIndex].opciones.map((opcion) => {
          const isActive = selectedOption?.id === opcion.id;
          return (
            <button
              key={opcion.id}
              className={`${styles.quiz__option} ${styles[`quiz__option--${getOptionColor(opcion.id)}`]} ${isActive ? styles['quiz__option--active'] : ''}`}
              onClick={() => handleOptionClick(opcion)}
            >
              <div className={styles['quiz__option-letter']}>{opcion.id}</div>
              <span className={styles['quiz__option-text']}>{opcion.texto}</span>
            </button>
          );
        })}

      </section>

      {/* Actions */}
      <section className={styles['quiz__actions']}>
        <button className={styles['quiz__btn-skip']}>⏩ Saltar por ahora</button>
        <button className={`${styles['quiz__btn-submit']} ${selectedOption ? styles['quiz__btn-submit--active'] : ''}`} onClick={handleSubmitAnswer}>ENVIAR RESPUESTA 🚀</button>
      </section>

      {/* Footer Tip */}
      <footer className={styles['quiz__tip']}>
        <div className={styles['quiz__tip-icon']}>💡</div>
        <div className={styles['quiz__tip-content']}>
          <h3 className={styles['quiz__tip-title']}>
            "CADA RESPUESTA CORRECTA TE ACERCA AL PREMIO EN BITCOIN" ⚡
          </h3>
          <p className={styles['quiz__tip-text']}>
            "¡Recuerda que cada respuesta correcta te acerca a los 100 sats del premio final!"
          </p>
        </div>
      </footer>
      </main>
    </div>
  );
};

function getOptionColor(id) {
  switch (id) {
    case 'A': return 'blue';
    case 'B': return 'green';
    case 'C': return 'yellow';
    case 'D': return 'red';
    default: return 'default';
  }
}

export default QuizPage;