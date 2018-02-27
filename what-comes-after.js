const comes_after = (str, letter) => {
	let answer = ''
	for (let index = 0; index < str.length; index++) {
		const element = str.toLowerCase()[index]
		if (element === letter && str[index + 1] && str[index + 1].match(/[A-Za-z]/)) {
			answer = `${answer}${str[index + 1]}`
		}
	}
	return answer
}