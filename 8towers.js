// const towerCombination = n => {
// 	let res = n;

// 	if (n === 0 || n === 1)
// 		return 1;

// 	while (n > 1) {
//     n--;
//     res *= n;
// 	}

// 	return res;
// };

const towerCombination = n =>
	(n === 0 || n === 1) ? 1 : n * towerCombination(n - 1);
