export function truncate(input: string, max: number) {
  if (input.length > max) {
    return input.substring(0, max) + "...";
  }
  return input;
}
