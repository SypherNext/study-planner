import styles from './TaskItem.module.css';

export default function TaskItem({ task, onToggle }) {
  const className = task.done ? `${styles.item} ${styles.done}` : styles.item;
  return (
    <li className={className}>
      <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
      <span className={styles.title}>{task.title}</span>
      <span className={styles.subject}>{task.subject}</span>
    </li>
  );
}
