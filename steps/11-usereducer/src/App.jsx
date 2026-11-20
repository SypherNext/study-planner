import { useReducer } from 'react';
import { tasksReducer } from './tasksReducer.js';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAdd() {
    dispatch({ type: 'added', id: crypto.randomUUID(), title: 'Summarize lecture notes', subject: 'History', minutes: 20 });
  }

  return (
    <main>
      <h1>Study Planner</h1>
      <button onClick={handleAdd}>Add sample task</button>
      <button onClick={() => dispatch({ type: 'cleared_done' })}>Clear done</button>
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => dispatch({ type: 'toggled', id: t.id })} />
              {t.title}
            </label>
            <button onClick={() => dispatch({ type: 'deleted', id: t.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
