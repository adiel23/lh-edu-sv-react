import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LuLayoutDashboard, 
  LuBookOpen, 
  LuUsers, 
  LuTrendingUp, 
  LuSettings 
} from 'react-icons/lu';
import styles from './MobileNav.module.css';

const navItems = [
  { path: '/teachers/dashboard', label: 'Inicio', icon: LuLayoutDashboard, exact: true },
  { path: '/teachers/dashboard/sessions', label: 'Sesiones', icon: LuBookOpen },
  { path: '/teachers/dashboard/students', label: 'Alumnos', icon: LuUsers },
  { path: '/teachers/dashboard/reports', label: 'Reportes', icon: LuTrendingUp },
  { path: '/teachers/dashboard/settings', label: 'Ajustes', icon: LuSettings },
];

const MobileNav = () => {
  const location = useLocation();

  const isActive = (item) => {
    if (item.exact) {
      return location.pathname === item.path;
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <nav className={styles.mobile_nav}>
      <div className={styles.nav_container}>
        {navItems.map((item) => {
          const active = isActive(item);
          return (
            <Link 
              key={item.path} 
              to={item.exact ? item.path : `${item.path}`} 
              className={`${styles.nav_item} ${active ? styles.active : ''}`}
            >
              <div className={styles.icon_wrapper}>
                <item.icon size={22} strokeWidth={active ? 2.5 : 2} />
                {active && <div className={styles.active_indicator} />}
              </div>
              <span className={styles.label}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
