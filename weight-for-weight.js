function orderWeight(strng) {
	return strng
		.split(' ')
		.map(function (v) {
			return {
				val: v,
				key: v.split('').reduce(function (prev, curr) {
					return parseInt(prev) + parseInt(curr)
				}, 0)
			}
		})
		.sort(function (a, b) {
			return a.key == b.key
				? a.val.localeCompare(b.val)
				: (a.key - b.key)
		})
		.map(function (v) {
			return v.val
		})
		.join(' ')
}