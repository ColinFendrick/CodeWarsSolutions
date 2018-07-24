const primes = [2, 3, 5, 7]
const checkDigits = n => {
	const cast = n.toString(10).split('')
	for (let d = 0; d < cast.length; d++) {
		if (!primes.includes(parseInt(cast[d]))) {
			return false
		} else {
			return true
		}
	}
}

const notPrimes = (a, b) => {
	let sol = []
	for (let n = a; n < b; n++) {
		if (checkDigits(n)) {
			sol.push(n)
		}
	}
	return sol
}