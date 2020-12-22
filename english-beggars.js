const beggars = (v, n) => {
	const answer = [];
	for (let j = 0; j < n; j++)
		answer.push(0);

	for (let i = 0; i < v.length; i++)
		answer[i % n] += v[i];

	return (answer);
};
