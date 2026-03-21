import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="home-page__header">
        <div className="home-page__logo-pill">
          <div className="home-page__icon-bolt-bg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="home-page__icon-bolt">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="home-page__logo-text">HODLer Academy</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="home-page__main-content">
        <div className="home-page__badge">
          <span className="home-page__star">⭐</span> ¡APRENDE Y GANA!
        </div>
        
        <h1 className="home-page__main-title">
          <div className="home-page__title-dark">HODLER</div>
          <div className="home-page__title-orange">ACADEMY</div>
        </h1>
        
        <p className="home-page__subtitle">
          La plataforma donde los mejores reciben recompensas en sats.
        </p>

        {/* Botón de Google OAuth */}
        <button className="home-page__google-login-btn">
          <svg className="home-page__google-icon" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Iniciar sesión con Google (OAuth)
        </button>
      </main>

      {/* Footer Features */}
      <footer className="home-page__features-container">
        <div className="home-page__feature-pill">
          <div className="home-page__feature-icon-bg home-page__feature-icon-bg--orange">
            <svg viewBox="0 0 24 24" fill="currentColor" className="home-page__feature-icon"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
          </div>
          <div className="home-page__feature-text-group">
            <span className="home-page__feature-label">CISTERNA LOCAL</span>
            <span className="home-page__feature-title">Lightning</span>
          </div>
        </div>

        <div className="home-page__feature-pill">
          <div className="home-page__feature-icon-bg home-page__feature-icon-bg--blue">
            <svg viewBox="0 0 24 24" fill="currentColor" className="home-page__feature-icon"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
          </div>
          <div className="home-page__feature-text-group">
            <span className="home-page__feature-label">PROTECCIÓN</span>
            <span className="home-page__feature-title">Seguridad</span>
          </div>
        </div>

        <div className="home-page__feature-pill">
          <div className="home-page__feature-icon-bg home-page__feature-icon-bg--purple">
            <svg viewBox="0 0 24 24" fill="currentColor" className="home-page__feature-icon"><path d="M4 10h4v10H4zM10 4h4v16h-4zM16 14h4v6h-4z" /></svg>
          </div>
          <div className="home-page__feature-text-group">
            <span className="home-page__feature-label">MONITOREO</span>
            <span className="home-page__feature-title">Analítica</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;