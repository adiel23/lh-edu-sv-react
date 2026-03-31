import React from 'react';
import styles from './DashboardHome.module.css';
import { useNavigate } from 'react-router-dom';

function DashboardHome() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles['bento-grid']}>
                {/* HERO CARD */}
                <section className={`${styles['bento-item']} ${styles['welcome-card']}`}>
                    <div className={styles['welcome-card__content']}>
                        <div className={styles['welcome-card__badge']}>⚡ PANEL DE CONTROL</div>
                        <h2 className={styles['welcome-card__title']}>
                        ¡HOLA, PROFE DE PRUEBA! 👋
                        </h2>
                        <p className={styles['welcome-card__text']}>
                        Tus alumnos están listos. Prepárate para una gran clase hoy.
                        </p>
                        <div className={styles['welcome-card__actions']}>
                        <button className={`${styles.button} ${styles['button--primary']}`} onClick={() => navigate('/teachers/dashboard/sessions/new')}>
                            <span className={styles['button__icon']}>+</span> NUEVA SESIÓN
                        </button>
                        <button className={`${styles.button} ${styles['button--secondary']}`}>
                            <span className={styles['button__icon']}>📊</span> VER REPORTES
                        </button>
                        </div>
                    </div>
                    <div className={styles['welcome-card__illustration-bg']}>💡</div>
                </section>

                {/* STAT CARDS */}
                <section className={`${styles['bento-item']} ${styles['stat-card']}`}>
                    <div className={styles['stat-card__icon']}>👥</div>
                    <h3 className={styles['stat-card__value']}>84</h3>
                    <p className={styles['stat-card__label']}>Estudiantes Activos</p>
                </section>

                <section className={`${styles['bento-item']} ${styles['stat-card']}`}>
                    <div className={styles['stat-card__icon']}>📝</div>
                    <h3 className={styles['stat-card__value']}>12</h3>
                    <p className={styles['stat-card__label']}>Sesiones Impartidas</p>
                </section>

                <section className={`${styles['bento-item']} ${styles['stat-card']} ${styles['stat-card--highlight']}`}>
                    <div className={styles['stat-card__icon']}>🏆</div>
                    <h3 className={styles['stat-card__value']}>88%</h3>
                    <p className={styles['stat-card__label']}>Efectividad Promedio</p>
                </section>
            </div>
        </div>
    )
}

export default DashboardHome;