const stockList = (a, b) => {
	if (!a.length) { return ''; }
	const res = b.reduce((obj, i) => {
		obj[i]=0; return obj; 
	}, {});
	a.forEach(el => b.includes(el[0]) ? res[el[0]]+= +(el.match(/\d+/)[0]) : undefined);
	return b.map(el => `(${el} : ${res[el]})`).join(' - ');
};
