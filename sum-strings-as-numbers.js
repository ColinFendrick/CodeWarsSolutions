const sumStrings = (a, b) => {
	let sum = '';
	let i = 0;
	[a, b] = [a.split``, b.split``];

	while (a.length || b.length || i) {
		i += ~~a.pop() + ~~b.pop();
		sum = (i % 10) + sum;
		i = i > 9;
	}

	return sum.replace(/^0+/, '');
};
