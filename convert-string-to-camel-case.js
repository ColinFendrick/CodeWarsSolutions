const toCamelCase = text => text.replace(
	/^([A-Z])|[\s-_]+(\w)/g,
	(__, p1, p2) => p2 ? p2.toUpperCase() : p1
);