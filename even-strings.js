const evenChars = str => {
	const res = str.split('').filter((_, i) => i % 2 === 0);
	return res.length ? res : ['invalid string'];
};
