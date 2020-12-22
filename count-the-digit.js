function nbDig(n, d) {
	let kk = [];
	for (let i = 0; i <= n; i++)
		kk.push(i * i);

	return (kk.join().split(d).length - 1);
}
