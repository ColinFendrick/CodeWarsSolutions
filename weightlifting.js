const weights = [20, 15, 10, 5, 2.5, 1.25];

const liftingCalc = w => {
	if (w < 20)
		return false;


	const res = [];
	let side = (w - 20) / 2;
	let idx = 0;
	while (side > 0) {
		side >= weights[idx] ? (res.push(weights[idx]), side -= weights[idx]) : idx++;

		if (idx > 5)
			return false;

	}
	return res;
};
