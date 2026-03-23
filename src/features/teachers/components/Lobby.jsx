import React from 'react';
import styles from './Lobby.module.css';
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
  const accessCode = ['8', '2', '3', '4', '1', '9'];

  const questions = [
    { id: 1, text: '¿Qué es Bitcoin?' },
    { id: 2, text: '¿Quién creó Bitcoin?' }
  ];

  const students = [
    { id: 1, name: 'Mateo G.', status: 'ready' },
    { id: 2, name: 'Lucía F.', status: 'ready' },
    { id: 3, name: 'Santi R.', status: 'absent' },
    { id: 4, name: 'Emma V.', status: 'ready' },
    { id: 5, name: 'Nico P.', status: 'absent' },
    { id: 6, name: 'Valen M.', status: 'ready' },
    { id: 7, name: 'Sofía S.', status: 'absent' },
    { id: 8, name: 'Leo T.', status: 'ready' }
  ];

  const readyCount = students.filter(s => s.status === 'ready').length;

  const navigate = useNavigate();

  return (
    <div className={styles.lobby}>
      {/* Cabecera superior */}
      <header className={styles.lobby__topbar}>
        <div className={styles['lobby__topbar-left']}>
          <button className={styles['lobby__back-btn']}>
            <span>←</span>
          </button>
          <h2 className={styles.lobby__title}>Configuración de Sesión</h2>
        </div>
        <div className={styles['lobby__topbar-right']}>
          <button className={styles['lobby__icon-btn']}>🔗</button>
          <button className={styles['lobby__icon-btn']}>⚙️</button>
        </div>
      </header>

      {/* Sección del Código de Acceso */}
      <section className={styles['lobby__access-section']}>
        <div className={styles['lobby__access-badge']}>CÓDIGO DE ACCESO</div>
        <div className={styles['lobby__access-code']}>
          {accessCode.map((digit, index) => (
            <div key={index} className={styles.lobby__digit}>
              {digit}
            </div>
          ))}
        </div>
      </section>

      {/* Contenido Principal (Dos Columnas) */}
      <main className={styles['lobby__main-content']}>
        {/* Panel Izquierdo: Cuestionario */}
        <div className={styles.lobby__panel}>
          <div className={styles['lobby__panel-header']}>
            <span className={styles['lobby__panel-icon']}>📖</span>
            <h3 className={styles['lobby__panel-title']}>CUESTIONARIO</h3>
          </div>
          <div className={styles['lobby__questions-list']}>
            {questions.map((q) => (
              <div key={q.id} className={styles['lobby__question-item']}>
                <span className={styles['lobby__question-number']}>#{q.id}</span>
                <p className={styles['lobby__question-text']}>{q.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Panel Derecho: Sala de Espera */}
        <div className={styles.lobby__panel}>
          <div className={styles['lobby__panel-header']}>
            <div className={styles['lobby__panel-header-left']}>
              <span className={styles['lobby__panel-icon']}>👥</span>
              <h3 className={styles['lobby__panel-title']}>SALA DE ESPERA</h3>
            </div>
            <div className={styles['lobby__counter-badge']}>
              {readyCount}/{students.length}
            </div>
          </div>
          
          <div className={styles['lobby__students-grid']}>
            {students.map((student) => (
              <div 
                key={student.id} 
                className={`${styles['lobby__student-card']} ${
                  student.status === 'ready' 
                    ? styles['lobby__student-card-ready'] 
                    : styles['lobby__student-card-absent']
                }`}
              >
                <div className={styles['lobby__student-avatar']}>
                  {student.status === 'ready' ? '✨' : '👤'}
                </div>
                <div className={styles['lobby__student-info']}>
                  <p className={styles['lobby__student-name']}>{student.name}</p>
                  <p className={styles['lobby__student-status']}>
                    {student.status === 'ready' ? '¡LISTO!' : 'AUSENTE'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className={styles['lobby__waiting-message']}>
            ¡Espera a que todos tus alumnos brillen antes de empezar! ✨
          </p>
        </div>
      </main>

      {/* Barra de Acciones Fija al Bottom */}
      <footer className={styles.lobby__footer}>
        <button className={styles['lobby__btn-primary']} onClick={() => navigate('/teachers/dashboard/sessions/live')}>
          ¡EMPEZAR QUIZ! <span style={{ marginLeft: '8px' }}>▶</span>
        </button>
      </footer>
    </div>
  );
};

export default Lobby;