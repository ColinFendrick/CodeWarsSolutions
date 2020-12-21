const isPrime = int => {
	if (int % 2 === 0) {
		return false;
	}
	for (let index = 3; index <= Math.sqrt(int); index += 2) {
		if (int % index === 0) {
			return false;
		}
	}
	return true;
};

const checkForNoPrimes = (start, stop) => {
	for (let index = start; index < stop; index++) {
		if (isPrime(index)) {
			return false;
		}
	}
	return true;
};

const gap = (gap, m, n) => {
	for (let i = m; i <= n; i++) {
		if (isPrime(i) && isPrime(i + gap)) {
			if (checkForNoPrimes(i + 1, i + gap)) {
				return [i, i + gap];
			}
		}
	}
	return null;
};


// const gap = (gap, m, n) => {
// 	const primes = []
// 	const oddStart = m % 2 === 0 ? m + 1 : m
// 	for (let index = oddStart; index <= n; index += 2) {
// 		if (isPrime(index)) {
// 			primes.push(index)
// 		}
// 	}
// 	for (let index = 0; index < primes.length; index++) {
// 		if (primes[index + 1] - primes[index] === gap) {
// 			return [primes[index], primes[index + 1]]
// 		}
// 	}
// 	return null
// }