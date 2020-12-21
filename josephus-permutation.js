const josephus = (items, k) => {
	const result = [];
	let counter = 0;
	let index = 0;
	while (items.length) {
		if (++counter === k) {
			result.push(items.splice(index, 1)[0]);
			counter = 0;
			index--;
		}
		index = (index + 1) % items.length;
	}
	return result;
};