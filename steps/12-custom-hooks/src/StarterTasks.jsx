import { useFetchJson } from './useFetchJson.js';

export default function StarterTasks({ url = '/starter-tasks.json', onAdd }) {
  const { status, data, error } = useFetchJson(url);

  if (status === 'loading') return <p>Loading suggestions...</p>;
  if (status === 'error') return <p role="alert">Could not load suggestions ({error}).</p>;

  return (
    <section className="starter">
      <h2>Suggested tasks</h2>
      <ul>
        {data.map((s) => (
          <li key={s.id}>
            {s.title} <button onClick={() => onAdd(s)}>Add</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
