import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardPlaceholder.module.css';

const DashboardPlaceholder = ({ title, icon }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>
          Estamos trabajando para traerte la mejor experiencia de {title.toLowerCase()}. 
          ¡Vuelve pronto para descubrir nuevas funcionalidades! 🚀
        </p>
        <button 
          className={styles.button}
          onClick={() => navigate('/teachers/dashboard')}
        >
          VOLVER AL INICIO
        </button>
      </div>
    </div>
  );
};

export default DashboardPlaceholder;
