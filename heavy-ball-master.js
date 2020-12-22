const findBall = scales => {
	let ix = -1;
	let wgt = scales.getWeight([0, 1, 2], [3, 4, 5]);
	if (wgt === 1) {
		wgt = scales.getWeight([3], [4]);
		if (wgt === 1)
			ix = 4;
		 else if (wgt === -1)
			ix = 3;
		 else
			ix = 5;

	} else if (wgt === -1) {
		wgt = scales.getWeight([0], [1]);
		if (wgt === 1)
			ix = 1;
		 else if (wgt === -1)
			ix = 0;
		 else
			ix = 2;

	} else {
		wgt = scales.getWeight([6], [7]);
		ix = wgt === 1 ? 7 : 6;
	}
	return ix;
};
