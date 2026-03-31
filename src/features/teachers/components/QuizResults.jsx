import React from 'react';
import styles from './QuizResults.module.css';
import { useDemo } from '../../../context/useDemo';
import { DEMO_SIMULATED_STUDENTS } from '../../../data/demoData';
import { AVATARS } from '../../students/pages/OnboardingPage';
import { useNavigate } from 'react-router-dom';
import { 
  LuTrophy, 
  LuMedal, 
  LuChevronRight, 
  LuLayoutDashboard,
  LuShare2,
  LuDownload,
  LuTimer,
  LuCircleCheck
} from 'react-icons/lu';

const QuizResults = () => {
    const { getResults, sessionPhase } = useDemo();
    const navigate = useNavigate();

    const students = sessionPhase === 'completed'
        ? getResults()
        : [...DEMO_SIMULATED_STUDENTS]
            .map((s) => ({ ...s, isMe: false }))
            .sort((a, b) => b.correctAnswers - a.correctAnswers);

    const topThree = students.slice(0, 3);
    const others = students.slice(3);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.header__left}>
                    <div className={styles.header__badge}>SESIÓN FINALIZADA</div>
                    <h1 className={styles.header__title}>Resultados del Cuestionario</h1>
                </div>
                <div className={styles.header__actions}>
                    <button className={styles.btn_outline} title="Descargar Reporte">
                        <LuDownload size={18} />
                    </button>
                    <button className={styles.btn_outline} title="Compartir">
                        <LuShare2 size={18} />
                    </button>
                    <button className={styles.btn_primary} onClick={() => navigate('/teachers/dashboard')}>
                        Ir al Inicio
                    </button>
                </div>
            </header>

            <section className={styles.podium_section}>
                <div className={styles.podium}>
                    {/* Second Place */}
                    {topThree[1] && (
                        <div className={`${styles.podium__item} ${styles.second}`}>
                            <div className={styles.podium__avatar_wrapper}>
                                <img src={AVATARS[1 % AVATARS.length].image} alt="" className={styles.podium__avatar} />
                                <div className={styles.podium__rank_badge}>2</div>
                            </div>
                            <div className={styles.podium__info}>
                                <p className={styles.podium__name}>{topThree[1].name}</p>
                                <p className={styles.podium__score}>{topThree[1].correctAnswers} pts</p>
                            </div>
                            <div className={styles.podium__base} />
                        </div>
                    )}

                    {/* First Place */}
                    {topThree[0] && (
                        <div className={`${styles.podium__item} ${styles.first}`}>
                            <LuTrophy className={styles.podium__trophy} size={32} />
                            <div className={styles.podium__avatar_wrapper}>
                                <img src={AVATARS[0 % AVATARS.length].image} alt="" className={styles.podium__avatar} />
                                <div className={styles.podium__rank_badge}>1</div>
                            </div>
                            <div className={styles.podium__info}>
                                <p className={styles.podium__name}>{topThree[0].name}</p>
                                <p className={styles.podium__score}>{topThree[0].correctAnswers} pts</p>
                            </div>
                            <div className={styles.podium__base} />
                        </div>
                    )}

                    {/* Third Place */}
                    {topThree[2] && (
                        <div className={`${styles.podium__item} ${styles.third}`}>
                            <div className={styles.podium__avatar_wrapper}>
                                <img src={AVATARS[2 % AVATARS.length].image} alt="" className={styles.podium__avatar} />
                                <div className={styles.podium__rank_badge}>3</div>
                            </div>
                            <div className={styles.podium__info}>
                                <p className={styles.podium__name}>{topThree[2].name}</p>
                                <p className={styles.podium__score}>{topThree[2].correctAnswers} pts</p>
                            </div>
                            <div className={styles.podium__base} />
                        </div>
                    )}
                </div>
            </section>

            <section className={styles.table_section}>
                <div className={styles.table_card}>
                    <div className={styles.table_card__header}>
                        <LuMedal size={20} className={styles.icon_primary} />
                        <h2>Clasificación Completa</h2>
                    </div>
                    
                    <div className={styles.table_responsive}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>POS</th>
                                    <th>ESTUDIANTE</th>
                                    <th><LuCircleCheck size={14} /> PUNTOS</th>
                                    <th><LuTimer size={14} /> TIEMPO</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => {
                                    const avatarObj = AVATARS[index % AVATARS.length];
                                    return (
                                        <tr key={student.id} className={index < 3 ? styles.row_highlight : ''}>
                                            <td className={styles.cell_rank}>
                                                <span className={`${styles.rank_icon} ${styles['rank_' + (index + 1)]}`}>
                                                    {index + 1}
                                                </span>
                                            </td>
                                            <td>
                                                <div className={styles.student_cell}>
                                                    <div className={styles.avatar_mini}>
                                                        <img src={avatarObj.image} alt="" />
                                                    </div>
                                                    <span className={styles.name}>
                                                        {student.name}
                                                        {student.isMe && <span className={styles.me_badge}>TÚ</span>}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className={styles.cell_score}>
                                                <strong>{student.correctAnswers}</strong>
                                                <span className={styles.total_q}>/{student.totalQuestions}</span>
                                            </td>
                                            <td className={styles.cell_time}>{student.time}</td>
                                            <td className={styles.cell_action}>
                                                <button className={styles.btn_icon}>
                                                    <LuChevronRight size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuizResults;
