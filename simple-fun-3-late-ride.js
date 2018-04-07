function lateRide(n) {
	var min = n % 60
	var hours = Math.floor(n / 60)
	var answer = 0
	while (hours) {
		answer += hours % 10
		hours = Math.floor(hours / 10)
	}
	while (min) {
		answer += min % 10
		min = Math.floor(min / 10)
	}
	return answer



}