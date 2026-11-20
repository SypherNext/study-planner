export default function TaskItem({ title, subject, minutes = 25, done = false }) {
  return (
    <li className={done ? 'task done' : 'task'}>
      <span className="title">{title}</span>
      <span className="meta">
        {subject}, {minutes} min{done && ' (done)'}
      </span>
    </li>
  );
}
