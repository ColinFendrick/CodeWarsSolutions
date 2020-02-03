const count = (walk, dir) => walk.filter(direction => direction === dir).length

const isValidWalk = walk =>
  walk.length === 10 &&
  count(walk, 'n') === count(walk, 's') &&
  count(walk, 'w') === count(walk, 'e')
