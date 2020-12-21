function squareOrSquareRoot(array) {
	let sqArray = [];
	for (let i = 0; i < array.length; i++) {
		if (Math.sqrt(array[i]) % 1 !== 0) {
			sqArray.push(array[i] * array[i]);
		} else {
			sqArray.push(Math.sqrt(array[i]));
		}

	}
	return sqArray;
}