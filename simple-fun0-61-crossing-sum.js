function crossingSum(matrix, a, b) {
  let result = 0
  for (i = 0; i < matrix.length; i++) {
    result += matrix[i][b]
  }
  for (j = 0; j < matrix[a].length; j++) {
    result += matrix[a][j]
  }
  return result -= matrix[a][b]
}
