/* eslint-disable */

const isPolydivisible = (n, b) => {
	let n1 = CHARS.indexOf(n[0])
	for (let i = 1; i < n.length; i++) {
		n1 = n1 * b + CHARS.indexOf(n[i])
		if (n1 % (i + 1) !== 0) {
			return false
		}
	}
	return true
}

const getPolydivisible = (n, b) => {
	let x = ['0']
	let i = 1
	while (x.length < n) {
		let p = ''
		let num = i
		while (num > 0) {
			p += CHARS[num % b]
			num = Math.floor(num / b)
		}
		p = p.split('').reverse().join('')
		if (isPolydivisible(p, b)) {
			x.push(p)
		}
		i += 1
	}
	return x[n - 1]
}