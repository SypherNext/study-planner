import TaskItem from './TaskItem.jsx';

export default function App() {
  return (
    <main>
      <h1>Study Planner</h1>
      <ul className="task-list">
        <TaskItem title="Read chapter 3 of Biology" subject="Biology" minutes={40} />
        <TaskItem title="Practice 10 algebra problems" subject="Math" minutes={30} done />
        <TaskItem title="Review French vocabulary" subject="French" minutes={15} />
      </ul>
    </main>
  );
}
