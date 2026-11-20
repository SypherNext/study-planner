function Header() {
  const day = 'Monday';
  const taskCount = 3;
  return (
    <header>
      <h1>Study Planner</h1>
      <p>Plan for {day}: {taskCount} tasks</p>
    </header>
  );
}

function TaskList() {
  return (
    <ul className="task-list">
      <li>Read chapter 3 of Biology</li>
      <li>Practice 10 algebra problems</li>
      <li>Review French vocabulary</li>
    </ul>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <TaskList />
    </main>
  );
}
