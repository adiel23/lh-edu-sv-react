import React from 'react';
import './QuizResults.css';
import Header from '../components/Header';

const QuizResults = () => {
  const students = [
    { rank: 1, name: 'Alex Rivers', grade: '6TO GRADO', points: '2,500', prize: '🏆' },
    { rank: 2, name: 'Sam Smith', grade: '6TO GRADO', points: '1,850', prize: '⭐' },
    { rank: 3, name: 'Jordan Lee', grade: '6TO GRADO', points: '1,200', prize: '⭐' },
  ];

  return (
    <div className="container">
        <Header />
        <div className="dashboard">
        <header className="dashboard__header">
            <h1 className="dashboard__title">Resultados de Clase <span className="icon">⭐</span></h1>
        </header>

        {/* Hero Card */}
        <section className="hero-card">
            <div className="hero-card__content">
            <span className="hero-card__badge">MEJOR DESEMPEÑO</span>
            <h2 className="hero-card__main-title">Alex Rivers es el campeón!</h2>
            <p className="hero-card__description">
                Ha ganado el Trofeo Bitcoin por su excelente participación y puntuación perfecta.
            </p>
            </div>
            <div className="hero-card__shape"></div>
        </section>

        {/* Leaderboard Table */}
        <div className="leaderboard">
            <div className="leaderboard__header">
            <span>RANGO</span>
            <span>ESTUDIANTE</span>
            <span>PUNTAJE</span>
            <span>PREMIO</span>
            </div>
            
            <div className="leaderboard__body">
            {students.map((student) => (
                <div key={student.rank} className={`leaderboard__row ${student.rank === 1 ? 'leaderboard__row--highlighted' : ''}`}>
                <div className="leaderboard__rank">
                    {student.rank} {student.rank === 1 && <span className="icon">🎗️</span>}
                </div>
                <div className="leaderboard__student">
                    <div className="leaderboard__avatar">{student.name.charAt(0)}</div>
                    <div>
                    <div className="leaderboard__name">{student.name}</div>
                    <div className="leaderboard__grade">{student.grade}</div>
                    </div>
                </div>
                <div className="leaderboard__points">
                    <strong>{student.points}</strong> <span className="unit">PTS</span>
                </div>
                <div className="leaderboard__prize-icon">
                    <div className={`icon-circle ${student.rank === 1 ? 'icon-circle--gold' : ''}`}>
                    {student.prize}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Stats Grid */}
        <footer className="stats-grid">
            <div className="stat-card">
            <div className="stat-card__icon stat-card__icon--orange">📈</div>
            <div className="stat-card__info">
                <span className="stat-card__label">PUNTAJE PROMEDIO</span>
                <div className="stat-card__value">1,850 <span className="unit">PTS</span></div>
            </div>
            </div>
            <div className="stat-card">
            <div className="stat-card__icon stat-card__icon--green">👥</div>
            <div className="stat-card__info">
                <span className="stat-card__label">TOTAL PARTICIPANTES</span>
                <div className="stat-card__value">42 <span className="unit">ALUMNOS</span></div>
            </div>
            </div>
        </footer>
        </div>
    </div>
  );
};

export default QuizResults;