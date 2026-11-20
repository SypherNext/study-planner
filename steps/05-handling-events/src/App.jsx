import { useState } from 'react';
import TaskItem from './TaskItem.jsx';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleToggle(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <main>
      <h1>Study Planner</h1>
      <p>{doneCount} of {tasks.length} done</p>
      <ul className="task-list">
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} onToggle={handleToggle} onDelete={handleDelete} />
        ))}
      </ul>
    </main>
  );
}
