const count = str => {
	let answer = {}
	for (let i = 0; i < str.length; i++) {
		answer[str[i]]++
	}
	return answer
}