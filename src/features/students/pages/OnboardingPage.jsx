import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LuKey, LuSmile, LuRocket, LuCheck, LuArrowLeft } from 'react-icons/lu';
import styles from './OnboardingPage.module.css';
import Header from '../components/Header';

const AVATARS = [
  {
    id: "explorer",
    name: "Exploradora",
    image: "/assets/Girl-HODLer-Icon-c9c43ac2.webp",
    color: "#fdf2f8", // pink-50
  },
  {
    id: "bear",
    name: "Oso Hodler",
    image: "/assets/Little-Bear-Icon-77007473.webp",
    color: "#fff7ed", // orange-50
  },
  {
    id: "coin",
    name: "Monedita",
    image: "/assets/Little-Bitcoin-Icon-1-95bfc350.webp",
    color: "#fefce8", // yellow-50
  },
  {
    id: "hodler",
    name: "HODLer",
    image: "/assets/Little-HODLer-Icon-ef9ccaa5.webp",
    color: "#eff6ff", // blue-50
  },
  {
    id: "printer",
    name: "Impresora",
    image: "/assets/Little-Printer-Icon-daf654fe.webp",
    color: "#faf5ff", // purple-50
  },
  {
    id: "satoshi",
    name: "Satoshi",
    image: "/assets/Little-Satoshi-Icon-b50f1415.webp",
    color: "#f0fdf4", // green-50
  },
];

function OnboardingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isGoogleLogin = location.state?.skipKeypad || false;

  const [personalKey, setPersonalKey] = useState('');
  const [isKeyValidated, setIsKeyValidated] = useState(isGoogleLogin);
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[3].id);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyChange = (number) => {
    if (personalKey.length < 4) {
      const newKey = personalKey + number;
      setPersonalKey(newKey);
      if (newKey.length === 4) {
        // En el demo, cualquier llave de 4 dígitos es válida
        setTimeout(() => {
          setIsKeyValidated(true);
        }, 500);
      }
    }
  };

  const handleDeleteKey = () => {
    setPersonalKey(personalKey.slice(0, -1));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/students/quiz');
    }, 800);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.onboarding_main}>
        <div className={styles.content_wrapper}>
          <div className={styles.grid_container}>
            
            {/* Columna Izquierda: Llave Personal */}
            <div className={styles.col_key}>
              {!isKeyValidated ? (
                <div className={styles.key_card}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ backgroundColor: 'oklch(0.9 0.05 65)', padding: '0.75rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '0.5rem' }}>
                      <LuKey size={24} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900 }}>Tu Llave Personal</h3>
                    <p style={{ color: '#64748b', fontWeight: 700, fontSize: '0.875rem' }}>Ingresa los 4 dígitos</p>
                  </div>

                  <div className={styles.key_display}>
                    {[0, 1, 2, 3].map((i) => (
                      <div 
                        key={i} 
                        className={`${styles.key_slot} ${personalKey[i] ? styles.key_slot_filled : ''}`}
                      >
                        {personalKey[i] ? '•' : ''}
                      </div>
                    ))}
                  </div>

                  <div className={styles.keypad}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'delete'].map((k, idx) => {
                      if (k === '') return <div key={idx} className={styles.key_empty} />;
                      return (
                        <button
                          key={idx}
                          className={`${styles.key_btn} ${k === 'delete' ? styles.key_btn_delete : ''}`}
                          onClick={() => k === 'delete' ? handleDeleteKey() : handleKeyChange(k.toString())}
                        >
                          {k === 'delete' ? <LuArrowLeft size={20} /> : k}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className={styles.key_success_card}>
                  <div className={styles.success_icon_container}>
                    <LuCheck size={32} strokeWidth={4} />
                  </div>
                  <div>
                    <p style={{ color: '#16a34a', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>
                      {isGoogleLogin ? 'Conectado con Google' : '¡Identidad Confirmada!'}
                    </p>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900 }}>¡Hola HODLer!</h3>
                  </div>
                  {!isGoogleLogin && (
                    <button 
                      onClick={() => { setIsKeyValidated(false); setPersonalKey(''); }}
                      style={{ background: 'none', border: 'none', textDecoration: 'underline', color: '#94a3b8', cursor: 'pointer', fontSize: '0.875rem' }}
                    >
                      ¿No eres tú? Cambiar llave
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Columna Derecha: Avatares */}
            <div className={`${styles.col_avatars} ${!isKeyValidated ? styles.disabled : ''}`} style={{ opacity: isKeyValidated ? 1 : 0.5, pointerEvents: isKeyValidated ? 'auto' : 'none' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <LuSmile size={24} color="var(--primary)" />
                Elige tu avatar
              </h3>
              
              <div className={styles.avatar_grid}>
                {AVATARS.map((avatar) => {
                  const isSelected = selectedAvatar === avatar.id;
                  return (
                    <div 
                      key={avatar.id}
                      className={`${styles.avatar_card} ${isSelected ? styles.avatar_card_selected : ''}`}
                      onClick={() => setSelectedAvatar(avatar.id)}
                    >
                      {isSelected && (
                        <div className={styles.check_badge}>
                          <LuCheck size={12} strokeWidth={4} />
                        </div>
                      )}
                      <div className={styles.avatar_img_container} style={{ backgroundColor: avatar.color }}>
                        <img src={avatar.image} alt={avatar.name} className={styles.avatar_img} />
                      </div>
                      <span className={styles.avatar_name} style={{ color: isSelected ? 'var(--primary)' : '#1e293b' }}>
                        {avatar.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Final */}
            <div className={styles.footer_cta}>
              <button 
                className={styles.submit_btn} 
                onClick={handleSubmit}
                disabled={!isKeyValidated || isLoading}
              >
                {isLoading ? 'CARGANDO...' : '¡LISTO PARA EL VIAJE!'}
                <LuRocket className={styles.btn_rocket} />
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default OnboardingPage;
