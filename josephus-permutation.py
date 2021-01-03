def josephus(items, k):
	index = 0
	items_copy = list(items)
	result = []
	while items_copy:
		index = (index + (k - 1)) % len(items_copy)
		result.append(items_copy.pop(index))
	return result
