import React from 'react';
import styles from './QuizResults.module.css';
import Header from '../components/Header';

const QuizResults = () => {
  const students = [
    { rank: 1, name: 'Alex Rivers', grade: '6TO GRADO', points: '2,500', prize: '🏆' },
    { rank: 2, name: 'Sam Smith', grade: '6TO GRADO', points: '1,850', prize: '⭐' },
    { rank: 3, name: 'Jordan Lee', grade: '6TO GRADO', points: '1,200', prize: '⭐' },
  ];

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
            <span className={styles['hero-card__badge']}>MEJOR DESEMPEÑO</span>
            <h2 className={styles['hero-card__main-title']}>Alex Rivers es el campeón!</h2>
            <p className={styles['hero-card__description']}>
                Ha ganado el Trofeo Bitcoin por su excelente participación y puntuación perfecta.
            </p>
            </div>
            <div className={styles['hero-card__shape']}></div>
        </section>

        {/* Leaderboard Table */}
        <div className={styles.leaderboard}>
            <div className={styles['leaderboard__header']}>
            <span>RANGO</span>
            <span>ESTUDIANTE</span>
            <span>PUNTAJE</span>
            <span>PREMIO</span>
            </div>
            
            <div className={styles['leaderboard__body']}>
            {students.map((student) => (
                <div key={student.rank} className={`${styles['leaderboard__row']} ${student.rank === 1 ? styles['leaderboard__row--highlighted'] : ''}`}>
                <div className={styles['leaderboard__rank']}>
                    {student.rank} {student.rank === 1 && <span className={styles.icon}>🎗️</span>}
                </div>
                <div className={styles['leaderboard__student']}>
                    <div className={styles['leaderboard__avatar']}>{student.name.charAt(0)}</div>
                    <div>
                    <div className={styles['leaderboard__name']}>{student.name}</div>
                    <div className={styles['leaderboard__grade']}>{student.grade}</div>
                    </div>
                </div>
                <div className={styles['leaderboard__points']}>
                    <strong>{student.points}</strong> <span className={styles.unit}>PTS</span>
                </div>
                <div className={styles['leaderboard__prize-icon']}>
                    <div className={`${styles['icon-circle']} ${student.rank === 1 ? styles['icon-circle--gold'] : ''}`}>
                    {student.prize}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Stats Grid */}
        <footer className={styles['stats-grid']}>
            <div className={styles['stat-card']}>
            <div className={`${styles['stat-card__icon']} ${styles['stat-card__icon--orange']}`}>📈</div>
            <div className={styles['stat-card__info']}>
                <span className={styles['stat-card__label']}>PUNTAJE PROMEDIO</span>
                <div className={styles['stat-card__value']}>1,850 <span className={styles.unit}>PTS</span></div>
            </div>
            </div>
            <div className={styles['stat-card']}>
            <div className={`${styles['stat-card__icon']} ${styles['stat-card__icon--green']}`}>👥</div>
            <div className={styles['stat-card__info']}>
                <span className={styles['stat-card__label']}>TOTAL PARTICIPANTES</span>
                <div className={styles['stat-card__value']}>42 <span className={styles.unit}>ALUMNOS</span></div>
            </div>
            </div>
        </footer>
        </div>
    </div>
  );
};

export default QuizResults;