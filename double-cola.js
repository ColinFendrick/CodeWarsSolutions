const whoIsNext = (names, r) => {
	for (let i = 1; i === r; i++) {
		names.push(names[0], names[0]);
		names.shift();
	}
	return names[0];
};
