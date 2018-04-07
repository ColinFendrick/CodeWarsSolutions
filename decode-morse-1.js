const decodeMorse = function (morseCode) {
	const a = morseCode.trim().split('   ').map(function (word) {
		const x = word.split(' ').map(function (letter) {
			return morseCode[letter]
		}).join('')
		return x
	}).join(' ')
	return a
}