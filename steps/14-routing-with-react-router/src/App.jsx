import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import StatsPage from './StatsPage.jsx';
import TaskDetailPage from './TaskDetailPage.jsx';
import TasksPage from './TasksPage.jsx';

const initialTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<TasksPage tasks={tasks} />} />
        <Route path="tasks/:taskId" element={<TaskDetailPage tasks={tasks} onDelete={handleDelete} />} />
        <Route path="stats" element={<StatsPage tasks={tasks} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
