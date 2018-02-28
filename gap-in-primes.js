const isPrime = int => {
	for (let index = 2; index < int; index++) {
		if (int % index === 0) {
			return false
		}
	}
	return int > 1
}

const gap = (gap, m, n) => {
	for (let index = m; index <= n; index++) {
		if (isPrime(index) && isPrime(index + gap)) {
			return [index, index + gap]
		}
	}
	return null
}