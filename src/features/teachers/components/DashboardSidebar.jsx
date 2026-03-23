import React from 'react';
import './DashboardSidebar.css';
import { Link } from 'react-router-dom';
import {
  FaGraduationCap,
  FaHouse,
  FaChalkboardUser,
  FaUsers,
  FaChartColumn,
  FaGear
} from 'react-icons/fa6';

function DashboardSidebar() {
    return <aside className="sidebar">
        <div className="sidebar__logo-container">
          <div className="sidebar__logo-icon">
            <FaGraduationCap size={20} />
          </div>
          <div>
            <h1 className="sidebar__title">EduDash</h1>
            <p className="sidebar__subtitle">PANEL DE PROFES</p>
          </div>
        </div>

        <nav className="sidebar__nav">
          <ul className="sidebar__list">
            <li className="sidebar__item sidebar__item--active">
              <Link to="/teachers/dashboard" className="sidebar__link">
                <FaHouse />
                <span>Inicio</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/teachers/dashboard/sessions/new" className="sidebar__link">
                <FaChalkboardUser />
                <span>Sesiones</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/teachers/dashboard/students" className="sidebar__link">
                <FaUsers />
                <span>Estudiantes</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/teachers/dashboard/reports" className="sidebar__link">
                <FaChartColumn />
                <span>Reportes</span>
              </Link>
            </li>
            <li className="sidebar__item">
              <Link to="/teachers/dashboard/settings" className="sidebar__link">
                <FaGear />
                <span>Configuración</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="sidebar__support-card">
          <p className="sidebar__support-label">soporte</p>
          <button className="sidebar__support-button">AYUDA Y TUTORIALES</button>
        </div>

        <div className="sidebar__user">
          <div className="sidebar__avatar">P</div>
          <div className="sidebar__user-info">
            <p className="sidebar__user-name"><b>Profe de Prueba</b></p>
            <p className="sidebar__user-status">DOCENTE ACTIVO</p>
          </div>
        </div>
        
        <button className="sidebar__logout">
          <span className="sidebar__icon">🚪</span> CERRAR SESIÓN
        </button>
      </aside>
}

export default DashboardSidebar;