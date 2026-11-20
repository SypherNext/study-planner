const KEY = 'study-planner.tasks';

export function loadTasks(fallback) {
  try {
    const saved = localStorage.getItem(KEY);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}
