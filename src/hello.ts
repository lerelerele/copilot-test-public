/**
 * Returns a greeting string.
 * @param name Optional name to include in the greeting.
 * @returns A greeting like "Hello, World!" or "Hello, Alice!".
 */
export const helloWorld = (name?: string): string => {
  const who = typeof name === 'string' && name.trim() !== '' ? name.trim() : 'World';
  return `Hello, ${who}!`;
};
