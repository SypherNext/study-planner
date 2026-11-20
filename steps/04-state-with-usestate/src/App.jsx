import { useState } from 'react';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function toggleTask(id) {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function addSampleTask() {
    const task = { id: `t${tasks.length + 1}`, title: 'Summarize lecture notes', subject: 'History', minutes: 20, done: false };
    setTasks([...tasks, task]);
  }

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <main>
      <h1>Study Planner</h1>
      <p>{doneCount} of {tasks.length} done</p>
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id} className={t.done ? 'task done' : 'task'}>
            {t.title}
            <button onClick={() => toggleTask(t.id)}>{t.done ? 'Undo' : 'Done'}</button>
          </li>
        ))}
      </ul>
      <button onClick={addSampleTask}>Add sample task</button>
    </main>
  );
}
