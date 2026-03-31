import React from 'react';
import styles from './QuizResults.module.css';
import Header from '../components/Header';
import { useDemo } from '../../../context/useDemo';
import { useLocation } from 'react-router-dom';
import { AVATARS } from './OnboardingPage';

const QuizResults = () => {
  const { getResults } = useDemo();
  const location = useLocation();
  const results = getResults();
  const winner = results[0];

  const avatarId = location.state?.avatarId || 'hodler';
  const myAvatarObj = AVATARS.find(a => a.id === avatarId) || AVATARS[3];

  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.dashboard}>
        <header className={styles['dashboard__header']}>
            <h1 className={styles['dashboard__title']}>Resultados de Clase <span className={styles.icon}>⭐</span></h1>
        </header>

        {/* Hero Card */}
        <section className={styles['hero-card']}>
            <div className={styles['hero-card__content']}>
                <span className={styles['hero-card__badge']}>🏆 MEJOR DESEMPEÑO</span>
                <h2 className={styles['hero-card__main-title']}>{winner.name} es el campeón!</h2>
                <p className={styles['hero-card__description']}>
                    Ha ganado el Trofeo Bitcoin por su excelente participación y puntuación perfecta.
                </p>
            </div>
            <div className={styles['hero-card__trophy']}>
                <img src="/placeholder-trophy.png" alt="Trofeo" style={{ display: 'none' }} />
                <span style={{ fontSize: '100px', lineHeight: 1 }}>🏆</span>
            </div>
        </section>

        {/* Leaderboard Table */}
        <div className={styles.leaderboard}>
            <div className={styles['leaderboard__header']}>
            <span>RANGO</span>
            <span>ESTUDIANTE</span>
            <span>ACIERTOS</span>
            <span>PREMIO</span>
            </div>
            
            <div className={styles['leaderboard__body']}>
            {results.map((student, index) => {
                // Determine avatar: real one for me, random/deterministic for others
                const avatarObj = student.isMe ? myAvatarObj : AVATARS[index % AVATARS.length];

                return (
                    <div
                        key={student.id}
                        className={`
                            ${styles['leaderboard__row']} 
                            ${index === 0 ? styles['leaderboard__row--highlighted'] : ''} 
                            ${student.isMe ? styles['leaderboard__row--me'] : ''}
                        `}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={styles['leaderboard__rank']}>
                            {index + 1} {index === 0 && <span className={styles.icon}>🎗️</span>}
                        </div>
                        <div className={styles['leaderboard__student']}>
                            <div className={styles['leaderboard__avatar']} style={{ backgroundColor: avatarObj.color }}>
                                <img src={avatarObj.image} alt={student.name} />
                            </div>
                            <div>
                            <div className={styles['leaderboard__name']}>{student.name}{student.isMe && ' (Tú)'}</div>
                            <div className={styles['leaderboard__grade']}>6TO GRADO</div>
                            </div>
                        </div>
                        <div className={styles['leaderboard__points']}>
                            <strong>{student.correctAnswers}/{student.totalQuestions}</strong> <span className={styles.unit}>ACIERTOS</span>
                        </div>
                        <div className={styles['leaderboard__prize-icon']}>
                            <div className={`${styles['icon-circle']} ${index === 0 ? styles['icon-circle--gold'] : ''}`}>
                            {index === 0 ? '🏆' : '⭐'}
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>

        {/* Stats Grid */}
        <footer className={styles['stats-grid']}>
            <div className={styles['stat-card']}>
            <div className={`${styles['stat-card__icon']} ${styles['stat-card__icon--orange']}`}>📈</div>
            <div className={styles['stat-card__info']}>
                <span className={styles['stat-card__label']}>ACIERTOS PROMEDIO</span>
                <div className={styles['stat-card__value']}>
                  {Math.round(results.reduce((s, r) => s + r.correctAnswers, 0) / results.length)} <span className={styles.unit}>/ {results[0]?.totalQuestions}</span>
                </div>
            </div>
            </div>
            <div className={styles['stat-card']}>
            <div className={`${styles['stat-card__icon']} ${styles['stat-card__icon--green']}`}>👥</div>
            <div className={styles['stat-card__info']}>
                <span className={styles['stat-card__label']}>TOTAL PARTICIPANTES</span>
                <div className={styles['stat-card__value']}>{results.length} <span className={styles.unit}>ALUMNOS</span></div>
            </div>
            </div>
        </footer>
        </div>
    </div>
  );
};

export default QuizResults;