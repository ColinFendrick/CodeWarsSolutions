const nico = (key, message) => {
	const part = Math.ceil(message.length / key.length);

	const d = {};

	const mask = key.split('')
		.sort()
		.map((e, i) => [e, i + 1])
		.sort((a, b) => key.indexOf(a[0]) - key.indexOf(b[0]))
		.map(e => e[1]);


	for (let i = 0; i < key.length; i++) {
		let temp = '';
		for (let j = i; j < message.length; j += key.length)
			temp += message[j];

		temp.length < part ? temp += ' '.repeat(part - temp.length) : undefined;
		d[mask.shift()] = temp.split('');
	}

	let result = '';

	while (Object.keys(d).every(e => d[e].length !== 0))
		Object.keys(d).forEach(e => result += d[e].shift());

	return result;
};
