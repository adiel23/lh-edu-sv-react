import React, { useState, useEffect } from 'react';
import styles from './LiveSession.module.css';
import { useNavigate } from 'react-router-dom';
import { DEMO_LOBBY_STUDENTS } from '../../../data/demoData';
import { AVATARS } from '../../students/pages/OnboardingPage';
import { 
  LuTimer, 
  LuUsers, 
  LuCircleCheck, 
  LuLoaderCircle,
  LuLayoutDashboard,
  LuActivity
} from 'react-icons/lu';

const LiveSession = () => {
    const navigate = useNavigate();
    const totalSegundos = 30;
    const [segundos, setSegundos] = useState(totalSegundos);
    const [completedIds, setCompletedIds] = useState(new Set());

    useEffect(() => {
        const completionDelays = [4000, 8000, 14000, 20000, 26000];
        const timers = DEMO_LOBBY_STUDENTS.map((s, i) =>
            setTimeout(() => {
                setCompletedIds((prev) => new Set([...prev, s.id]));
            }, completionDelays[i] ?? 5000)
        );
        return () => timers.forEach(clearTimeout);
    }, []);

    useEffect(() => {
        if (segundos <= 0) {
            navigate('/teachers/dashboard/sessions/result', { replace: true });
            return;
        }
        const motor = setInterval(() => {
            setSegundos((s) => s - 1);
        }, 1000);
        return () => clearInterval(motor);
    }, [navigate, segundos]);

    const students = DEMO_LOBBY_STUDENTS.map((s) => ({
        id: s.id,
        name: s.name,
        status: completedIds.has(s.id) ? 'completed' : 'in-progress',
        progress: completedIds.has(s.id) ? 100 : Math.min(90, Math.round(((totalSegundos - segundos) / totalSegundos) * 100)),
    }));

    const completedCount = students.filter((s) => s.status === 'completed').length;
    const pendingCount = students.length - completedCount;
    const completionPercent = Math.round((completedCount / students.length) * 100);
    const timerPercent = Math.round((segundos / totalSegundos) * 100);

    return (
        <div className={styles.container}>
            <div className={styles['live-session']}>
                <section className={styles.countdown}>
                    <div className={styles['countdown__content']}>
                        <div className={styles['countdown__badge']}>
                            <div className={styles['countdown__dot']} />
                            SESIÓN EN VIVO
                        </div>
                        <h1 className={styles['countdown__title']}>Monitoreo de Progreso</h1>
                        <p className={styles['countdown__subtitle']}>
                            La sesión finalizará automáticamente cuando el temporizador llegue a cero.
                        </p>
                        
                        <div className={styles['countdown__meta']}>
                            <div className={`${styles['countdown__timer-card']} ${segundos <= 5 ? styles.urgent : ''}`}>
                                <LuTimer size={24} className={styles.icon} />
                                <div>
                                    <span className={styles.label}>Tiempo</span>
                                    <p className={styles.value}>{segundos}s</p>
                                </div>
                            </div>
                            <div className={styles['countdown__stat-card']}>
                                <LuActivity size={24} className={styles.icon} />
                                <div>
                                    <span className={styles.label}>Avance</span>
                                    <p className={styles.value}>{completionPercent}%</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['countdown__progress-track']}>
                            <div
                                className={styles['countdown__progress-fill']}
                                style={{ width: `${timerPercent}%` }}
                            />
                        </div>
                    </div>
                </section>

                <div className={styles.stats_grid}>
                    <section className={`${styles['stats-card']} ${styles['stats-card--success']}`}>
                        <div className={styles['stats-card__header']}>
                            <LuCircleCheck size={20} />
                            <span>FINALIZADOS</span>
                        </div>
                        <div className={styles['stats-card__body']}>
                            <p className={styles.number}>{completedCount}</p>
                            <p className={styles.caption}>Estudiantes listos</p>
                        </div>
                    </section>

                    <section className={`${styles['stats-card']} ${styles['stats-card--info']}`}>
                        <div className={styles['stats-card__header']}>
                            <LuLoaderCircle size={20} className={styles.spin} />
                            <span>EN PROCESO</span>
                        </div>
                        <div className={styles['stats-card__body']}>
                            <p className={styles.number}>{pendingCount}</p>
                            <p className={styles.caption}>Estudiantes activos</p>
                        </div>
                    </section>
                </div>

                <section className={styles.table_section}>
                    <div className={styles['table__header']}>
                        <div className={styles['table__header-left']}>
                            <LuUsers size={20} />
                            <h2>Lista de Clase</h2>
                        </div>
                        <span className={styles['table__count']}>{students.length} Conectados</span>
                    </div>

                    <div className={styles.table_container}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>ESTUDIANTE</th>
                                    <th>ESTADO</th>
                                    <th>PROGRESO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, index) => {
                                    const avatarObj = AVATARS[index % AVATARS.length];
                                    const isDone = student.status === 'completed';
                                    return (
                                    <tr key={student.id} className={isDone ? styles.row_done : ''}>
                                        <td>
                                            <div className={styles.student_cell}>
                                                <div className={styles.avatar_mini}>
                                                    <img src={avatarObj.image} alt="" />
                                                </div>
                                                <span className={styles.name}>{student.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`${styles.status_pill} ${isDone ? styles.done : styles.pending}`}>
                                                {isDone ? <LuCircleCheck size={12} /> : <LuLoaderCircle size={12} className={styles.spin} />}
                                                {isDone ? 'Finalizado' : 'En proceso'}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.progress_cell}>
                                                <div className={styles.mini_track}>
                                                    <div 
                                                        className={`${styles.mini_fill} ${isDone ? styles.fill_done : ''}`} 
                                                        style={{ width: `${student.progress}%` }} 
                                                    />
                                                </div>
                                                <span className={styles.percent}>{student.progress}%</span>
                                            </div>
                                        </td>
                                    </tr>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className={styles.actions}>
                    <button className={styles.btn_secondary} onClick={() => navigate('/teachers/dashboard')}>
                        <LuLayoutDashboard size={18} />
                        Inicio
                    </button>
                    <button className={styles.btn_primary} onClick={() => navigate('/teachers/dashboard/sessions/result')}>
                        Finalizar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LiveSession;