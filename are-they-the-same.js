function comp(array1, array2) {
	if (array1 == null || array2 == null) {
		return false;
	}
	if (array1.length == 0 && array2.length == 0) {
		return true;
	}
	if (array1.length == 0 || array2.length == 0) {
		return false;
	}
	let array1Squared = array1.map(function (x) {
		return Math.pow(x, 2);
	});
	return array1Squared.sort().toString() === array2.sort().toString() ? true : false;
}