function printerError(s) {
	let errors = 0;
	let errorArray = 'nopqrstuvwxyz'.split('');
	for (let i = 0; i < s.length; i++) {
		if (errorArray.includes(s[i])) {
			errors += 1;
		}
	}
	return errors + '/' + s.length;
}