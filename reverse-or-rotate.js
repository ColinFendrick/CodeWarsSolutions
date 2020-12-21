const digitSum = str =>
	str.split('').map(Number).reduce((pre, el) => pre + el, 0);

const revrot = (str, sz) => {
	if (sz <= 0 || str === '' || sz > str.length) return '';

	const arr=[];
	for (let i = 0; i < Math.floor(str.length / sz); i++) {
		arr.push(str.slice(i * sz, (i+1) * sz));
	}

	return arr.map(el =>
		digitSum(el) % 2 === 0 ? el.split('').reverse().join('') : el.slice(1) + el[0]
	).join(''); 
};
