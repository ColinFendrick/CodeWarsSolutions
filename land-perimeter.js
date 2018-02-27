const landPerimeter = arr => {
	let answer = 0
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === 'X') {
				answer += 4

				if (arr[i][j - 1] === 'X') {
					answer -= 2
				}

				if (arr[i - 1] && arr[i - 1][j] === 'X') {
					answer -= 2
				}
			}
		}
	}
	return `Total land perimeter: ${answer}`
}