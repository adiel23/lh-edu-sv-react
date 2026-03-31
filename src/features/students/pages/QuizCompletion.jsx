import React, { useState, useEffect } from 'react';
import styles from './QuizCompletion.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useDemo } from '../../../context/useDemo';
import { AVATARS } from './OnboardingPage';

const Confetti = () => {
    const pieces = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`,
      color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    }));
  
    return (
      <div className={styles.confettiContainer}>
        {pieces.map((p) => (
          <div
            key={p.id}
            className={styles.confettiPiece}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              backgroundColor: p.color,
            }}
          />
        ))}
      </div>
    );
  };

const QuizCompletion = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { endQuiz, getResults } = useDemo();

    const avatarId = location.state?.avatarId || 'hodler';
    const selectedAvatarObj = AVATARS.find(a => a.id === avatarId) || AVATARS[3];

    // Get final score
    const results = getResults();
    const myResult = results.find(r => r.isMe) || { correctAnswers: 0, totalQuestions: 5 };

    useEffect(() => {
        endQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className={styles.container}>
        <Confetti />
        <Header />
        
        <main className={styles['victory-main']}>
            <div className={styles['victory-card']}>
                
                <div className={styles['victory-avatar-wrapper']}>
                    <div className={styles['victory-avatar']} style={{ backgroundColor: selectedAvatarObj.color }}>
                        <img src={selectedAvatarObj.image} alt="Tu Avatar" />
                    </div>
                </div>

                <div className={styles['victory-badge']}>
                    <span className={styles['victory-badge-icon']}>✨</span>
                    ¡PRUEBA COMPLETADA!
                </div>

                <h1 className={styles['victory-title']}>¡Excelente trabajo!</h1>
                
                <div className={styles['score-display']}>
                    <div className={styles['score-numbers']}>
                        <span className={styles['score-number']}>{myResult.correctAnswers}</span>
                        <span className={styles['score-divider']}>/</span>
                        <span className={styles['score-total']}>{myResult.totalQuestions}</span>
                    </div>
                    <div className={styles['score-label']}>ACIERTOS</div>
                </div>

                <p className={styles['victory-message']}>
                    Has completado el reto en Modo Demo. Sumaste Sats para tu conocimiento.
                </p>

                <button 
                    className={styles['victory-btn']}
                    onClick={() => navigate('/students/quiz-results', { state: { avatarId } })}
                >
                    VER CLASIFICACIÓN 🏆
                </button>
            </div>
        </main>
    </div>
  );
};

export default QuizCompletion;