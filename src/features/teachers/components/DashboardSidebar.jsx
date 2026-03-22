import React from 'react';
import './DashboardSidebar.css';

function DashboardSidebar() {
    return <aside className="sidebar">
        <div className="sidebar__logo-container">
          <div className="sidebar__logo-icon">🎓</div>
          <div>
            <h1 className="sidebar__title">EduDash</h1>
            <p className="sidebar__subtitle">PANEL DE PROFES</p>
          </div>
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            <li className="sidebar__item sidebar__item--active">
              <span className="sidebar__icon">🔲</span> Inicio
            </li>
            <li className="sidebar__item">
              <span className="sidebar__icon">📖</span> Sesiones
            </li>
            <li className="sidebar__item">
              <span className="sidebar__icon">👥</span> Estudiantes
            </li>
            <li className="sidebar__item">
              <span className="sidebar__icon">📊</span> Reportes
            </li>
            <li className="sidebar__item">
              <span className="sidebar__icon">⚙️</span> Configuración
            </li>
          </ul>
        </nav>

        <div className="sidebar__support-card">
          <p className="sidebar__support-label">SOPORTE</p>
          <button className="sidebar__support-button">AYUDA Y TUTORIALES</button>
        </div>

        <div className="sidebar__user">
          <div className="sidebar__avatar">P</div>
          <div className="sidebar__user-info">
            <p className="sidebar__user-name">Profe de Prueba</p>
            <p className="sidebar__user-status">DOCENTE ACTIVO</p>
          </div>
        </div>
        
        <button className="sidebar__logout">
          <span className="sidebar__icon">🚪</span> CERRAR SESIÓN
        </button>
      </aside>
}

export default DashboardSidebar;