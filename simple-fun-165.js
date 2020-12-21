const withdraw = n => {
	let hundreds = 0,
		fifties = 0,
		twenties = 0;
	if (!(n % 20)) {
		hundreds = Math.floor(n / 100);
		twenties = (n % 100) / 20;
	} else {
		fifties = 1;
		twenties = ((n - 50) % 100) / 20;
		if (n % 100 < 50) {
			hundreds = Math.floor((n - 100) / 100);
		} else {
			hundreds = Math.floor(n / 100);
		}
	}
	return ([hundreds, fifties, twenties]);
};
