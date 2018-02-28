const gap = (gap, m, n) => {
	const isPrime = int => {
		if (int % 2 === 0) { return false }
		for (let index = 3; index < int; index += 2) {
			if (int % index === 0) {
				return false
			}
		}
		return true
	}

	const checkForNoPrimes = (start, stop) => {
		const oddStart = start % 2 === 0 ? start + 1 : start
		for (let index = oddStart; index < stop; index += 2) {
			if (isPrime(index)) {
				return false
			}
		}
		return true
	}

	for (let index = m; index <= n; index++) {
		if (isPrime(index) && isPrime(index + gap) && checkForNoPrimes(index + 1, index + gap)) {
			return [index, index + gap]
		}
	}
	return null
}