const formatWords = words => (
	Array.isArray(words) && words.length > 0 ? words.filter(word => word).join(', ').replace(/(\w+)(,)(\s\w+)$/, '$1 and$3') : ''
)