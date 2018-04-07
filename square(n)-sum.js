function squareSum(numbers) {
	let answer = 0
	for (let i = 0; i < numbers.length; i++) {
		answer += (numbers[i] * numbers[i])
	}
	return answer
}