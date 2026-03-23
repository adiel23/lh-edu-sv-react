import React from 'react';
import styles from './LiveSession.module.css';
import { useNavigate } from 'react-router-dom';

function LiveSession() {
    const navigate = useNavigate();
    const totalSegundos = 10;
    const [segundos, setSegundos] = React.useState(totalSegundos);

    const students = [
        { id: 1, name: 'Mateo G.', status: 'completed', progress: 100 },
        { id: 2, name: 'Lucía F.', status: 'completed', progress: 100 },
        { id: 3, name: 'Santi R.', status: 'in-progress', progress: 68 },
        { id: 4, name: 'Emma V.', status: 'completed', progress: 100 },
        { id: 5, name: 'Nico P.', status: 'in-progress', progress: 42 }
    ];

    const completedCount = students.filter((student) => student.status === 'completed').length;
    const pendingCount = students.length - completedCount;
    const completionPercent = Math.round((completedCount / students.length) * 100);
    const timerPercent = Math.round((segundos / totalSegundos) * 100);

    React.useEffect(() => {
        if (segundos <= 0) {
            navigate('/teachers/dashboard/sessions/result', { replace: true });
            return;
        }

        const motor = setInterval(() => {
            setSegundos(s => s - 1);
        }, 1000);

        return () => clearInterval(motor);
    }, [navigate, segundos]);

    return (
        <div className={styles.container}>
            <div className={styles['live-session']}>
                <section className={styles.countdown}>
                    <div className={styles['countdown__content']}>
                        <span className={styles['countdown__eyebrow']}>SESION EN VIVO</span>
                        <h1 className={styles['countdown__title']}>La sesión ya está en marcha</h1>
                        <p className={styles['countdown__subtitle']}>
                            Supervisa el avance del grupo y espera a que el temporizador llegue a cero.
                        </p>
                        <div className={styles['countdown__meta']}>
                            <div className={styles['countdown__timer-chip']}>
                                <span className={styles['countdown__timer-label']}>Tiempo restante</span>
                                <p className={styles['countdown__timer']}>{segundos}s</p>
                            </div>
                            <div className={styles['countdown__stat']}>
                                <span className={styles['countdown__stat-label']}>Avance general</span>
                                <strong className={styles['countdown__stat-value']}>{completionPercent}%</strong>
                            </div>
                        </div>
                        <div className={styles['countdown__progress-bar']}>
                            <div
                                className={styles['countdown__progress-fill']}
                                style={{ width: `${timerPercent}%` }}
                            />
                        </div>
                    </div>
                </section>

                <section className={`${styles['statistics-card']} ${styles['statistics-card--completed']}`}>
                    <span className={styles['statistics-card__eyebrow']}>Completaron</span>
                    <h2 className={styles['statistics-card__title']}>Estudiantes finalizados</h2>
                    <p className={styles['statistics-card__number']}>{completedCount} / {students.length}</p>
                    <p className={styles['statistics-card__caption']}>
                        Ya terminaron el quiz y sus respuestas quedaron registradas.
                    </p>
                    <div className={styles['statistics-card__progress-bar']}>
                        <div
                            className={styles['statistics-card__progress-fill']}
                            style={{ width: `${completionPercent}%` }}
                        />
                    </div>
                </section>

                <section className={`${styles['statistics-card']} ${styles['statistics-card--pending']}`}>
                    <span className={styles['statistics-card__eyebrow']}>Pendientes</span>
                    <h2 className={styles['statistics-card__title']}>Estudiantes en proceso</h2>
                    <p className={styles['statistics-card__number']}>{pendingCount} / {students.length}</p>
                    <p className={styles['statistics-card__caption']}>
                        Sigue su progreso antes de cerrar la sesión o pasar a resultados.
                    </p>
                    <div className={styles['statistics-card__progress-bar']}>
                        <div
                            className={`${styles['statistics-card__progress-fill']} ${styles['statistics-card__progress-fill--pending']}`}
                            style={{ width: `${100 - completionPercent}%` }}
                        />
                    </div>
                </section>

                <section className={styles.table}>
                    <div className={styles['table__topbar']}>
                        <div>
                            <h2 className={styles['table__title']}>Estudiantes en sesión</h2>
                            <p className={styles['table__subtitle']}>Estado individual y progreso del cuestionario.</p>
                        </div>
                        <span className={styles['table__badge']}>{students.length} conectados</span>
                    </div>
                    <table className={styles['table__content']}>
                        <thead className={styles['table__header']}>
                            <tr className={styles['table__row']}>
                                <th className={styles['table__cell']}>Nombre</th>
                                <th className={styles['table__cell']}>Estado</th>
                                <th className={styles['table__cell']}>Progreso</th>
                            </tr>
                        </thead>
                        <tbody className={styles['table__body']}>
                            {students.map((student) => (
                                <tr key={student.id} className={styles['table__row']}>
                                    <td className={styles['table__cell']}>
                                        <div className={styles['table__student']}>
                                            <span className={styles['table__avatar']}>{student.name.charAt(0)}</span>
                                            <span className={styles['table__name']}>{student.name}</span>
                                        </div>
                                    </td>
                                    <td className={styles['table__cell']}>
                                        <span
                                            className={`${styles['table__status']} ${
                                                student.status === 'completed'
                                                    ? styles['table__status--completed']
                                                    : styles['table__status--pending']
                                            }`}
                                        >
                                            {student.status === 'completed' ? 'Finalizado' : 'En progreso'}
                                        </span>
                                    </td>
                                    <td className={styles['table__cell']}>
                                        <div className={styles['table__progress']}>
                                            <div className={styles['table__progress-track']}>
                                                <div
                                                    className={`${styles['table__progress-fill']} ${
                                                        student.status === 'completed'
                                                            ? styles['table__progress-fill--completed']
                                                            : styles['table__progress-fill--pending']
                                                    }`}
                                                    style={{ width: `${student.progress}%` }}
                                                />
                                            </div>
                                            <span className={styles['table__progress-value']}>{student.progress}%</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
}

export default LiveSession;