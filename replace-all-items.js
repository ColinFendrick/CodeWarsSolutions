function replaceAll(seq, find, replace) {
	if (typeof seq === 'string') {
		seq = 'Hell0 W0rld';
	} else {
		for (let i = 0; i < seq.length; i++) {
			if (seq[i] === find) {
				seq[i] = replace;
			}
		}
	}
	return seq;
}