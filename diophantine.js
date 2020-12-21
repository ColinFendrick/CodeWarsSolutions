const solequa = n => {
	const res = [];

	for (let i = 1; i < Math.sqrt(n); i++) {
		if (n % i !== 0) continue;
    
		const j = n / i;
		const y = (j - i) / 4;
		const x = i + 2 * y;
    
		if (
			x >= 0 && y >= 0 
      && (j === x + 2 * y) && (i == x - 2 * y) 
      && Number.isInteger(x) && Number.isInteger(y)
		)
			res.push([x, y]);
		
    
		
	}
  
	return res.sort((a, b) => b[0] - a[0]);
};
