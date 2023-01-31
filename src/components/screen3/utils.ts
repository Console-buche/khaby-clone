export function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}
