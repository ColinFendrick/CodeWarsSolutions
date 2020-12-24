const isPrime = n => {
	if (n === 2) return true;
	if (
		n === 0 ||
    n % 2 === 0 ||
    n < 2
	) return false;

	for (let i = 2, s = Math.sqrt(n); i <= s; i++)
		if (n % i === 0) return false;

	return true;
};
