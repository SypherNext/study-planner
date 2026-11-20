export default function StatsPage({ tasks }) {
  const done = tasks.filter((t) => t.done);
  const minutesDone = done.reduce((sum, t) => sum + t.minutes, 0);
  const minutesTotal = tasks.reduce((sum, t) => sum + t.minutes, 0);

  return (
    <>
      <h1>Stats</h1>
      <p>
        {done.length} of {tasks.length} tasks done
      </p>
      <p>
        {minutesDone} of {minutesTotal} planned minutes done
      </p>
    </>
  );
}
