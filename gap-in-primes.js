const gap = (gap, m, n) => {
	const isPrime = int => {
		for (let index = 2; index < int; index++) {
			if (int % index === 0) {
				return false
			}
		}
		return true
	}

	const checkForNoPrimes = (start, stop) => {
		for (let index = start; index < stop; index++) {
			if (isPrime(index)) {
				return false
			}
		}
		return true
	}

	for (let index = m; index <= n; index++) {
		if (isPrime(index) && isPrime(index + gap)) {
			if (checkForNoPrimes(index + 1, index + gap)) {
				return [index, index + gap]
			}
		}
	}
	return null
}