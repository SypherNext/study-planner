import { Link } from 'react-router';
import { useTasksDispatch } from '../state/TasksContext.jsx';
import styles from './TaskItem.module.css';

export default function TaskItem({ task }) {
  const dispatch = useTasksDispatch();
  const className = task.done ? `${styles.item} ${styles.done}` : styles.item;

  return (
    <li className={className}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => dispatch({ type: 'toggled', id: task.id })}
        aria-label={`Mark "${task.title}" as done`}
      />
      <Link className={styles.title} to={`/tasks/${task.id}`}>
        {task.title}
      </Link>
      <span className={styles.meta}>
        {task.subject}, {task.minutes} min
      </span>
    </li>
  );
}
