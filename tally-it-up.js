const scoreToTally = score => {
	const count = Math.floor(score / 5);
	const leftover = score % 5;

	let res = '';
	for (let i = 0; i < count; i++)
		res += 'e <br>';

	switch (leftover) {
	case 0:
		break;
	case 1:
		res += 'a';
		break;
	case 2:
		res += 'b';
		break;
	case 3:
		res += 'c';
		break;
	case 4:
		res += 'd';
		break;
	default:
		break;
	}

	return res;
};
