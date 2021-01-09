const nico = (key, message) => {
	let k = key.length;
	let m = message.length;

	if (m % k)
		message += ' '.repeat(k - m % k);

	let cipher = [...key]
		.map((char, i) => [char, i])
		.sort((a, b) => a[0].localeCompare(b[0]))
		.map((a, i) => a.concat(i))
		.sort((a, b) => a[1] - b[1])
		.map(a => a[2]);

	return [...message]
	  .map((char, i) => [char, Math.floor(i / k) * k + cipher[i % k]])
		.sort((a, b) => a[1] - b[1])
		.map(a => a[0])
		.join('');
};
