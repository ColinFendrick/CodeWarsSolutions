function sign(number) {
	if ((typeof number === 'object') && ((number.length !== 1) || (number.toString().includes(','))))
		return NaN;
	else {
		let myNumber = parseInt(number);
		if ((myNumber > 0) || (number === Infinity))
			return 1;
		else if ((myNumber < 0) || (number === -Infinity))
			return -1;
		else if (myNumber === 0)
			return 0;
		else
			return NaN;
	}
}
