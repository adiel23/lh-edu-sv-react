import React, { useState, useEffect } from 'react';
import styles from './Lobby.module.css';
import { useNavigate } from 'react-router-dom';
import { useDemo } from '../../../context/useDemo';
import { DEMO_LOBBY_STUDENTS } from '../../../data/demoData';
import { AVATARS } from '../../students/pages/OnboardingPage';
import { 
  LuArrowLeft, 
  LuLink, 
  LuSettings, 
  LuBookOpen, 
  LuUsers,
  LuPlay,
  LuCircleCheck
} from 'react-icons/lu';

const Lobby = () => {
  const { sessionPin, questions, startQuiz } = useDemo();
  const navigate = useNavigate();

  const [arrivedIds, setArrivedIds] = useState(new Set());

  useEffect(() => {
    const timers = DEMO_LOBBY_STUDENTS.map((s) =>
      setTimeout(() => {
        setArrivedIds((prev) => new Set([...prev, s.id]));
      }, s.joinDelay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const students = DEMO_LOBBY_STUDENTS.map((s) => ({
    ...s,
    status: arrivedIds.has(s.id) ? 'ready' : 'absent',
  }));

  const readyCount = students.filter((s) => s.status === 'ready').length;
  const pin = sessionPin ? sessionPin.split('') : ['?', '?', '?', '?', '?', '?'];

  const handleStartQuiz = () => {
    startQuiz();
    navigate('/teachers/dashboard/sessions/live');
  };

  return (
    <div className={styles.lobby}>
      <header className={styles.lobby__topbar}>
        <div className={styles['lobby__topbar-left']}>
          <button className={styles['lobby__back-btn']} onClick={() => navigate(-1)}>
            <LuArrowLeft size={20} />
          </button>
          <h2 className={styles.lobby__title}>Configuración de Sesión</h2>
        </div>
        <div className={styles['lobby__topbar-right']}>
          <button className={styles['lobby__icon-btn']} title="Copiar Link">
            <LuLink size={18} />
          </button>
          <button className={styles['lobby__icon-btn']} title="Configuración">
            <LuSettings size={18} />
          </button>
        </div>
      </header>

      <section className={styles['lobby__access-section']}>
        <div className={styles['lobby__access-badge']}>CÓDIGO DE ACCESO</div>
        <div className={styles['lobby__access-code']}>
          {pin.map((digit, index) => (
            <div key={index} className={styles.lobby__digit}>
              {digit}
            </div>
          ))}
        </div>
      </section>

      <main className={styles['lobby__main-content']}>
        <div className={styles.lobby__panel}>
          <div className={styles['lobby__panel-header']}>
            <LuBookOpen className={styles['lobby__panel-icon']} size={22} />
            <h3 className={styles['lobby__panel-title']}>CUESTIONARIO</h3>
          </div>
          <div className={styles['lobby__questions-list']}>
            {questions.map((q) => (
              <div key={q.id} className={styles['lobby__question-item']}>
                <span className={styles['lobby__question-number']}>#{q.id}</span>
                <p className={styles['lobby__question-text']}>{q.pregunta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.lobby__panel}>
          <div className={styles['lobby__panel-header']}>
            <div className={styles['lobby__panel-header-left']}>
              <LuUsers className={styles['lobby__panel-icon']} size={22} />
              <h3 className={styles['lobby__panel-title']}>SALA DE ESPERA</h3>
            </div>
            <div className={styles['lobby__counter-badge']}>
              {readyCount}/{students.length}
            </div>
          </div>
          
          <div className={styles['lobby__students-grid']}>
            {students.map((student, index) => {
              const avatarObj = AVATARS[index % AVATARS.length];
              const isReady = student.status === 'ready';
              return (
              <div 
                key={student.id} 
                className={`${styles['lobby__student-card']} ${
                  isReady ? styles['lobby__student-card-ready'] : styles['lobby__student-card-absent']
                }`}
              >
                <div className={styles['lobby__student-avatar']}>
                  {isReady ? (
                     <img src={avatarObj.image} alt={avatarObj.id} className={styles['lobby__student-img']} />
                  ) : <div className={styles['lobby__avatar-placeholder']} />}
                </div>
                <div className={styles['lobby__student-info']}>
                  <p className={styles['lobby__student-name']}>{student.name}</p>
                  <p className={styles['lobby__student-status']}>
                    {isReady ? (
                      <span className={styles['lobby__status-ready']}>
                        <LuCircleCheck size={10} /> LISTO
                      </span>
                    ) : 'ENTRANDO...'}
                  </p>
                </div>
              </div>
            )})}
          </div>

          <p className={styles['lobby__waiting-message']}>
            ¡Espera a que todos tus alumnos brillen antes de empezar! ✨
          </p>
        </div>
      </main>

      <footer className={styles.lobby__footer}>
        <button className={styles['lobby__btn-primary']} onClick={handleStartQuiz}>
          <span>¡EMPEZAR QUIZ!</span>
          <LuPlay size={18} fill="currentColor" />
        </button>
      </footer>
    </div>
  );
};

export default Lobby;