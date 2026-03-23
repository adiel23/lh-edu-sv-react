import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import { Outlet } from 'react-router-dom';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <DashboardSidebar/>

      <main className={styles.main}>
        <header className={styles.header}>
          <p className={styles.header__breadcrumb}>ACADEMIA HODLER</p>
          <div className={styles.header__location}>
              <p className={styles.header__city}>SAN SALVADOR</p>
              <p className={styles.header__date}>20 Mar, 2026</p>
          </div>
        </header>
        <Outlet/>
      </main>
    </div>
  );
};

export default DashboardPage;