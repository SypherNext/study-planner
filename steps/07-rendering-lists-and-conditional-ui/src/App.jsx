import { useState } from 'react';
import FilterBar from './FilterBar.jsx';
import TaskItem from './TaskItem.jsx';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

const FILTERS = {
  all: () => true,
  active: (t) => !t.done,
  done: (t) => t.done,
};

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  function handleToggle(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const visibleTasks = tasks.filter(FILTERS[filter]);
  const counts = {
    all: tasks.length,
    active: tasks.filter(FILTERS.active).length,
    done: tasks.filter(FILTERS.done).length,
  };

  return (
    <main>
      <h1>Study Planner</h1>
      <FilterBar filter={filter} counts={counts} onChange={setFilter} />
      {visibleTasks.length === 0 ? (
        <p className="empty">Nothing here yet.</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((t) => (
            <TaskItem key={t.id} task={t} onToggle={handleToggle} onDelete={handleDelete} />
          ))}
        </ul>
      )}
      {counts.done > 0 && <p className="praise">{counts.done} done. Nice work.</p>}
    </main>
  );
}
