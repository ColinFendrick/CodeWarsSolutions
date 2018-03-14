const movingShift = (str, shift) => {
	let output = ''
	for (let i = 0; i < str.length; i++) {
		let letter = str[i]
		if (letter.match(/[a-z]/i)) {
			const code = str.charCodeAt(i)
			if ((code >= 65) && (code <= 90)) {
				letter = String.fromCharCode(((code - 65 + shift) % 26) + 65)
			}
			else if ((code >= 97) && (code <= 122)) {
				letter = String.fromCharCode(((code - 97 + shift) % 26) + 97)
			}
		}
		output += letter
		shift++
	}
	const rangeEnd = Math.ceil(output.length/5)
	return output.match(new RegExp('.{1,' + rangeEnd + '}', 'g'))
}