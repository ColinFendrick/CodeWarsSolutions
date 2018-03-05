const josephus = (items, k) => {
  const result = []
  let counter = 0
  let index = 0
  while (items.length > 0) {
    index = index % items.length
    if (++counter === k) {
      result.push(items.splice(index, 1)[0])
      counter = 0
      index--
    }
    index++
  }
  return result
}