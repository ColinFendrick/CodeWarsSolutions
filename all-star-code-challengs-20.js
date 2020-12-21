function addArrays(array1, array2) {
	let answer = [];
	if (array1.length === array2.length) {
		for (let i = 0; i < array1.length; i++) {
			answer[i] = array1[i] + array2[i];
		}
	} else if (array1.length !== array2.length) {
		throw 'Error';
	}
	return answer;
}