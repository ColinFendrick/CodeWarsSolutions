function f(n) {
	let answer = 0;
	if ((typeof n !== 'number') || (n < 1) || (n % 1 !== 0))
		return false;
	 else
		for (let i = 0; i <= n; i++)
			answer += i;


	return answer;
}
