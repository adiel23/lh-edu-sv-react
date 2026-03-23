import React from 'react';
import styles from './QuizResults.module.css';

function QuizResults() {
	const students = [
		{ id: 1, name: 'Mateo G.', score: 95, correctAnswers: 19, totalQuestions: 20, time: '03:21' },
		{ id: 2, name: 'Lucía F.', score: 88, correctAnswers: 17, totalQuestions: 20, time: '03:42' },
		{ id: 3, name: 'Emma V.', score: 84, correctAnswers: 16, totalQuestions: 20, time: '03:58' },
		{ id: 4, name: 'Santi R.', score: 73, correctAnswers: 14, totalQuestions: 20, time: '04:14' },
		{ id: 5, name: 'Nico P.', score: 67, correctAnswers: 13, totalQuestions: 20, time: '04:36' }
	];

	const sortedStudents = [...students].sort((a, b) => b.score - a.score);
	const winner = sortedStudents[0];

	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<span className={styles['hero__badge']}>RESULTADOS FINALES</span>
				<h1 className={styles['hero__title']}>Ganador del Quiz</h1>
				<div className={styles['hero__winner-card']}>
					<div className={styles['hero__winner-main']}>
						<span className={styles['hero__crown']} aria-hidden="true">👑</span>
						<div>
							<p className={styles['hero__winner-label']}>Primer lugar</p>
							<h2 className={styles['hero__winner-name']}>{winner.name}</h2>
						</div>
					</div>
					<div className={styles['hero__winner-stats']}>
						<div className={styles['hero__stat']}>
							<span className={styles['hero__stat-label']}>Puntaje</span>
							<strong className={styles['hero__stat-value']}>{winner.score}</strong>
						</div>
						<div className={styles['hero__stat']}>
							<span className={styles['hero__stat-label']}>Aciertos</span>
							<strong className={styles['hero__stat-value']}>
								{winner.correctAnswers}/{winner.totalQuestions}
							</strong>
						</div>
						<div className={styles['hero__stat']}>
							<span className={styles['hero__stat-label']}>Tiempo</span>
							<strong className={styles['hero__stat-value']}>{winner.time}</strong>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.results}>
				<div className={styles['results__header']}>
					<h3 className={styles['results__title']}>Tabla de resultados</h3>
					<span className={styles['results__subtitle']}>{sortedStudents.length} estudiantes evaluados</span>
				</div>

				<table className={styles['results__table']}>
					<thead>
						<tr>
							<th>Posición</th>
							<th>Estudiante</th>
							<th>Puntaje</th>
							<th>Aciertos</th>
							<th>Tiempo</th>
						</tr>
					</thead>
					<tbody>
						{sortedStudents.map((student, index) => (
							<tr
								key={student.id}
								className={index === 0 ? `${styles['results__row']} ${styles['results__row--winner']}` : styles['results__row']}
							>
								<td>
									<span className={styles['results__rank']}>
										{index === 0 ? '🥇' : `#${index + 1}`}
									</span>
								</td>
								<td>
									<div className={styles['results__student']}>
										<span className={styles['results__avatar']}>{student.name.charAt(0)}</span>
										<span>{student.name}</span>
									</div>
								</td>
								<td>{student.score}</td>
								<td>{student.correctAnswers}/{student.totalQuestions}</td>
								<td>{student.time}</td>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default QuizResults;
