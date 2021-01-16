const getVillainName = bday => {
	const m = ['Evil', 'Vile', 'Cruel', 'Trashy', 'Despicable', 'Embarrassing', 'Disreputable', 'Atrocious', 'Twirling', 'Orange', 'Terrifying', 'Awkward'];
	const d = ['Mustache', 'Pickle', 'Hood Ornament', 'Raisin', 'Recycling Bin', 'Potato', 'Tomato', 'House Cat', 'Teaspoon', 'Laundry Basket'];
	const month = bday.getMonth();
	const last =	bday.getDate().toString().substr(-1);

	return `The ${m[month]} ${d[last]}`;
};
