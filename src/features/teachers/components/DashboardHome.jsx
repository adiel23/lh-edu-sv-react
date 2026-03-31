import React from 'react';
import styles from './DashboardHome.module.css';
import { useNavigate } from 'react-router-dom';
import { 
  LuSparkles, 
  LuPlus, 
  LuTrendingUp, 
  LuUsers, 
  LuBookOpen, 
  LuTrophy,
  LuArrowRight
} from 'react-icons/lu';

function DashboardHome() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles['bento-grid']}>
                {/* HERO CARD */}
                <section className={`${styles['bento-item']} ${styles['welcome-card']}`}>
                    <div className={styles['welcome-card__content']}>
                        <div className={styles['welcome-card__badge']}>
                            <LuSparkles size={14} /> 
                            PANEL DE CONTROL
                        </div>
                        <h2 className={styles['welcome-card__title']}>
                            ¡Hola, Profesor!
                        </h2>
                        <p className={styles['welcome-card__text']}>
                            Tus alumnos están listos. Prepárate para una sesión interactiva y potencia el aprendizaje hoy.
                        </p>
                        <div className={styles['welcome-card__actions']}>
                            <button 
                                className={`${styles.button} ${styles['button--primary']}`} 
                                onClick={() => navigate('/teachers/dashboard/sessions/new')}
                            >
                                <LuPlus size={18} /> NUEVA SESIÓN
                            </button>
                            <button 
                                className={`${styles.button} ${styles['button--secondary']}`} 
                                onClick={() => navigate('/teachers/dashboard/reports')}
                            >
                                <LuTrendingUp size={18} /> VER REPORTES
                            </button>
                        </div>
                    </div>
                    <div className={styles['welcome-card__illustration-bg']}>
                        <LuBookOpen />
                    </div>
                </section>

                {/* STAT CARDS */}
                <section className={`${styles['bento-item']} ${styles['stat-card']}`}>
                    <div className={styles['stat-card__header']}>
                        <div className={styles['stat-card__icon']}>
                            <LuUsers size={24} />
                        </div>
                        <span className={styles['stat-card__trend']}>+12%</span>
                    </div>
                    <h3 className={styles['stat-card__value']}>84</h3>
                    <p className={styles['stat-card__label']}>Estudiantes Activos</p>
                </section>

                <section className={`${styles['bento-item']} ${styles['stat-card']}`}>
                    <div className={styles['stat-card__header']}>
                        <div className={styles['stat-card__icon']}>
                            <LuBookOpen size={24} />
                        </div>
                        <span className={styles['stat-card__trend']}>Hoy</span>
                    </div>
                    <h3 className={styles['stat-card__value']}>12</h3>
                    <p className={styles['stat-card__label']}>Sesiones Impartidas</p>
                </section>

                <section className={`${styles['bento-item']} ${styles['stat-card']} ${styles['stat-card--highlight']}`}>
                    <div className={styles['stat-card__header']}>
                        <div className={styles['stat-card__icon']}>
                            <LuTrophy size={24} />
                        </div>
                        <span className={styles['stat-card__trend']}>Global</span>
                    </div>
                    <h3 className={styles['stat-card__value']}>88%</h3>
                    <p className={styles['stat-card__label']}>Efectividad Promedio</p>
                </section>
            </div>
        </div>
    )
}

export default DashboardHome;