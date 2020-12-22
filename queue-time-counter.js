const queue = (queuers, pos) =>
	queuers.reduce((acc, val, ix) => acc + Math.min(val, queuers[pos] - Number(ix > pos)), 0);
