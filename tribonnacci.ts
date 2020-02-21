export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
  const signature = [a, b, c];
  if (n < 3) {
    return (n === 0) ? [] : signature.slice(0, n);
  }

  for (let i = 3; i < n; i += 1) {
    signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
  }
  return signature;
}
