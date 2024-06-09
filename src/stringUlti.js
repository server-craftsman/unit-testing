
export function capitalizeWords(str) {
  if (typeof str !== 'string') throw new Error('Input must be a string');
  return str.replace(/\b\w/g, char => char.toUpperCase());
}
