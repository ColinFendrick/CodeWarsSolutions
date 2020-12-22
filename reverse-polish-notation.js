const calc = expr => {
	const tokens = expr.split(' ');
	let numberStack = [];
	tokens.forEach(token => {
		if (token.match(/\d+.?\d*?/))
			numberStack.push(parseFloat(token));
		 else {
			const b = numberStack.pop();
			const a = numberStack.pop();
			console.log(token);
			switch (token) {
			case '+':
				numberStack.push(a + b);
				break;
			case '-':
				numberStack.push(a - b);
				break;
			case '*':
				numberStack.push(a * b);
				break;
			case '/':
				numberStack.push(a / b);
				break;
			}
		}
	});

	return numberStack[0] || 0;
};
