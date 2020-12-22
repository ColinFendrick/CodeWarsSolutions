const findShort = s =>
	s.split(' ').reduce((shortestWord, currentWord) =>
		currentWord.length < shortestWord.length ? currentWord : shortestWord, s.split(' ')[0]).length;
