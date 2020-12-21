let spinningRings = (innerMax, outerMax) => {
	const max = Math.max(innerMax, outerMax) * 2;
	let inner = 0;
	let outer = 0;
	for (let i = 1; i <= max; i++) {
		inner = innerMax - i + 1 > -1 ? innerMax - i + 1 : innerMax - ((i - 1) % (innerMax + 1));
		outer = i <= outerMax ? i : (i) % (outerMax + 1);
		if (inner === outer) {
			return i;
		}
	}
};


spinningRings = (m, n) => {
	let [a, b, result] = [0, 0, 0];
	do {
		result++;
		a = (a + m) % (m + 1);
		b = (b + 1) % (n + 1);
	} while (a !== b);
	return result;
};