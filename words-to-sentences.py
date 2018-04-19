def format_words(words):
		if not words or len(words) <= 0:
				return ''
		words = list(filter(lambda word: len(word) > 0, words))
		if len(words) == 1:
				return words[0]
		print('{} and {}'.format(', '.join(words[:-1]), words[-1]))
		return '{} and {}'.format(', '.join(words[:-1]), words[-1])


