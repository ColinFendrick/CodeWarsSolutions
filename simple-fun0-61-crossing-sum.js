function crossingSum(matrix, a, b) {
	let result = 0;
	for (let i = 0; i < matrix.length; i++)
		result += matrix[i][b];

	for (let j = 0; j < matrix[a].length; j++)
		result += matrix[a][j];

	return result -= matrix[a][b];
}
