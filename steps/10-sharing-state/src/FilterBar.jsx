const LABELS = { all: 'All', active: 'Active', done: 'Done' };

export default function FilterBar({ filter, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter tasks">
      {Object.keys(LABELS).map((key) => (
        <button key={key} aria-pressed={key === filter} onClick={() => onChange(key)}>
          {LABELS[key]}
        </button>
      ))}
    </div>
  );
}
