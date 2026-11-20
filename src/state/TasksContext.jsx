import { createContext, useContext, useEffect, useReducer } from 'react';
import { loadTasks, sampleTasks, saveTasks } from './storage.js';
import { tasksReducer } from './tasksReducer.js';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, sampleTasks, loadTasks);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <TasksContext value={tasks}>
      <TasksDispatchContext value={dispatch}>{children}</TasksDispatchContext>
    </TasksContext>
  );
}

export function useTasks() {
  const tasks = useContext(TasksContext);
  if (tasks === null) throw new Error('useTasks must be used inside <TasksProvider>');
  return tasks;
}

export function useTasksDispatch() {
  const dispatch = useContext(TasksDispatchContext);
  if (dispatch === null) throw new Error('useTasksDispatch must be used inside <TasksProvider>');
  return dispatch;
}
