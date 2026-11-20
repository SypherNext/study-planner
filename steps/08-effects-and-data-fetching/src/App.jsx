import { useEffect, useState } from 'react';
import AddTaskForm from './AddTaskForm.jsx';
import StarterTasks from './StarterTasks.jsx';
import { loadTasks, saveTasks } from './storage.js';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(() => loadTasks(initialTasks));

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  function handleAdd(newTask) {
    setTasks([...tasks, { ...newTask, id: crypto.randomUUID(), done: false }]);
  }

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <main>
      <h1>Study Planner</h1>
      <p className="summary">
        {doneCount} of {tasks.length} done
      </p>
      <AddTaskForm onAdd={handleAdd} />
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
      <StarterTasks onAdd={handleAdd} />
    </main>
  );
}
