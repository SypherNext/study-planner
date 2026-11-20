export default function ProgressBar({ done, total }) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div className="progress" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress-fill" style={{ width: `${percent}%` }} />
      <span className="progress-label">{percent}% done</span>
    </div>
  );
}
