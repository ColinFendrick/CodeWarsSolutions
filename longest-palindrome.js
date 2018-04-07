const longestPalindrome = function (s) {
	var answer = 0
	if (s.length === 1) {
		return s.length
	}
	if (s.length == 2 || s.length == 3) {
		return 2
	}
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < s.length; j++) {
			if (s.substring(i, j) === s.substring(i, j).split('').reverse().join('') && s.substring(i, j).length > answer) {
				answer = s.substring(i, j).length
			}
		}
	} return answer
}