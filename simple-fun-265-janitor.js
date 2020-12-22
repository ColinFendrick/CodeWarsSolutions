const theJanitor = w => {
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const w_arr = w.split('');

	return alphabet.map(l => {
		const first = w_arr.findIndex(el => el === l) + 1;
		const last = w_arr.lastIndexOf(l) + 1;

		return last ? last - first + 1 :
			first ? 1 : 0;
	});
};
