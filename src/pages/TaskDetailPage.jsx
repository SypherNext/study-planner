import { Link, useNavigate, useParams } from 'react-router';
import { useTasks, useTasksDispatch } from '../state/TasksContext.jsx';

export default function TaskDetailPage() {
  const { taskId } = useParams();
  const tasks = useTasks();
  const dispatch = useTasksDispatch();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <>
        <h1>Task not found</h1>
        <p>
          It may have been deleted. <Link to="/">Back to tasks</Link>
        </p>
      </>
    );
  }

  function handleDelete() {
    dispatch({ type: 'deleted', id: task.id });
    navigate('/');
  }

  return (
    <article className="detail">
      <title>{`${task.title} | Study Planner`}</title>
      <h1>{task.title}</h1>
      <p>
        {task.subject}, {task.minutes} minutes, {task.done ? 'done' : 'not done yet'}
      </p>
      <button onClick={() => dispatch({ type: 'toggled', id: task.id })}>{task.done ? 'Mark as not done' : 'Mark as done'}</button>
      <button onClick={handleDelete}>Delete task</button>
      <p>
        <Link to="/">Back to tasks</Link>
      </p>
    </article>
  );
}
