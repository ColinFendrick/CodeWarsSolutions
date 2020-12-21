const sum = n => {
	var T = [];
	for (let i = 0; i < n + 1; i++) {
		T.push([]);
		for (let j = 0; j < n + 1; j++) {
			T[i].push(null);
		}
	}
	const calc = (n1, n2) => {
		if (n2 === 0) { return 0; }
		if (n1 === 0) { return 1; }
		if (n1 < 0) { return 0; }
		if (!T[n1][n2]) {
			T[n1][n2] = calc(n1 - n2, n2) + calc(n1, n2 - 1);
		}
		return T[n1][n2];
	};
	return calc(n, n);
};