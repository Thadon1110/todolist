import { Button } from '../Button/Button';
import styles from './Task.module.css';

export function Task({ name, isCompleted, onDeleteButtonClick, onCompleteButtonClick }) {
	return (
		<li className={styles.task}>
			<span className={`${styles.name} ${isCompleted ? styles.completed : ''}`}>{name}</span>
			{!isCompleted && <Button onClick={onCompleteButtonClick}>Zrobione</Button>}
			<Button onClick={onDeleteButtonClick}>Usuń</Button>
		</li>
	);
}
