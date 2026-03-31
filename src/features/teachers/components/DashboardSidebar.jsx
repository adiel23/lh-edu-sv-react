import React, { useContext } from 'react';
import './DashboardSidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { DemoContext } from '../../../context/DemoContext';
import {
  LuGraduationCap,
  LuLayoutDashboard,
  LuBookOpen,
  LuUsers,
  LuTrendingUp,
  LuSettings,
  LuLogOut,
  LuLifeBuoy
} from 'react-icons/lu';

const MENU_ITEMS = [
  { path: '/teachers/dashboard', label: 'Inicio', icon: LuLayoutDashboard, exact: true },
  { path: '/teachers/dashboard/sessions', label: 'Sesiones', icon: LuBookOpen },
  { path: '/teachers/dashboard/students', label: 'Estudiantes', icon: LuUsers },
  { path: '/teachers/dashboard/reports', label: 'Reportes', icon: LuTrendingUp },
  { path: '/teachers/dashboard/settings', label: 'Configuración', icon: LuSettings },
];

function DashboardSidebar() {
  const location = useLocation();
  const { resetSession } = useContext(DemoContext);

  const handleLogout = () => {
    resetSession();
    window.location.href = '/';
  };

  const checkActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__logo-container">
        <div className="sidebar__logo-icon">
          <LuGraduationCap size={24} />
        </div>
        <div>
          <h1 className="sidebar__title">EduDash</h1>
          <p className="sidebar__subtitle">PANEL DE PROFES</p>
        </div>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {MENU_ITEMS.map((item) => (
            <li 
              key={item.path} 
              className={`sidebar__item ${checkActive(item.path, item.exact) ? 'sidebar__item--active' : ''}`}
            >
              <Link to={item.path} className="sidebar__link">
                <item.icon size={22} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <div className="sidebar__support-card">
          <span className="sidebar__support-label">soporte</span>
          <button className="sidebar__support-button">
            <LuLifeBuoy size={18} />
            AYUDA Y TUTORIALES
          </button>
        </div>

        <div className="sidebar__user">
          <div className="sidebar__avatar">P</div>
          <div className="sidebar__user-info">
            <p className="sidebar__user-name">Hola Profesor</p>
            <p className="sidebar__user-status">DOCENTE ACTIVO</p>
          </div>
        </div>
        
        <button className="sidebar__logout" onClick={handleLogout}>
          <LuLogOut size={20} /> 
          <span>CERRAR SESIÓN</span>
        </button>
      </div>
    </aside>
  );
}

export default DashboardSidebar;