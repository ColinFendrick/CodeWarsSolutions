function animals(heads, legs) {
  let y = (0.5 * legs) - heads
  let x = heads - y

  if ((heads === 0) && (legs === 0)) {
    return [0, 0]
  }

  if (x < 0 || y < 0 || x % 1 !== 0 || y % 1 !== 0) {
    return "No solutions"
  }
  else {
    return [x, y]
  }
}
