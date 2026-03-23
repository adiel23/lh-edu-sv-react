import React from 'react';

import styles from './CreateSession.module.css';
import { useNavigate } from 'react-router-dom';

const CreateSession = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.session}>
      <div className={styles.session__header_card}>
        <div className={styles.session__icon_wrapper}>
          <span className={styles.session__book_icon}>📖</span>
        </div>
        <div className={styles.session__title_wrapper}>
          <p className={styles.session__subtitle}>SESIÓN PROGRAMADA</p>
          <h2 className={styles.session__title}>What is money</h2>
        </div>
      </div>

      <div className={styles.session__form}>
        <label className={styles.session__label}>¿Para qué grado es el quizz?</label>
        <div className={styles.session__input_wrapper}>
          <select className={styles.session__select} defaultValue="6to">
            <option value="3er">3er Grado</option>
            <option value="4to">4to Grado</option>
            <option value="5to">5to Grado</option>
          </select>
          <span className={styles.session__sparkle_icon}>✨</span>
        </div>
        <label className={styles.session__label}>Seleccione el nivel del quizz</label>
        <div className={styles.session__input_wrapper}>
          <select className={styles.session__select} defaultValue="basico">
            <option value="basico">Básico</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
          <span className={styles.session__sparkle_icon}>✨</span>
        </div>
      </div>

      <div className={styles.session__options}>
        <div className={styles.session__option}>
          <span className={styles.session__option_icon}>⏱️</span>
          <span className={styles.session__option_text}>SIN LÍMITE DE TIEMPO</span>
        </div>
        <div className={styles.session__option}>
          <span className={styles.session__option_icon}>🔀</span>
          <span className={styles.session__option_text}>PREGUNTAS ALEATORIAS</span>
        </div>
      </div>

      <button className={styles.session__submit_btn} onClick={() => navigate('/teachers/dashboard/sessions/lobby')}>
        <span className={styles.session__btn_icon}>🔑</span>
        GENERAR PIN DE ACCESO
      </button>

      <p className={styles.session__footer_msg}>¡TUS ALUMNOS ESTÁN ESPERANDO! 🚀</p>
      </div>
    </div>
  );
};

export default CreateSession;