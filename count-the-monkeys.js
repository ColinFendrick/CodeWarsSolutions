let monkeyCount = n => Array.from({ length: n }, (v, i) => i + 1);

//Refactor

monkeyCount = n => {
	let answer = [];
	for (let i = 1; i <= n; i++)
		answer.push(i);

	return answer;
};
