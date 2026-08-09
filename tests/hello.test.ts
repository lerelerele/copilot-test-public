import { helloWorld } from '../src/hello';

describe('helloWorld', () => {
  test('returns default greeting', () => {
    expect(helloWorld()).toBe('Hello, World!');
  });

  test('returns personalized greeting', () => {
    expect(helloWorld('Alice')).toBe('Hello, Alice!');
  });

  test('trims whitespace and handles empty string', () => {
    expect(helloWorld('  Bob  ')).toBe('Hello, Bob!');
    expect(helloWorld('')).toBe('Hello, World!');
  });
});
