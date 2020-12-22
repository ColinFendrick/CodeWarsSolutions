const listSquared = (start, end) => {
	const output = [];
	for (let i = start; i <= end; i++) {
		let sum = 0;
		for (let j = 1; j <= i; j++)
			if (i % j === 0)
				sum += j * j;

		 if (Math.sqrt(sum) % 1 === 0)
			output.push([i, sum]);

	}
	return output;
};
