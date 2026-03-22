import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles['header__logo-pill']} onClick={() => navigate('/')}>
                <div className={styles['header__icon-bolt-bg']}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className={styles['header__icon-bolt']}>
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                </div>
                <span className={styles['header__logo-text']}>HODLer Academy</span>
            </div>
        </header>
    )
}

export default Header;