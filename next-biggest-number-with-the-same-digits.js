const nextBigger = (n) => {
	const d = ('' + n).split('')
	let pivot
	let numArray
	let newArray
	let min = 10
	let place
	for (let i = d.length - 2; i >= 0; i--) {
		if (d[i] < d[i + 1]) {
			numArray = d.slice(i + 1)
			pivot = d[i]
			for (var j = 0; j < numArray.length; j++) {
				if ((numArray[j] < min) && (numArray[j] > pivot)) {
					min = numArray[j]
					place = j
				}
			}
			d.splice(i, 1, min)
			numArray.splice(place, 1, pivot)
			return Number(d.slice(0, i + 1).concat(numArray.sort()).join(''))
		}
	}
	return -1
}