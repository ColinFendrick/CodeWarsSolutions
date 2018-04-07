function remove(s) {
	let newString = s.replace(/!/ig, '')
	return newString + '!'
}