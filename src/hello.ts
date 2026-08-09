/**
 * Returns a greeting string.
 * @param name - Optional name to greet. Defaults to 'world'.
 * @returns Greeting message 'Hello, <name>!'
 */
export const helloWorld = (name = 'world'): string => {
  return `Hello, ${name}!`;
};
