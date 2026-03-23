import React, { useState } from 'react';
import styles from './QuizPage.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

let correctAnswers = 0;

// change this to fetch from backend in the future
const QUESTIONS = [
  {
    id: 1,
    pregunta: "¿Qué es Bitcoin?",
    opciones: [
      { id: 'A', texto: "Dinero digital", correcta: true },
      { id: 'B', texto: "Un banco", correcta: false },
      { id: 'C', texto: "Un juego", correcta: false },
      { id: 'D', texto: "Una estafa", correcta: false },
    ],
    badge: "RETO 1"
  },
  {
    id: 2,
    pregunta: "¿Quién creó Bitcoin?",
    opciones: [
      { id: 'A', texto: "Elon Musk", correcta: false },
      { id: 'B', texto: "Satoshi Nakamoto", correcta: true },
      { id: 'C', texto: "El Gobierno", correcta: false },
      { id: 'D', texto: "Un banco central", correcta: false },
    ],
    badge: "RETO 2"
  },
  // {
  //   id: 3,
  //   pregunta: "¿Cuál es el suministro máximo de Bitcoins que existirá?",
  //   opciones: [
  //     { id: 'A', texto: "Infinito", correcta: false },
  //     { id: 'B', texto: "100 millones", correcta: false },
  //     { id: 'C', texto: "21 millones", correcta: true },
  //     { id: 'D', texto: "50 millones", correcta: false },
  //   ],
  //   badge: "RETO 3"
  // },
  // {
  //   id: 4,
  //   pregunta: "¿Cómo se llama el registro público donde se anotan todas las transacciones?",
  //   opciones: [
  //     { id: 'A', texto: "Libreta de ahorros", correcta: false },
  //     { id: 'B', texto: "Blockchain (Cadena de bloques)", correcta: true },
  //     { id: 'C', texto: "Nube bancaria", correcta: false },
  //     { id: 'D', texto: "Archivo central", correcta: false },
  //   ],
  //   badge: "RETO 4"
  // },
  // {
  //   id: 5,
  //   pregunta: "¿Qué es el 'Halving' de Bitcoin?",
  //   opciones: [
  //     { id: 'A', texto: "Cuando el precio cae a la mitad", correcta: false },
  //     { id: 'B', texto: "La división de la red en dos", correcta: false },
  //     { id: 'C', texto: "La reducción a la mitad de la recompensa por bloque", correcta: true },
  //     { id: 'D', texto: "Un impuesto del 50%", correcta: false },
  //   ],
  //   badge: "RETO 5"
  // },
  // {
  //   id: 6,
  //   pregunta: "¿Qué significa que Bitcoin sea 'descentralizado'?",
  //   opciones: [
  //     { id: 'A', texto: "Que no tiene un dueño o autoridad central", correcta: true },
  //     { id: 'B', texto: "Que solo funciona en algunos países", correcta: false },
  //     { id: 'C', texto: "Que se puede perder fácilmente", correcta: false },
  //     { id: 'D', texto: "Que es controlado por los mineros más ricos", correcta: false },
  //   ],
  //   badge: "RETO 6"
  // },
  // {
  //   id: 7,
  //   pregunta: "¿Cómo se llama la unidad mínima de un Bitcoin?",
  //   opciones: [
  //     { id: 'A', texto: "Bit", correcta: false },
  //     { id: 'B', texto: "Centavo digital", correcta: false },
  //     { id: 'C', texto: "Satoshi", correcta: true },
  //     { id: 'D', texto: "Micro-coin", correcta: false },
  //   ],
  //   badge: "RETO 7"
  // },
  // {
  //   id: 8,
  //   pregunta: "¿Cuál es el proceso mediante el cual se crean nuevos Bitcoins?",
  //   opciones: [
  //     { id: 'A', texto: "Impresión digital", correcta: false },
  //     { id: 'B', texto: "Minería", correcta: true },
  //     { id: 'C', texto: "Apuestas", correcta: false },
  //     { id: 'D', texto: "Donaciones", correcta: false },
  //   ],
  //   badge: "RETO 8"
  // },
  // {
  //   id: 9,
  //   pregunta: "¿Dónde se guardan las claves privadas para gestionar tus Bitcoins?",
  //   opciones: [
  //     { id: 'A', texto: "En un banco local", correcta: false },
  //     { id: 'B', texto: "En una Wallet (Billetera)", correcta: true },
  //     { id: 'C', texto: "En un correo electrónico", correcta: false },
  //     { id: 'D', texto: "En Facebook", correcta: false },
  //   ],
  //   badge: "RETO 9"
  // },
  // {
  //   id: 10,
  //   pregunta: "¿En qué año se lanzó la red de Bitcoin?",
  //   opciones: [
  //     { id: 'A', texto: "2000", correcta: false },
  //     { id: 'B', texto: "2015", correcta: false },
  //     { id: 'C', texto: "1998", correcta: false },
  //     { id: 'D', texto: "2009", correcta: true },
  //   ],
  //   badge: "RETO 10"
  // }
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption.correcta;

    correctAnswers += isCorrect ? 1 : 0;

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      navigate('/students/quiz-completion');
    }
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  }

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.quiz}>

      {/* Progress Section */}
      <section className={styles['quiz__progress-section']}>
        <div className={styles['quiz__rocket']}>
          <span className={styles['quiz__rocket-tooltip']}>¡VAMOS!</span>
          <div className={styles['quiz__rocket-icon']}>🚀</div>
        </div>
        <div className={styles['quiz__progress-info']}>
          <span className={styles['quiz__progress-label']}>PROGRESO DEL VIAJE</span>
          <span className={styles['quiz__progress-count']}><span className={styles['quiz__progress-current']}>{currentQuestionIndex + 1}</span> / {QUESTIONS.length}</span>
        </div>
        <div className={styles['quiz__progress-bar']}>
          <div className={styles['quiz__progress-fill']}></div>
        </div>
      </section>

      {/* Question Card */}
      <section className={styles['quiz__question-card']}>
        <span className={styles['quiz__question-badge']}>{QUESTIONS[currentQuestionIndex].badge}</span>
        <h2 className={styles['quiz__question-title']}>{QUESTIONS[currentQuestionIndex].pregunta}</h2>
      </section>

      {/* Options Grid */}
      <section className={styles['quiz__options']}>
        
        {QUESTIONS[currentQuestionIndex].opciones.map((opcion) => {
          const isActive = selectedOption?.id === opcion.id;
          return (
            <button
              key={opcion.id}
              className={`${styles.quiz__option} ${styles[`quiz__option--${getOptionColor(opcion.id)}`]} ${isActive ? styles['quiz__option--active'] : ''}`}
              onClick={() => handleOptionClick(opcion)}
            >
              <div className={styles['quiz__option-letter']}>{opcion.id}</div>
              <span className={styles['quiz__option-text']}>{opcion.texto}</span>
              {/* <div className="quiz__option-radio"></div> */}
            </button>
          );
        })}

      </section>

      {/* Actions */}
      <section className={styles['quiz__actions']}>
        <button className={styles['quiz__btn-skip']}>⏩ Saltar por ahora</button>
        <button className={`${styles['quiz__btn-submit']} ${selectedOption ? styles['quiz__btn-submit--active'] : ''}`} onClick={handleSubmitAnswer}>ENVIAR RESPUESTA 🚀</button>
      </section>

      {/* Footer Tip */}
      <footer className={styles['quiz__tip']}>
        <div className={styles['quiz__tip-icon']}>💡</div>
        <div className={styles['quiz__tip-content']}>
          <h3 className={styles['quiz__tip-title']}>
            "CADA RESPUESTA CORRECTA TE ACERCA AL PREMIO EN BITCOIN" ⚡
          </h3>
          <p className={styles['quiz__tip-text']}>
            "¡Recuerda que cada respuesta correcta te acerca a los 100 sats del premio final!"
          </p>
        </div>
      </footer>
      </main>
    </div>
  );
};

function getOptionColor(id) {
  switch (id) {
    case 'A': return 'blue';
    case 'B': return 'green';
    case 'C': return 'yellow';
    case 'D': return 'red';
    default: return 'default';
  }
};

export default QuizPage;