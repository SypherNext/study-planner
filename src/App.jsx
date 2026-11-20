import { Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import StatsPage from './pages/StatsPage.jsx';
import TaskDetailPage from './pages/TaskDetailPage.jsx';
import TasksPage from './pages/TasksPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<TasksPage />} />
        <Route path="tasks/:taskId" element={<TaskDetailPage />} />
        <Route path="stats" element={<StatsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
