export function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      const { id, title, subject, minutes } = action;
      return [...tasks, { id, title, subject, minutes, done: false }];
    }
    case 'toggled': {
      return tasks.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    case 'cleared_done': {
      return tasks.filter((t) => !t.done);
    }
    case 'loaded': {
      const known = new Set(tasks.map((t) => t.id));
      return [...tasks, ...action.tasks.filter((t) => !known.has(t.id))];
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
}
