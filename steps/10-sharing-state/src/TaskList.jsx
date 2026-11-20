export default function TaskList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return <p className="empty">Nothing here yet.</p>;
  }
  return (
    <ul className="task-list">
      {tasks.map((t) => (
        <li key={t.id} className={t.done ? 'task done' : 'task'}>
          <label>
            <input type="checkbox" checked={t.done} onChange={() => onToggle(t.id)} />
            {t.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
