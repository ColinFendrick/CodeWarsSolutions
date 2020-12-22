const RATES = {
	'close friend': 25,
	'friend': 50,
	'acquaintance': 100,
	'undefined': 125
};

const DEFAULT_RATE = 125;

const bearDollars = arr => arr.map(m => {
	let [jobs, relation] = m;
	return jobs * (RATES[relation.toLowerCase()] || DEFAULT_RATE);
}).reduce((t, n) => t + n, 0);
