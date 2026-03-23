import React from 'react';
import styles from './QuizCompletion.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const QuizCompletion = () => {
    const navigate = useNavigate();

    (function() {
        setTimeout(() => {
            navigate('/students/quiz-results');
        }, 2000);
    })();

  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles['quiz-screen']}>
        {/* Main Content */}
        <main className={styles['quiz-screen__content']}>
            <div className={styles['quiz-screen__alert']}>
            <span className={styles['quiz-screen__alert-icon']}>✨ ¡Excelente!</span>
            </div>

            <div className={styles['quiz-screen__reward-visual']}>
            <div className={styles['quiz-screen__circle-outer']}>
                <div className={styles['quiz-screen__circle-inner']}>
                {/* <span className={styles['quiz-screen__star']}>⭐</span> */}
                    <svg
                        className={styles['quiz-screen__star']}
                        width="140"
                        height="140"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <polygon
                            points="40,8 48.09,29.26 70,30.91 52.18,45.18 58.18,67.09 40,55.45 21.82,67.09 27.82,45.18 10,30.91 31.91,29.26"
                            fill="currentColor"
                            stroke="#B8860B"
                            strokeWidth="3"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            </div>

            <h2 className={styles['quiz-screen__main-heading']}>¡PRUEBA COMPLETADA!</h2>
            <p className={styles['quiz-screen__instruction']}>
            Espera a que el profesor cierre la sesión para ver los resultados.
            </p>

            {/* <div className="quiz-screen__points-badge">
            <span className="quiz-screen__currency-symbol">$</span>
            <span className="quiz-screen__amount">200</span>
            </div> */}
        </main>

        {/* Footer / User Icon */}
        <footer className={styles['quiz-screen__footer']}>
            <div className={styles['quiz-screen__user-avatar']}>N</div>
        </footer>
        </div>
    </div>
  );
};

export default QuizCompletion;