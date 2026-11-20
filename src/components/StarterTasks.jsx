import { useFetchJson } from '../hooks/useFetchJson.js';
import { useTasks, useTasksDispatch } from '../state/TasksContext.jsx';

export default function StarterTasks() {
  const { status, data, error } = useFetchJson('/starter-tasks.json');
  const tasks = useTasks();
  const dispatch = useTasksDispatch();

  if (status === 'loading') return <p className="muted">Loading suggestions...</p>;
  if (status === 'error') return <p role="alert">Could not load suggestions ({error}).</p>;

  const fresh = data.filter((s) => !tasks.some((t) => t.id === s.id));
  if (fresh.length === 0) return null;

  return (
    <section className="starter">
      <h2>Suggested tasks</h2>
      <ul>
        {fresh.map((s) => (
          <li key={s.id}>
            {s.title} ({s.subject}, {s.minutes} min)
            <button onClick={() => dispatch({ type: 'loaded', tasks: [s] })}>Add</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'loaded', tasks: fresh })}>Add all {fresh.length}</button>
    </section>
  );
}
