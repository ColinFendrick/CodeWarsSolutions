const iqTest = numbers => {
	numbers = numbers.split(' ').map(el => parseInt(el))

	const odd = numbers.filter(el => el % 2 === 1)
	const even = numbers.filter(el => el % 2 === 0)

	return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1)
}

// const iqTest = numbers => {
// 	numbers = numbers.split ` `.map((x) => +x % 2)

// 	return (
// 		(numbers.reduce((x, y) => x + y) === 1 ?
// 			numbers.indexOf(1) :
// 			numbers.indexOf(0)) + 1
// 	)
// }
