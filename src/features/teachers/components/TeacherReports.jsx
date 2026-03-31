import React, { useState, useEffect } from 'react';
import { 
  LuTrendingUp, 
  LuUsers, 
  LuZap, 
  LuDownload, 
  LuCalendar,
  LuArrowRight,
  LuLayoutDashboard,
  LuChevronLeft,
  LuTrophy,
  LuMedal,
  LuTimer,
  LuSearch,
  LuChevronRight
} from 'react-icons/lu';
import { AVATARS } from '../../students/pages/OnboardingPage';
import styles from './TeacherReports.module.css';

const ALL_SESSIONS = [
  { 
    id: 1, 
    title: 'Bitcoin 101: Fundamentos', 
    date: '31 Mar, 2024', 
    participants: 24, 
    avgScore: 85,
    reward: '+100 SATS',
    results: [
      { id: 1, name: 'Lucía F.', correctAnswers: 12, totalQuestions: 12, time: '2:15' },
      { id: 2, name: 'Mateo G.', correctAnswers: 11, totalQuestions: 12, time: '2:30' },
      { id: 3, name: 'Emma V.', correctAnswers: 10, totalQuestions: 12, time: '2:45' },
      { id: 4, name: 'Santi R.', correctAnswers: 9, totalQuestions: 12, time: '3:00' },
    ]
  },
  { 
    id: 2, 
    title: 'Minería Digital y Consenso', 
    date: '28 Mar, 2024', 
    participants: 18, 
    avgScore: 72,
    reward: '+250 SATS',
    results: [
      { id: 5, name: 'Nico P.', correctAnswers: 10, totalQuestions: 10, time: '1:45' },
      { id: 6, name: 'Sofía L.', correctAnswers: 9, totalQuestions: 10, time: '2:00' },
      { id: 7, name: 'Hugo D.', correctAnswers: 8, totalQuestions: 10, time: '2:10' },
    ]
  },
  { 
    id: 3, 
    title: 'Lightning Network: Futuro', 
    date: '25 Mar, 2024', 
    participants: 30, 
    avgScore: 91,
    reward: '+150 SATS',
    results: [
      { id: 8, name: 'Leo M.', correctAnswers: 15, totalQuestions: 15, time: '3:10' },
      { id: 9, name: 'Clara S.', correctAnswers: 14, totalQuestions: 15, time: '3:20' },
      { id: 10, name: 'Eva B.', correctAnswers: 13, totalQuestions: 15, time: '3:30' },
    ]
  },
  { 
    id: 4, 
    title: 'Seguridad y Wallets', 
    date: '20 Mar, 2024', 
    participants: 22, 
    avgScore: 68,
    reward: '+300 SATS',
    results: [
      { id: 11, name: 'Tomas J.', correctAnswers: 8, totalQuestions: 10, time: '4:05' },
      { id: 12, name: 'Luna W.', correctAnswers: 7, totalQuestions: 10, time: '4:15' },
      { id: 13, name: 'Felix K.', correctAnswers: 6, totalQuestions: 10, time: '4:20' },
    ]
  }
];

const PERFORMANCE_DATA = [
    { label: 'Fundamentos', value: 85, sessionId: 1 },
    { label: 'Minería', value: 72, sessionId: 2 },
    { label: 'Lightning', value: 91, sessionId: 3 },
    { label: 'Wallets', value: 68, active: true, sessionId: 4 },
    { label: 'Escalabilidad', value: 75, sessionId: 3 }, // Map to existing IDs for demo
    { label: 'Seguridad', value: 82, sessionId: 4 },
];

const TeacherReports = () => {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'list' | 'podium'
  const [sourceView, setSourceView] = useState('dashboard'); // To track where we came from
  const [selectedSession, setSelectedSession] = useState(null);
  const [animatedBars, setAnimatedBars] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedBars(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBarClick = (sessionId) => {
    const session = ALL_SESSIONS.find(s => s.id === sessionId);
    if (session) {
      setSelectedSession(session);
      setSourceView('dashboard');
      setView('podium');
    }
  };

  return (
    <div className={styles.container}>
      {view === 'dashboard' ? (
        <>
          <header className={styles.header}>
            <div className={styles.header__content}>
              <div className={styles.badge}>REPORTES DE ACADEMIA</div>
              <h1 className={styles.title}>Análisis de Rendimiento</h1>
              <p className={styles.subtitle}>Monitorea el progreso de tus grupos y la distribución de sats.</p>
            </div>
            <button className={styles.export_btn} onClick={() => alert('Generando PDF...')}>
              <LuDownload size={20} />
              <span>EXPORTAR DATA</span>
            </button>
          </header>

      {/* KPI Cards */}
      <div className={styles.kpi_grid}>
        <div className={styles.kpi_card}>
          <div className={styles.kpi_card__header}>
            <div className={`${styles.icon_box} ${styles.bg_orange}`}>
              <LuTrendingUp size={22} />
            </div>
            <div className={styles.trend_badge_up}>+12.5%</div>
          </div>
          <div className={styles.kpi_card__body}>
            <h3 className={styles.kpi_value}>88%</h3>
            <p className={styles.kpi_label}>Puntaje Promedio</p>
          </div>
        </div>

        <div className={styles.kpi_card}>
          <div className={styles.kpi_card__header}>
            <div className={`${styles.icon_box} ${styles.bg_blue}`}>
              <LuUsers size={22} />
            </div>
            <div className={styles.trend_badge_neutral}>ESTABLE</div>
          </div>
          <div className={styles.kpi_card__body}>
            <h3 className={styles.kpi_value}>94%</h3>
            <p className={styles.kpi_label}>Participación</p>
          </div>
        </div>

        <div className={styles.kpi_card}>
          <div className={styles.kpi_card__header}>
            <div className={`${styles.icon_box} ${styles.bg_purple}`}>
              <LuZap size={22} />
            </div>
            <div className={styles.trend_badge_up}>+2.4k</div>
          </div>
          <div className={styles.kpi_card__body}>
            <h3 className={styles.kpi_value}>8,250</h3>
            <p className={styles.kpi_label}>Sats Repartidos</p>
          </div>
        </div>
      </div>

      <div className={styles.main_content}>
        {/* Performance Chart */}
        <section className={styles.chart_card}>
          <div className={styles.card_header}>
            <div className={styles.card_header__info}>
              <h4 className={styles.card_header__title}>Puntaje por Sesión</h4>
              <p className={styles.card_header__subtitle}>Últimos 6 cuestionarios finalizados</p>
            </div>
            <LuCalendar size={20} className={styles.icon_muted} />
          </div>
          
          <div className={styles.chart_container}>
            {PERFORMANCE_DATA.map((item, idx) => (
              <div key={idx} className={styles.chart_bar_group}>
                <div className={styles.bar_wrapper}>
                  <div 
                    className={`${styles.bar} ${item.active ? styles.bar_active : ''}`}
                    style={{ height: animatedBars ? `${item.value}%` : '0%' }}
                    onClick={() => handleBarClick(item.sessionId)}
                  >
                    <span className={styles.bar_tooltip}>{item.value}%</span>
                  </div>
                </div>
                <span className={styles.bar_label}>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className={styles.activity_card}>
          <div className={styles.card_header}>
            <h4 className={styles.card_header__title}>Actividad Reciente</h4>
            <button className={styles.view_all_btn} onClick={() => setView('list')}>
              VER TODAS <LuArrowRight size={14} />
            </button>
          </div>
          
          <div className={styles.activity_list}>
            {ALL_SESSIONS.slice(0, 3).map((activity) => (
              <div 
                key={activity.id} 
                className={styles.activity_item}
                onClick={() => {
                  setSelectedSession(activity);
                  setView('podium');
                }}
              >
                <div className={styles.activity_item__main}>
                  <div className={styles.activity_icon}>
                    <LuLayoutDashboard size={18} />
                  </div>
                  <div className={styles.activity_info}>
                    <p className={styles.activity_name}>{activity.title}</p>
                    <div className={styles.activity_meta}>
                      <span className={styles.meta_pill}>{activity.date}</span>
                      <span className={styles.meta_pill}>{activity.participants} Alumnos</span>
                    </div>
                    
                    {/* Podium Summary */}
                    <div className={styles.winners_row_minimal}>
                      <span className={styles.medal_mini}>🥇 {activity.results[0].name}</span>
                      <span className={styles.medal_mini}>🥈 {activity.results[1].name}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.reward_tag}>
                  <LuZap size={12} />
                  {activity.reward}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      </>
      ) : view === 'list' ? (
        <section className={styles.full_list_view}>
          <div className={styles.view_header}>
            <button className={styles.back_btn} onClick={() => setView('dashboard')}>
              <LuChevronLeft size={20} /> VOLVER
            </button>
            <h2 className={styles.view_title}>Historial Completo</h2>
          </div>

          <div className={styles.search_bar}>
            <LuSearch size={20} className={styles.search_icon} />
            <input 
              type="text" 
              placeholder="Buscar por sesión o tema..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={`${styles.activity_card} ${styles.full_list_card}`}>
            <div className={styles.activity_list}>
              {ALL_SESSIONS
                .filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((session) => (
                <div 
                  key={session.id} 
                  className={styles.activity_item}
                  onClick={() => {
                    setSelectedSession(session);
                    setSourceView('list');
                    setView('podium');
                  }}
                >
                  <div className={styles.activity_item__main}>
                    <div className={styles.activity_icon}>
                      <LuTrophy size={18} />
                    </div>
                    <div className={styles.activity_info}>
                      <p className={styles.activity_name}>{session.title}</p>
                      <div className={styles.activity_meta}>
                        <span className={styles.meta_pill}>{session.date}</span>
                        <span className={styles.meta_pill}>{session.participants} Alumnos</span>
                        <span className={styles.meta_pill_score}>{session.avgScore}% Promedio</span>
                      </div>
                    </div>
                  </div>
                  <button className={styles.view_detail_btn}>
                    VER PODIO <LuChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* PODIUM VIEW */
        <section className={styles.podium_view}>
          <div className={styles.view_header}>
            <button 
              className={styles.back_btn} 
              onClick={() => setView(sourceView)}
            >
              <LuChevronLeft size={20} /> 
              {sourceView === 'dashboard' ? 'VOLVER AL INICIO' : 'VOLVER AL LISTADO'}
            </button>
          </div>

          <div className={styles.session_hero}>
            <div className={styles.session_hero__badge}>RESULTADOS DE SESIÓN</div>
            <h2 className={styles.session_hero__title}>{selectedSession?.title}</h2>
            <p className={styles.session_hero__meta}>Finalizada el {selectedSession?.date} • {selectedSession?.participants} Participantes</p>
          </div>

          <div className={styles.podium_container_card}>
             <div className={styles.podium}>
                  {/* Second Place */}
                  <div className={`${styles.podium__item} ${styles.second}`}>
                      <div className={styles.podium__avatar_wrapper}>
                          <img src={AVATARS[1].image} alt="" className={styles.podium__avatar} />
                          <div className={styles.podium__rank_badge}>2</div>
                      </div>
                      <div className={styles.podium__info}>
                          <p className={styles.podium__name}>{selectedSession.results[1]?.name}</p>
                          <p className={styles.podium__score}>{selectedSession.results[1]?.correctAnswers} pts</p>
                      </div>
                      <div className={styles.podium__base} />
                  </div>

                  {/* First Place */}
                  <div className={`${styles.podium__item} ${styles.first}`}>
                      <LuTrophy className={styles.podium__trophy} size={32} />
                      <div className={styles.podium__avatar_wrapper}>
                          <img src={AVATARS[0].image} alt="" className={styles.podium__avatar} />
                          <div className={styles.podium__rank_badge}>1</div>
                      </div>
                      <div className={styles.podium__info}>
                          <p className={styles.podium__name}>{selectedSession.results[0]?.name}</p>
                          <p className={styles.podium__score}>{selectedSession.results[0]?.correctAnswers} pts</p>
                      </div>
                      <div className={styles.podium__base} />
                  </div>

                  {/* Third Place */}
                  <div className={`${styles.podium__item} ${styles.third}`}>
                      <div className={styles.podium__avatar_wrapper}>
                          <img src={AVATARS[2].image} alt="" className={styles.podium__avatar} />
                          <div className={styles.podium__rank_badge}>3</div>
                      </div>
                      <div className={styles.podium__info}>
                          <p className={styles.podium__name}>{selectedSession.results[2]?.name}</p>
                          <p className={styles.podium__score}>{selectedSession.results[2]?.correctAnswers} pts</p>
                      </div>
                      <div className={styles.podium__base} />
                  </div>
              </div>

              {/* Detail Table */}
              <div className={styles.mini_table}>
                 <div className={styles.mini_table__header}>
                    <LuMedal size={18} /> 
                    <span>Clasificación</span>
                 </div>
                 <div className={styles.mini_table__list}>
                    {selectedSession.results.map((r, i) => (
                      <div key={r.id} className={styles.mini_table__item}>
                        <span className={styles.mini_rank}>{i + 1}</span>
                        <span className={styles.mini_name}>{r.name}</span>
                        <span className={styles.mini_score}>
                           <LuTimer size={12} /> {r.time}
                        </span>
                        <span className={styles.mini_points}>
                          <strong>{r.correctAnswers}</strong>/{r.totalQuestions}
                        </span>
                      </div>
                    ))}
                 </div>
              </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TeacherReports;
