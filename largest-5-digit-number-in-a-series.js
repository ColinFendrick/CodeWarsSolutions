const solution = d => {
	let arr = d.toString().split('');
	let ans = 0;
	for (let i = 0; i < arr.length - 4; i++) {
		let num = Number(arr.slice(i, i + 5).join(''));
		if (num > ans)
			ans = num;

	}
	return (ans);
};
