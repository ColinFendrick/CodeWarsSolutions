const unhash = num => {
	let charpos = []
	let word = []
	let dictionary = 'acdfgilmnoprstuw'

	for (let i = 10; i > 0; i--) {
		charpos[i] = (num % 23)
		num = (num - charpos[i]) / 23
		word[i - 1] = dictionary.charAt(charpos[i])
	}

	return word.join('')
}
