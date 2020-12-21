const rgb = (r, g, b) => {
	const toHex = c => {
		if (c > 255) return 'FF';
		else if (c < 0) return '00';
		else return c.toString(16).padStart(2, '0').toUpperCase();
	};

	return toHex(r) + toHex(g) + toHex(b);
};
