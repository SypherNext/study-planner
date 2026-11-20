export function minutesBySubject(tasks) {
  const totals = {};
  for (const t of tasks) {
    const row = totals[t.subject] ?? { planned: 0, done: 0 };
    row.planned += t.minutes;
    if (t.done) row.done += t.minutes;
    totals[t.subject] = row;
  }
  return Object.entries(totals).sort((a, b) => b[1].planned - a[1].planned);
}
