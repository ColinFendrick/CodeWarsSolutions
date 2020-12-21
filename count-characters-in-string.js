function count(string) {
	let answer = {};
	for (let i = 0; i < string.length; i++) {
		!answer[string[i]] ? answer[string[i]] = 1 : answer[string[i]]++;
	}
	return (answer);
}