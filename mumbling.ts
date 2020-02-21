export function accum(s: string): string {
  return s.split('').map((c, i) => {
    return c.toUpperCase() + c.repeat(i).toLowerCase()
  }).join('-')
}
