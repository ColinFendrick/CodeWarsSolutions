const foldTo = d => {
	if (d <= 0) {
		return null
	}
	let dist = d * 10000
	if (dist < 1) {
		return 0
	}
	return Math.ceil(Math.log(dist) / Math.log(2))
}