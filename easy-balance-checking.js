const balance = book => {
	let total = 0;

	let [budget, ...lines] = book
		.trim()
		.replace(/[^a-z0-9\s.]+/gi, '')
		.replace(/\s{2,}/g, m => m[0])
		.split(/\n/);

	const calcLines = lines.map(r =>
		r.replace(/\S+$/g, r => {
			total += parseFloat(r);
			return (
				`${parseFloat(r).toFixed(2)} Balance ${(
					budget - total
				).toFixed(2)}`
			);
		})
	);

	return (
		`Original Balance: ${parseFloat(budget).toFixed(2)}\r\n` +
    calcLines.join('\r\n') +
    '\r\n' +
    `Total expense  ${total.toFixed(2)}\r\n` +
    `Average expense  ${(total / calcLines.length).toFixed(2)}`
	);
};
