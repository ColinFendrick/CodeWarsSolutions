const anagrams = (word, words) =>
	words.filter(el =>
		el.split('').sort().join('') === word.split('').sort().join('')
	);