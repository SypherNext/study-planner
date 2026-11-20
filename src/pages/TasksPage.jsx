import AddTaskForm from '../components/AddTaskForm.jsx';
import FilterBar from '../components/FilterBar.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import StarterTasks from '../components/StarterTasks.jsx';
import TaskItem from '../components/TaskItem.jsx';
import { useLocalStorageState } from '../hooks/useLocalStorageState.js';
import { useTasks, useTasksDispatch } from '../state/TasksContext.jsx';

const FILTERS = {
  all: () => true,
  active: (t) => !t.done,
  done: (t) => t.done,
};

export default function TasksPage() {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();
  const [filter, setFilter] = useLocalStorageState('study-planner.filter', 'all');

  const visible = tasks.filter(FILTERS[filter] ?? FILTERS.all);
  const counts = {
    all: tasks.length,
    active: tasks.filter(FILTERS.active).length,
    done: tasks.filter(FILTERS.done).length,
  };

  return (
    <>
      <title>{`${counts.active} left | Study Planner`}</title>
      <h1>Today</h1>
      <ProgressBar done={counts.done} total={counts.all} />
      <AddTaskForm />
      <FilterBar filter={filter} counts={counts} onChange={setFilter} />
      {visible.length === 0 ? (
        <p className="empty">{filter === 'done' ? 'Nothing finished yet.' : 'Nothing here. Add a task above.'}</p>
      ) : (
        <ul className="task-list">
          {visible.map((t) => (
            <TaskItem key={t.id} task={t} />
          ))}
        </ul>
      )}
      {counts.done > 0 && (
        <button className="link-button" onClick={() => dispatch({ type: 'cleared_done' })}>
          Clear {counts.done} done
        </button>
      )}
      <StarterTasks />
    </>
  );
}
