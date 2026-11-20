import StarterTasks from './StarterTasks.jsx';
import { useLocalStorageState } from './useLocalStorageState.js';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

export default function App() {
  const [tasks, setTasks] = useLocalStorageState('study-planner.tasks', initialTasks);
  const [filter, setFilter] = useLocalStorageState('study-planner.filter', 'all');

  const visible = tasks.filter((t) => (filter === 'all' ? true : !t.done));
  const remaining = tasks.filter((t) => !t.done).length;

  function handleAdd(task) {
    if (tasks.some((t) => t.id === task.id)) return;
    setTasks([...tasks, task]);
  }

  return (
    <main>
      <title>{`${remaining} left | Study Planner`}</title>
      <h1>Study Planner</h1>
      <button onClick={() => setFilter(filter === 'all' ? 'active' : 'all')}>
        {filter === 'all' ? 'Hide done' : 'Show all'}
      </button>
      <ul className="task-list">
        {visible.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
      <StarterTasks onAdd={handleAdd} />
    </main>
  );
}
