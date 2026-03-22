import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnterSessionPage.css';

function EnterSessionPage() {
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleNumberClick = (number) => {
    if (pin.length < 6) {
      setPin(pin + number);
    }
  };

  const handleDeleteClick = () => {
    setPin(pin.slice(0, -1));
  };

  const isPinComplete = pin.length === 6;

  const handleEnterClass = () => {
    if (isPinComplete) {
      navigate('/students/quiz');
    }
  };

  return (
    <div className="enter-session-page">
      {/* Elementos decorativos de fondo */}
      <div className="enter-session-page__bg-blob"></div>
      
      <svg className="enter-session-page__bg-star" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 5L61 35H93L67 55L77 85L50 67L23 85L33 55L7 35H39L50 5Z" fill="#FDE68A" stroke="#FBBF24" strokeWidth="6" strokeLinejoin="round"/>
      </svg>

      {/* Header */}
      <header className="enter-session-page__header">
        <div className="enter-session-page__logo-pill">
          <div className="enter-session-page__icon-bolt-bg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="enter-session-page__icon-bolt">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="enter-session-page__logo-text">HODLer Academy</span>
        </div>
        <button className="enter-session-page__help-btn">
          ?
        </button>
      </header>

      {/* Main Content */}
      <main className="enter-session-page__main">
        <h1 className="enter-session-page__title">¡Únete a la diversión!</h1>
        <p className="enter-session-page__subtitle">
          Introduce tu PIN de 6 dígitos<br />para entrar a la clase
        </p>

        {/* Avatar Animado / Estático */}
        <div className="enter-session-page__avatar-face">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#FDE093" stroke="#111827" strokeWidth="4"/>
            <ellipse cx="38" cy="45" rx="3" ry="8" fill="#111827"/>
            <ellipse cx="62" cy="45" rx="3" ry="8" fill="#111827"/>
            <path d="M 45 65 Q 50 72 55 65" stroke="#111827" strokeWidth="4" fill="transparent" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Display del PIN */}
        <div className="enter-session-page__pin-display">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div key={index} className={`enter-session-page__pin-slot ${pin[index] ? 'enter-session-page__pin-slot--filled' : ''}`}>
              {pin[index] || ''}
            </div>
          ))}
        </div>

        {/* Teclado Numérico */}
        <div className="enter-session-page__keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button key={num} className="enter-session-page__key-btn" onClick={() => handleNumberClick(num.toString())}>
              {num}
            </button>
          ))}
          <div className="enter-session-page__empty-key"></div>
          <button className="enter-session-page__key-btn" onClick={() => handleNumberClick('0')}>0</button>
          <button className="enter-session-page__key-btn enter-session-page__key-btn--delete" onClick={handleDeleteClick}>
             <svg viewBox="0 0 24 24" fill="currentColor" className="enter-session-page__icon-delete">
              <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/>
            </svg>
          </button>
        </div>
      </main>

      {/* Botón Inferior */}
      <footer className="enter-session-page__footer">
        <button
          className={`enter-session-page__enter-class-btn ${isPinComplete ? 'enter-session-page__enter-class-btn--active' : ''}`}
          onClick={handleEnterClass}
          disabled={!isPinComplete}
        >
          ¡ENTRAR A CLASE! 
          <svg viewBox="0 0 24 24" fill="currentColor" className="enter-session-page__btn-bolt">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </button>
      </footer>
    </div>
  );
}

export default EnterSessionPage;