import React, { useState } from 'react';
import styles from './QuizPage.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useDemo } from '../../../context/useDemo';
import { DEMO_QUESTIONS } from '../../../data/demoData';
import { AVATARS } from './OnboardingPage';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [buttonState, setButtonState] = useState('idle'); // 'idle' | 'validating' | 'correct' | 'incorrect'
  const navigate = useNavigate();
  const location = useLocation();
  const avatarId = location.state?.avatarId || 'hodler';
  const selectedAvatarObj = AVATARS.find(a => a.id === avatarId) || AVATARS[3];

  const { questions, submitAnswer } = useDemo();

  // Fallback to DEMO_QUESTIONS if student skipped the teacher flow
  const QUESTIONS = questions.length > 0 ? questions : DEMO_QUESTIONS;

  const handleSubmitAnswer = () => {
    if (!selectedOption || isTransitioning || buttonState !== 'idle') return;

    setButtonState('validating');

    setTimeout(() => {
      const isCorrect = selectedOption.correcta;
      setButtonState(isCorrect ? 'correct' : 'incorrect');
      
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(isCorrect ? [30, 50, 30] : [150]);
      }

      setTimeout(() => {
        submitAnswer(QUESTIONS[currentQuestionIndex].id, selectedOption);
        setIsTransitioning(true);

        setTimeout(() => {
          if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setButtonState('idle');
            setIsTransitioning(false);
          } else {
            navigate('/students/quiz-completion', { state: { avatarId } });
          }
        }, 400); // Wait for exit animation
      }, 600); // Wait to show correct/incorrect color
    }, 400); // Fake validation delay
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
        <div className={styles['quiz__progress-info']}>
          <span className={styles['quiz__progress-label']}>PROGRESO DEL VIAJE</span>
          <span className={styles['quiz__progress-count']}><span className={styles['quiz__progress-current']}>{currentQuestionIndex + 1}</span> / {QUESTIONS.length}</span>
        </div>
        <div className={styles['quiz__progress-bar']}>
          <div 
            className={styles['quiz__rocket']}
            style={{ left: `clamp(24px, ${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%, calc(100% - 24px))` }}
          >
            <span className={styles['quiz__rocket-tooltip']}>¡VAMOS!</span>
            <div className={styles['quiz__rocket-icon']}>🚀</div>
          </div>
          <div
            className={styles['quiz__progress-fill']}
            style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
          ></div>
        </div>
      </section>

      {/* Dynamic Transition Wrapper */}
      <div 
        key={currentQuestionIndex}
        className={`${styles['quiz__transition-wrapper']} ${isTransitioning ? styles['quiz__transition-exit'] : styles['quiz__transition-enter']}`}
      >
        {/* Question Card */}
        <section className={styles['quiz__question-card']}>
          <span className={styles['quiz__question-badge']}>{QUESTIONS[currentQuestionIndex].badge}</span>
          <h2 className={styles['quiz__question-title']}>{QUESTIONS[currentQuestionIndex].pregunta}</h2>
        </section>

        {/* Options Grid */}
        <section className={styles['quiz__options']}>
          
          {QUESTIONS[currentQuestionIndex].opciones.map((opcion, index) => {
            const isActive = selectedOption?.id === opcion.id;
            return (
              <button
                key={opcion.id}
                className={`${styles.quiz__option} ${styles[`quiz__option--${getOptionColor(opcion.id)}`]} ${isActive ? styles['quiz__option--active'] : ''}`}
                style={{ animationDelay: `${index * 60}ms` }}
                onClick={() => handleOptionClick(opcion)}
              >
                <div className={styles['quiz__option-letter']}>{opcion.id}</div>
                <span className={styles['quiz__option-text']}>{opcion.texto}</span>
                {isActive && (
                  <div className={styles['quiz__selected-avatar']} style={{ backgroundColor: selectedAvatarObj.color }}>
                    <img src={selectedAvatarObj.image} alt={selectedAvatarObj.name} />
                  </div>
                )}
              </button>
            );
          })}

        </section>
      </div>

      {/* Actions */}
      <section className={styles['quiz__actions']}>
        <button className={styles['quiz__btn-skip']}>⏩ Saltar por ahora</button>
        <button 
          className={`${styles['quiz__btn-submit']} ${selectedOption ? styles['quiz__btn-submit--active'] : ''} ${styles[`quiz__btn-submit--${buttonState}`] || ''}`} 
          onClick={handleSubmitAnswer}
        >
          {buttonState === 'idle' && 'ENVIAR RESPUESTA 🚀'}
          {buttonState === 'validating' && <span className={styles['quiz__spinner']}></span>}
          {buttonState === 'correct' && '¡CORRECTO! 🎉'}
          {buttonState === 'incorrect' && '¡INCORRECTO! 💔'}
        </button>
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