const validParentheses = parens => {
	let balance = 0;
	for (let i = 0; i < parens.length; i++) {
		if (parens[i] === '(') { balance ++; }
		if (parens[i] ===')') { balance --; }
		if (balance < 0) { return false; }
	}
	if (balance !== 0) { return false; }
	return true;
};