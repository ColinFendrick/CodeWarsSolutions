const backwardsPrime = (start, stop) => {
	let res = [];
	for (let i = start; i <= stop; i++)
		if (isPrime(i) && isReversePrime(i))
			res.push(i);

	return res;
};

const isPrime = n => {
	for (let i = 2; i <= Math.sqrt(n); i++)
		if (n % i === 0)
			return false;

	return true;
};

const isReversePrime = n => {
	const reverseNum = +n.toString().split('').reverse().join('');
	if (n !== reverseNum)
		return isPrime(reverseNum);

	return false;
};
