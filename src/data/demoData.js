export const DEMO_PIN = '123456';

export const DEMO_STUDENT_NAME = 'Alexander';

export const DEMO_QUESTIONS = [
  {
    id: 1,
    pregunta: '¿Qué es Bitcoin?',
    opciones: [
      { id: 'A', texto: 'Dinero digital', correcta: true },
      { id: 'B', texto: 'Un banco', correcta: false },
      { id: 'C', texto: 'Un juego', correcta: false },
      { id: 'D', texto: 'Una estafa', correcta: false },
    ],
    badge: 'RETO 1',
  },
  {
    id: 2,
    pregunta: '¿Quién creó Bitcoin?',
    opciones: [
      { id: 'A', texto: 'Elon Musk', correcta: false },
      { id: 'B', texto: 'Satoshi Nakamoto', correcta: true },
      { id: 'C', texto: 'El Gobierno', correcta: false },
      { id: 'D', texto: 'Un banco central', correcta: false },
    ],
    badge: 'RETO 2',
  },
  {
    id: 3,
    pregunta: '¿Cuál es el suministro máximo de Bitcoins?',
    opciones: [
      { id: 'A', texto: 'Infinito', correcta: false },
      { id: 'B', texto: '100 millones', correcta: false },
      { id: 'C', texto: '21 millones', correcta: true },
      { id: 'D', texto: '50 millones', correcta: false },
    ],
    badge: 'RETO 3',
  },
  {
    id: 4,
    pregunta: '¿Cómo se llama el registro donde se anotan todas las transacciones?',
    opciones: [
      { id: 'A', texto: 'Libreta de ahorros', correcta: false },
      { id: 'B', texto: 'Blockchain', correcta: true },
      { id: 'C', texto: 'Nube bancaria', correcta: false },
      { id: 'D', texto: 'Archivo central', correcta: false },
    ],
    badge: 'RETO 4',
  },
  {
    id: 5,
    pregunta: '¿Qué es el "Halving" de Bitcoin?',
    opciones: [
      { id: 'A', texto: 'Cuando el precio cae a la mitad', correcta: false },
      { id: 'B', texto: 'La división de la red en dos', correcta: false },
      { id: 'C', texto: 'La reducción a la mitad de la recompensa por bloque', correcta: true },
      { id: 'D', texto: 'Un impuesto del 50%', correcta: false },
    ],
    badge: 'RETO 5',
  },
];

// Simulated classmates for the teacher/student results views
export const DEMO_SIMULATED_STUDENTS = [
  { id: 's1', name: 'Lucía F.',  correctAnswers: 4, totalQuestions: 5, time: '02:14' },
  { id: 's2', name: 'Mateo G.',  correctAnswers: 3, totalQuestions: 5, time: '02:58' },
  { id: 's3', name: 'Emma V.',   correctAnswers: 3, totalQuestions: 5, time: '03:12' },
  { id: 's4', name: 'Santi R.',  correctAnswers: 2, totalQuestions: 5, time: '03:40' },
  { id: 's5', name: 'Nico P.',   correctAnswers: 2, totalQuestions: 5, time: '04:05' },
];

// Students shown joining in the Lobby
export const DEMO_LOBBY_STUDENTS = [
  { id: 1, name: 'Lucía F.',  joinDelay: 1000 },
  { id: 2, name: 'Mateo G.',  joinDelay: 2500 },
  { id: 3, name: 'Emma V.',   joinDelay: 4000 },
  { id: 4, name: 'Santi R.',  joinDelay: 5500 },
  { id: 5, name: 'Nico P.',   joinDelay: 7000 },
];
