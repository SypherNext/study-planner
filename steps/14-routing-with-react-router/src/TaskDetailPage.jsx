import { Link, useNavigate, useParams } from 'react-router';

export default function TaskDetailPage({ tasks, onDelete }) {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <>
        <h1>Task not found</h1>
        <p>
          No task has the id "{taskId}". <Link to="/">Back to tasks</Link>
        </p>
      </>
    );
  }

  function handleDelete() {
    onDelete(task.id);
    navigate('/');
  }

  return (
    <article>
      <h1>{task.title}</h1>
      <p>
        {task.subject}, {task.minutes} minutes, {task.done ? 'done' : 'not done yet'}
      </p>
      <button onClick={handleDelete}>Delete task</button>
    </article>
  );
}
