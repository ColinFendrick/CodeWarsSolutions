const matrixAddition = (a, b) => {
	const res = [];
	a.forEach((t, i) => {
		res.push(t.reduce((acc, val, j) => acc.concat(val + b[i][j]), []));
	});
	return res;
};
