const KEY = 'study-planner.tasks';

export const sampleTasks = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
  { id: 't3', title: 'Review French vocabulary', subject: 'French', minutes: 15, done: false },
];

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
