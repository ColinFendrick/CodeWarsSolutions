const wave = str => {
	const result = []
	for (let i = 0; i < str.length++; i++) {
		if (/[a-z]/.test(str[i])) {
			result.push(
				str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length)
			)
		}
	}
}