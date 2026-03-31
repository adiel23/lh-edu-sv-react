import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import MobileNav from '../components/MobileNav';
import { Outlet } from 'react-router-dom';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const currentDate = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <div className={styles.dashboard}>
      <DashboardSidebar/>

      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.header__breadcrumb}>ACADEMIA HODLER</p>
          <div className={styles.header__location}>
              <p className={styles.header__city}>SAN SALVADOR</p>
              <p className={styles.header__date}>{currentDate}</p>
          </div>
        </header>
        <div className={styles.content_wrapper}>
          <Outlet/>
        </div>
      </main>

      <MobileNav />
    </div>
  );
};

export default DashboardPage;