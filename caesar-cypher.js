const movingShift = (str, shift) => {
	let output = '';
	for (let i = 0; i < str.length; i++) {
		let current = str[i];
		if (current.match(/[a-z]/i)) {
			const code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90))
				current = String.fromCharCode(((code - 65 + shift) % 26) + 65);

			else if ((code >= 97) && (code <= 122))
				current = String.fromCharCode(((code - 97 + shift) % 26) + 97);

		}
		output += current;
		shift++;
	}
	const rangeEnd = Math.ceil(output.length / 5);
	const answer = output.match(new RegExp('.{1,' + rangeEnd + '}', 'g'));
	return answer.length === 5 ? answer : answer.concat('');
};

const demovingShift = (input, shift) => {
	let output = '';
	let str = input.join('');
	for (let i = 0; i < str.length; i++) {
		let current = str[i];
		if (current.match(/[a-z]/i)) {
			const code = str.charCodeAt(i);
			if ((code >= 65 - shift) && (code <= 90))
				current = String.fromCharCode(((code - 65 - shift + (26 * input.length)) % 26) + 65);

			else if ((code >= 97 - shift) && (code <= 122))
				current = String.fromCharCode(((code - 97 - shift + (26 * input.length)) % 26) + 97);

		}
		output += current;
		shift++;
	}
	return output;
};
