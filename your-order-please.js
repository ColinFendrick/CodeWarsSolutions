const order = words => {
	if (words === '') {
		return '';
	}
	let stringOfWords = words.split(' ');
	let answer = [];
	let j = 1;
	for (let i = 0; i < stringOfWords.length; i++) {
		if (stringOfWords[i].indexOf(j) > -1) {
			answer.push(words[i]);
			j++;
			i=-1;
		}
	}
	return answer.join(' ');
};

