import React from 'react';
import './DashboardPage.css';
import DashboardSidebar from '../components/DashboardSidebar';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar/>

      {/* Contenido Principal */}
      <main className="main-content">
        <header className="header">
          <p className="header__breadcrumb">ACADEMIA HODLER</p>
          <div className="header__location">
            <p className="header__city">SAN SALVADOR</p>
            <p className="header__date">20 Mar, 2026</p>
          </div>
        </header>

        <section className="welcome-card">
          <div className="welcome-card__content">
            <div className="welcome-card__badge">⚡ PANEL DE CONTROL</div>
            <h2 className="welcome-card__title">
              ¡HOLA, PROFE DE PRUEBA! 👋
            </h2>
            <p className="welcome-card__text">
              Tus alumnos están listos. Prepárate para una gran clase hoy.
            </p>
            <div className="welcome-card__actions">
              <button className="button button--primary">
                <span className="button__icon">+</span> NUEVA SESIÓN
              </button>
              <button className="button button--secondary">
                <span className="button__icon">📊</span> VER REPORTES
              </button>
            </div>
          </div>
          <div className="welcome-card__illustration-bg">💡</div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;