function fakeBin(x) {
	return x.toString().replace(/[01234]/g, 0).replace(/[56789]/g, 1);
}
