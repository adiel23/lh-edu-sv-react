import React, { useState, useEffect } from 'react';
import { LuSearch, LuFilter, LuStar, LuCircleDollarSign } from 'react-icons/lu';
import { AVATARS } from '../../students/pages/OnboardingPage';
import styles from './StudentList.module.css';

const INITIAL_STUDENTS = [
  { id: 1, name: "Alex Miranda", sessions: 12, sats: 1200, avatarId: "explorer" },
  { id: 2, name: "Sofia Portillo", sessions: 10, sats: 800, avatarId: "bear" },
  { id: 3, name: "Lucas Garcia", sessions: 8, sats: 500, avatarId: "hodler" },
  { id: 4, name: "Mateo Rivas", sessions: 15, sats: 1500, avatarId: "printer" },
  { id: 5, name: "Elena Cruz", sessions: 5, sats: 400, avatarId: "satoshi" },
  { id: 6, name: "Diego Sol", sessions: 20, sats: 2500, avatarId: "coin" },
];

const StudentList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [students, setStudents] = useState(INITIAL_STUDENTS);

    const filteredStudents = students.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getAvatar = (id) => {
        return AVATARS.find(a => a.id === id) || AVATARS[0];
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.header__info}>
                    <div className={styles.badge}>DIRECTORIO ACADÉMICO</div>
                    <h1 className={styles.title}>Tus Estudiantes</h1>
                    <p className={styles.subtitle}>Gestiona el progreso, asistencia y recompensas de tus alumnos.</p>
                </div>
            </header>

            <div className={styles.controls}>
                <div className={styles.search_bar}>
                    <LuSearch className={styles.search_bar__icon} size={20} />
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre o ID..." 
                        className={styles.search_bar__input}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className={styles.filter_btn}>
                    <LuFilter size={18} />
                    <span>FILTRAR</span>
                </button>
            </div>

            <div className={styles.grid}>
                {filteredStudents.map((student) => {
                    const avatar = getAvatar(student.avatarId);
                    return (
                        <div key={student.id} className={styles.card}>
                            <div className={styles.card__header}>
                                <div className={styles.avatar_container} style={{ '--avatar-bg': avatar.color }}>
                                    <img src={avatar.image} alt={student.name} className={styles.avatar_img} />
                                </div>
                                <div className={styles.status_dot} title="En línea" />
                            </div>
                            
                            <div className={styles.card__body}>
                                <h4 className={styles.name}>{student.name}</h4>
                                <p className={styles.student_id}>ID: LH-STU-00{student.id}</p>
                                
                                <div className={styles.stats_grid}>
                                    <div className={styles.stat_item}>
                                        <div className={styles.stat_item__value}>
                                            <LuStar size={14} className={styles.icon_orange} />
                                            <span>{student.sessions}</span>
                                        </div>
                                        <p className={styles.stat_item__label}>Quizzes</p>
                                    </div>
                                    <div className={styles.stat_item}>
                                        <div className={styles.stat_item__value}>
                                            <LuCircleDollarSign size={14} className={styles.icon_green} />
                                            <span>{student.sats}</span>
                                        </div>
                                        <p className={styles.stat_item__label}>Sats</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.card__footer}>
                                <button className={styles.action_btn}>
                                    VER EXPEDIENTE
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {filteredStudents.length === 0 && (
                <div className={styles.empty_state}>
                    <div className={styles.empty_state__icon}>
                        <LuSearch size={48} />
                    </div>
                    <p className={styles.empty_state__text}>No encontramos resultados para "{searchTerm}"</p>
                    <button className={styles.reset_btn} onClick={() => setSearchTerm('')}>
                        Limpiar búsqueda
                    </button>
                </div>
            )}
        </div>
    );
};

export default StudentList;
