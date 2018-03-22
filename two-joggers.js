const nbrOfLaps = (x, y) => {
  for (let i = x; i > 1; i--) {
    if ( x % i === 0 && y % i === 0) {
      x = x/i;
      y = y/i;
    }
  }
  return [y, x]
}