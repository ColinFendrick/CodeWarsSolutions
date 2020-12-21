const speedify = str => {
	const arr = Array.from({ length: 150 }, () => ' ');

	[...str].forEach((el, i) => arr[el.codePointAt() - 65 + i] = el)
	return arr.join('').trimEnd()
}