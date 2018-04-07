function squareDigits(num) {
	if (typeof num !== 'number') {
		return false
	}
	let answerArray = []
	for (let i = 0; i < num.toString().split('').length; i++) {
		answerArray.push(num.toString().split('')[i] * num.toString().split('')[i])
	}
	return parseInt(answerArray.join().replace(/,/g, ''))


}