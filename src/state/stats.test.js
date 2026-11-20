import { expect, test } from 'vitest';
import { minutesBySubject } from './stats.js';

test('adds planned and done minutes per subject, largest first', () => {
  const tasks = [
    { id: 't1', subject: 'Math', minutes: 30, done: true },
    { id: 't2', subject: 'Biology', minutes: 40, done: false },
    { id: 't3', subject: 'Biology', minutes: 20, done: true },
  ];
  expect(minutesBySubject(tasks)).toEqual([
    ['Biology', { planned: 60, done: 20 }],
    ['Math', { planned: 30, done: 30 }],
  ]);
});

test('returns an empty list for no tasks', () => {
  expect(minutesBySubject([])).toEqual([]);
});
