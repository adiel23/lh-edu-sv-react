import React from 'react';
import styles from './DashboardHome.module.css';
import { useNavigate } from 'react-router-dom';

function DashboardHome() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <section className={styles['welcome-card']}>
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
        </div>
    )
}

export default DashboardHome;