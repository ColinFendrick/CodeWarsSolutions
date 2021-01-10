function* paperFold() {
	yield 1;
	const gen = paperFold();
	while (true)
		yield gen.next().value,
		yield 0,
		yield gen.next().value,
		yield 1;
}
