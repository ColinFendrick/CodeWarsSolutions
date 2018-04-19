def format_words(words):
		if not words or "".join(words) == "":
				return ''
		words = list(filter(lambda word: len(word) > 0, words))
		if len(words) == 1:
				return words[0]
		return '{} and {}'.format(', '.join(words[:-1]), words[-1])


