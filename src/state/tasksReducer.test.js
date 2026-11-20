import { describe, expect, test } from 'vitest';
import { tasksReducer } from './tasksReducer.js';

const start = [
  { id: 't1', title: 'Read chapter 3 of Biology', subject: 'Biology', minutes: 40, done: false },
  { id: 't2', title: 'Practice 10 algebra problems', subject: 'Math', minutes: 30, done: true },
];

describe('tasksReducer', () => {
  test('added puts a new, unfinished task at the end', () => {
    const next = tasksReducer(start, { type: 'added', id: 't3', title: 'Flashcards', subject: 'Biology', minutes: 20 });
    expect(next).toHaveLength(3);
    expect(next[2]).toEqual({ id: 't3', title: 'Flashcards', subject: 'Biology', minutes: 20, done: false });
  });

  test('toggled flips only the matching task and keeps the others as they were', () => {
    const next = tasksReducer(start, { type: 'toggled', id: 't1' });
    expect(next[0].done).toBe(true);
    expect(next[1]).toBe(start[1]);
  });

  test('never changes the array it was given', () => {
    const before = structuredClone(start);
    tasksReducer(start, { type: 'deleted', id: 't1' });
    tasksReducer(start, { type: 'cleared_done' });
    expect(start).toEqual(before);
  });

  test('loaded skips tasks that are already in the list', () => {
    const next = tasksReducer(start, { type: 'loaded', tasks: [start[0], { id: 's1', title: 'Past paper', subject: 'Math', minutes: 45, done: false }] });
    expect(next.map((t) => t.id)).toEqual(['t1', 't2', 's1']);
  });

  test('throws on an unknown action type', () => {
    expect(() => tasksReducer(start, { type: 'renamed' })).toThrow('Unknown action: renamed');
  });
});
