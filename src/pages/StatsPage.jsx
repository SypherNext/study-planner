import { minutesBySubject } from '../state/stats.js';
import { useTasks } from '../state/TasksContext.jsx';

export default function StatsPage() {
  const tasks = useTasks();
  const rows = minutesBySubject(tasks);
  const planned = tasks.reduce((sum, t) => sum + t.minutes, 0);
  const done = tasks.filter((t) => t.done).reduce((sum, t) => sum + t.minutes, 0);

  return (
    <>
      <title>Stats | Study Planner</title>
      <h1>Stats</h1>
      <p>
        {done} of {planned} planned minutes done
      </p>
      <table className="stats">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Planned</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([subject, row]) => (
            <tr key={subject}>
              <td>{subject}</td>
              <td>{row.planned} min</td>
              <td>{row.done} min</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
