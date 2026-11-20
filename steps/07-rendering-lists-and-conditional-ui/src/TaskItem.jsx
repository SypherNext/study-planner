export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.done ? 'task done' : 'task'}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
        {task.title}
      </label>
      <button onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`}>
        Delete
      </button>
    </li>
  );
}
