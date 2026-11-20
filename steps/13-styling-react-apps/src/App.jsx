import { useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar.jsx';
import TaskItem from './TaskItem.jsx';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [theme, setTheme] = useState('light');

  function handleToggle(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  const done = tasks.filter((t) => t.done).length;

  return (
    <div className="app" data-theme={theme}>
      <h1>Study Planner</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle theme</button>
      <ProgressBar done={done} total={tasks.length} />
      <ul className="task-list">
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}
