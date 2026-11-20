import { useState } from 'react';
import FilterBar from './FilterBar.jsx';
import Summary from './Summary.jsx';
import TaskList from './TaskList.jsx';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('all');

  function handleToggle(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  const visibleTasks = tasks.filter((t) => (filter === 'all' ? true : filter === 'done' ? t.done : !t.done));

  return (
    <main>
      <h1>Study Planner</h1>
      <FilterBar filter={filter} onChange={setFilter} />
      <Summary tasks={tasks} filter={filter} />
      <TaskList tasks={visibleTasks} onToggle={handleToggle} />
    </main>
  );
}
