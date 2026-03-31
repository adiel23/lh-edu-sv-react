import React from 'react';
import { 
  LuUser, 
  LuSchool, 
  LuBell, 
  LuLock, 
  LuSave, 
  LuCamera, 
  LuGlobe,
  LuChevronRight
} from 'react-icons/lu';
import styles from './TeacherSettings.module.css';

const TeacherSettings = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.badge}>CONFIGURACIÓN</div>
        <h1 className={styles.title}>Ajustes de Cuenta</h1>
        <p className={styles.subtitle}>Gestiona tu información personal, preferencias de la escuela y seguridad.</p>
      </header>

      <div className={styles.settings_grid}>
        <div className={styles.main_col}>
          {/* Profile Section */}
          <section className={styles.section}>
            <div className={styles.section_header}>
              <LuUser size={20} className={styles.icon_primary} />
              <h3 className={styles.section_title}>Información del Perfil</h3>
            </div>

            <div className={styles.profile_box}>
              <div className={styles.avatar_area}>
                <div className={styles.avatar_wrapper}>
                  <div className={styles.avatar_placeholder}>P</div>
                  <button className={styles.avatar_edit} title="Cambiar imagen">
                    <LuCamera size={16} />
                  </button>
                </div>
                <div className={styles.avatar_info}>
                  <p className={styles.avatar_name}>Hola Profesor</p>
                  <p className={styles.avatar_role}>Docente Verificado</p>
                </div>
              </div>

              <div className={styles.form_grid}>
                <div className={styles.form_group}>
                  <label className={styles.form_label}>Nombre Completo</label>
                  <input type="text" defaultValue="Hola Profesor" className={styles.form_input} />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.form_label}>Correo Electrónico</label>
                  <input type="email" defaultValue="profe@demo.sv" disabled className={styles.form_input} />
                </div>
                <div className={styles.form_group}>
                  <label className={styles.form_label}>Biografía</label>
                  <textarea 
                    placeholder="Escribe una breve descripción para tus alumnos..." 
                    className={styles.form_textarea}
                    defaultValue="Docente apasionado por la educación financiera y Bitcoin."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* School Section */}
          <section className={styles.section}>
            <div className={styles.section_header}>
              <LuSchool size={20} className={styles.icon_primary} />
              <h3 className={styles.section_title}>Institución Educativa</h3>
            </div>

            <div className={styles.school_box}>
              <div className={styles.info_card}>
                <div className={styles.info_card__icon}>
                  <LuGlobe size={24} />
                </div>
                <div className={styles.info_card__content}>
                  <p className={styles.info_card__label}>Escuela Vinculada</p>
                  <p className={styles.info_card__value}>Centro Escolar Nacional El Salvador</p>
                </div>
              </div>

              <div className={styles.form_group}>
                <label className={styles.form_label}>ID de Docente</label>
                <div className={styles.readonly_wrapper}>
                  <input type="text" defaultValue="TCH-8B42-SV" disabled className={styles.form_input} />
                  <LuLock size={14} className={styles.lock_icon} />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.side_col}>
          {/* Preferences */}
          <section className={styles.section}>
            <div className={styles.section_header}>
              <LuBell size={20} className={styles.icon_primary} />
              <h3 className={styles.section_title}>Preferencias</h3>
            </div>

            <div className={styles.preferences_list}>
              <div className={styles.preference_item}>
                <div className={styles.preference_info}>
                  <p className={styles.preference_label}>Notificaciones</p>
                  <p className={styles.preference_desc}>Alertas de nuevas sesiones</p>
                </div>
                <div className={styles.toggle_active}>ON</div>
              </div>
              <div className={styles.preference_item}>
                <div className={styles.preference_info}>
                  <p className={styles.preference_label}>Modo Oscuro</p>
                  <p className={styles.preference_desc}>Interfaz de noche</p>
                </div>
                <div className={styles.toggle_inactive}>OFF</div>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className={styles.section}>
            <div className={styles.section_header}>
              <LuLock size={20} className={styles.icon_primary} />
              <h3 className={styles.section_title}>Seguridad</h3>
            </div>
            
            <p className={styles.security_text}>Protege tu cuenta actualizando tu contraseña regularmente.</p>
            <button className={styles.btn_outline_full}>
              ACTUALIZAR CONTRASEÑA
              <LuChevronRight size={16} />
            </button>
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <button className={styles.btn_ghost}>Descartar cambios</button>
        <button className={styles.btn_save}>
          <LuSave size={18} />
          GUARDAR AJUSTES
        </button>
      </footer>
    </div>
  );
};

export default TeacherSettings;
