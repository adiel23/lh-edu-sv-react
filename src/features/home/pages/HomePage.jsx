import React from 'react';
import styles from './HomePage.module.css';
import Header from '../../students/components/Header';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>

      <Header/>

      <div className={styles['home-page']}>

      {/* Main Content */}
        <main className={styles['home-page__main-content']}>
          <div className={styles['home-page__badge']}>
            <span className={styles['home-page__star']}>⭐</span> ¡APRENDE Y GANA!
          </div>
          
          <h1 className={styles['home-page__main-title']}>
            <div className={styles['home-page__title-dark']}>HODLER</div>
            <div className={styles['home-page__title-orange']}>ACADEMY</div>
          </h1>
          
          <p className={styles['home-page__subtitle']}>
            La plataforma donde los mejores reciben recompensas en sats.
          </p>

          {/* Acceso Rápido al Login */}
          <div className={styles['home-page__cta-group']}>
            <button
              className={styles['home-page__demo-btn']}
              onClick={() => navigate('/login')}
              style={{ padding: '1.25rem 4rem', fontSize: '1.25rem', borderRadius: '9999px', boxShadow: '0 10px 30px rgba(255, 140, 0, 0.4)' }}
            >
              🚀 Iniciar Demo
            </button>
            <p style={{ marginTop: '1rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 600 }}>Experiencia interactiva de aprendizaje</p>
          </div>
        </main>
      </div>

       {/* Footer Features */}
        <footer className={styles['home-page__features-container']}>
          <div className={styles['home-page__feature-pill']}>
            <div className={styles['home-page__feature-icon-bg'] + ' ' + styles['home-page__feature-icon-bg--orange']}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles['home-page__feature-icon']}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className={styles['home-page__feature-text-group']}>
              <span className={styles['home-page__feature-label']}>CISTERNA LOCAL</span>
              <span className={styles['home-page__feature-title']}>Lightning</span>
            </div>
          </div>

          <div className={styles['home-page__feature-pill']}>
            <div className={styles['home-page__feature-icon-bg'] + ' ' + styles['home-page__feature-icon-bg--blue']}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles['home-page__feature-icon']}>
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
              </svg>
            </div>
            <div className={styles['home-page__feature-text-group']}>
              <span className={styles['home-page__feature-label']}>PROTECCIÓN</span>
              <span className={styles['home-page__feature-title']}>Seguridad</span>
            </div>
          </div>

          <div className={styles['home-page__feature-pill']}>
            <div className={styles['home-page__feature-icon-bg'] + ' ' + styles['home-page__feature-icon-bg--purple']}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={styles['home-page__feature-icon']}>
                <path d="M4 10h4v10H4zM10 4h4v16h-4zM16 14h4v6h-4z" />
              </svg>
            </div>
            <div className={styles['home-page__feature-text-group']}>
              <span className={styles['home-page__feature-label']}>MONITOREO</span>
              <span className={styles['home-page__feature-title']}>Analítica</span>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default HomePage;