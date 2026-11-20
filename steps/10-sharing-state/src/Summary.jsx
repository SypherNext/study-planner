export default function Summary({ tasks, filter }) {
  const done = tasks.filter((t) => t.done).length;
  return (
    <p className="summary">
      {done} of {tasks.length} done, showing {filter}
    </p>
  );
}
