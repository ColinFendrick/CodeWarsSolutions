function invert(array) {
  let inversion = []
  for (i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      inversion.push(array[i])
    }
    else {
      inversion.push(array[i] * -1)
    }
  }
  return inversion
}