const isSquare = n => {
	if (n < 0) { return undefined; }
	else if (Math.sqrt(n) % 1 === 0) { return true; }
	else { return false; }
};