function find_average(array) {
	let total = 0;
	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total / (array.length);
}