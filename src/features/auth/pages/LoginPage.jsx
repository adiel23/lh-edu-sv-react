import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Header from '../../../features/students/components/Header';
import { LuBookOpen, LuGraduationCap, LuCheck } from 'react-icons/lu';

function LoginPage() {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  // Funciones Profesor
  const handleTeacherLogin = () => {
    navigate('/teachers/dashboard');
  };

  // Funciones Estudiante
  const handleStudentGoogleLogin = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate('/students/onboarding', { state: { skipKeypad: true } });
    }, 2000);
  };

  const handleStudentHodlerLogin = () => {
    navigate('/students/onboarding');
  };

  return (
    <div className={styles.container}>
      <Header />
      
      {showToast && (
        <div className={styles.toast_container}>
          <LuCheck size={20} strokeWidth={3} />
          Sesión iniciada correctamente (Demo)
        </div>
      )}

      <main className={styles.login_main}>
        <div className={styles.login_card}>
          <h2 className={styles.login_title}>Elige tu rol en el Demo</h2>
          
          <div className={styles.roles_container}>
            
            {/* Profesor */}
            <div className={styles.role_section}>
              <div className={`${styles.role_icon_bg} ${styles.teacher}`}>
                <LuBookOpen size={40} strokeWidth={2.5}/>
              </div>
              <h3 className={styles.role_title}>Profesor</h3>
              <p className={styles.role_subtitle}>Crea sesiones, administra quizzes y revisa el rendimiento global.</p>
              
              <div className={styles.action_group}>
                <button className={`${styles.btn_primary} ${styles.teacher_btn}`} onClick={handleTeacherLogin}>
                  👨‍🏫 Acceder al Dashboard
                </button>
              </div>
            </div>

            {/* Estudiante */}
            <div className={styles.role_section}>
              <div className={`${styles.role_icon_bg} ${styles.student}`}>
                <LuGraduationCap size={44} strokeWidth={2.5}/>
              </div>
              <h3 className={styles.role_title}>Estudiante</h3>
              <p className={styles.role_subtitle}>Únete a clases en vivo, responde preguntas y gana Sats.</p>
              
              <div className={styles.action_group}>
                <button className={styles.btn_secondary} onClick={handleStudentGoogleLogin}>
                  <svg className={styles.google_icon} viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Iniciar sesión con Google
                </button>
                <button className={styles.btn_primary} onClick={handleStudentHodlerLogin}>
                  🔑 Entrar con Código HODLer
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
