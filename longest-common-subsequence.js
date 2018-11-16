const LCS = (x, y) => {

	const charCount = new Object()
	for (let i = 0; i < x.length; i++) { charCount[x[i]] = i }
  
	let result = ''
	let current_position = 0

	for (let char of y) {
		if (charCount[char] !== undefined && charCount[char] >= current_position){
			result += char
			current_position += 1
		}
	}
  
	return result
}