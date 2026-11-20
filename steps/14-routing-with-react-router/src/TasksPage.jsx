import { Link } from 'react-router';

export default function TasksPage({ tasks }) {
  return (
    <>
      <h1>Tasks</h1>
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id}>
            <Link to={`/tasks/${t.id}`}>{t.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
