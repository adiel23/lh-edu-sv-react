import React from 'react';
import styles from './QuizResults.module.css';
import { useDemo } from '../../../context/useDemo';
import { DEMO_SIMULATED_STUDENTS } from '../../../data/demoData';
import { AVATARS } from '../../students/pages/OnboardingPage';

function QuizResults() {
	const { getResults, sessionPhase } = useDemo();

	// If the student completed the quiz use real results; otherwise show simulated data
	const students = sessionPhase === 'completed'
		? getResults()
		: DEMO_SIMULATED_STUDENTS
			.map((s) => ({ ...s, isMe: false }))
			.sort((a, b) => b.correctAnswers - a.correctAnswers);

	const winner = students[0];

	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<span className={styles['hero__badge']}>RESULTADOS FINALES</span>
				<h1 className={styles['hero__title']}>Ganador del Quiz</h1>
				<div className={styles['hero__winner-card']}>
					<div className={styles['hero__winner-main']}>
						<div className={styles['hero__winner-avatar']}>
							<img src={AVATARS[0].image} alt={AVATARS[0].id} className={styles['hero__winner-img']} />
							<span className={styles['hero__crown']} aria-hidden="true">👑</span>
						</div>
						<div>
							<p className={styles['hero__winner-label']}>Primer lugar</p>
							<h2 className={styles['hero__winner-name']}>{winner.name}</h2>
						</div>
					</div>
					<div className={styles['hero__winner-stats']}>
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
					<span className={styles['results__subtitle']}>{students.length} estudiantes evaluados</span>
				</div>

				<table className={styles['results__table']}>
					<thead>
						<tr>
							<th>Posición</th>
							<th>Estudiante</th>
							<th>Aciertos</th>
							<th>Tiempo</th>
						</tr>
					</thead>
					<tbody>
						{students.map((student, index) => {
							const avatarObj = AVATARS[index % AVATARS.length];
							return (
							<tr
								key={student.id}
								className={index === 0 ? `${styles['results__row']} ${styles['results__row--winner']}` : styles['results__row']}
								style={{ '--anim-delay': `${index * 80}ms` }}
							>
								<td>
									<span className={styles['results__rank']}>
										{index === 0 ? '🥇' : `#${index + 1}`}
									</span>
								</td>
								<td>
									<div className={styles['results__student']}>
										<div className={styles['results__avatar']}>
											<img src={avatarObj.image} alt={avatarObj.id} className={styles['results__avatar-img']} />
										</div>
										<span>{student.name}{student.isMe ? ' ⭐' : ''}</span>
									</div>
								</td>
								<td>{student.correctAnswers}/{student.totalQuestions}</td>
								<td>{student.time}</td>
							</tr>
							);
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default QuizResults;
