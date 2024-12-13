import { useState } from 'react';
import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { Task } from './components/Task/Task';
import { getSubheading } from './utils/getSubheading';

function App() {
	const [isFormShown, setIsFormShown] = useState(false);
	const [tasks, setTasks] = useState([
		{ name: 'Zapłacić rachunki', isCompleted: false, id: 1 },
		{ name: 'Wyrzucić śmieci', isCompleted: true, id: 2 },
	]);

	function addNewTask(newTaskName) {
		setTasks((prevTasks) => [
			...prevTasks,
			{
				name: newTaskName,
				isCompleted: false,
				id: prevTasks.length > 0 ? prevTasks.at(-1).id + 1 : 0,
			},
		]);
		setIsFormShown(false);
	}

	function deleteTask(id) {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	}

	function finishTask(id) {
		setTasks((prevTasks) =>
			prevTasks.map((task) => {
				if (task.id !== id) {
					return task;
				}

				return {
					...task,
					isCompleted: true,
				};
			})
		);
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div>
					<h1>Do zbronienia</h1>
					<h2>{getSubheading(tasks.length)}</h2>
				</div>

				<button onClick={isFormShown ? () => setIsFormShown(false) : () => setIsFormShown(true)} className={styles.button}>
					{isFormShown ? 'x' : '+'}
				</button>
			</header>
			{isFormShown && <Form onFormSubmit={(newTaskName) => addNewTask(newTaskName)} />}
			<ul>
				{tasks.map(({ id, name, isCompleted }) => (
					<Task
						key={id}
						name={name}
						isCompleted={isCompleted}
						onDeleteButtonClick={() => deleteTask(id)}
						onCompleteButtonClick={() => finishTask(id)}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
