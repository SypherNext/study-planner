import { useEffect, useState } from 'react';

export default function StarterTasks({ onAdd }) {
  const [suggestions, setSuggestions] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let ignore = false;

    fetch('/starter-tasks.json')
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          setSuggestions(data);
          setStatus('ready');
        }
      })
      .catch(() => {
        if (!ignore) setStatus('error');
      });

    return () => {
      ignore = true;
    };
  }, []);

  if (status === 'loading') return <p>Loading suggestions...</p>;
  if (status === 'error') return <p role="alert">Could not load suggestions.</p>;

  return (
    <section className="starter">
      <h2>Suggested tasks</h2>
      <ul>
        {suggestions.map((s) => (
          <li key={s.id}>
            {s.title} <button onClick={() => onAdd(s)}>Add</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
