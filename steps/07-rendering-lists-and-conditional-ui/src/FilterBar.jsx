const LABELS = { all: 'All', active: 'Active', done: 'Done' };

export default function FilterBar({ filter, counts, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter tasks">
      {Object.keys(LABELS).map((key) => (
        <button
          key={key}
          className={key === filter ? 'filter active' : 'filter'}
          aria-pressed={key === filter}
          onClick={() => onChange(key)}
        >
          {LABELS[key]} ({counts[key]})
        </button>
      ))}
    </div>
  );
}
