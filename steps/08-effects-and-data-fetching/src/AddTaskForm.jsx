import { useState } from 'react';

const SUBJECTS = ['Biology', 'Math', 'French', 'History'];

export default function AddTaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Biology');
  const [minutes, setMinutes] = useState(25);

  const trimmed = title.trim();

  function handleSubmit(e) {
    e.preventDefault();
    if (!trimmed) return;
    onAdd({ title: trimmed, subject, minutes: Number(minutes) });
    setTitle('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label>
        Task
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={60}
          placeholder="What will you study?"
        />
      </label>
      <label>
        Subject
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label>
        Minutes
        <input
          type="number"
          min={5}
          max={180}
          step={5}
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
      </label>
      <button type="submit" disabled={!trimmed}>
        Add task
      </button>
      <p className="hint">{title.length}/60 characters</p>
    </form>
  );
}
