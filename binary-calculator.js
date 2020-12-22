function calculate(n1, n2, o) {
	let answer = 0;
	if (o === 'add')
		answer = parseInt(n1, 2) + parseInt(n2, 2);
	 else if (o === 'subtract')
		answer = parseInt(n1, 2) - parseInt(n2, 2);
	 else if (o === 'multiply')
		answer = parseInt(n1, 2) * parseInt(n2, 2);

	return answer.toString(2);
}
