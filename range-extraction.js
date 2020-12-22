const solution = list => {
	const result = [];
	let temp   = [];
	for (let i = 0; i < list.length; i++)

		if (list[i] + 1 === list[i + 1])  temp.push(list[i]);

		else {
			list[i] - 1 === temp.slice(-1)[0] ? temp.push(list[i]) : result.push(String(list[i]));

			if (temp.length >= 3) result.push(String(temp[0]) + '-' + String(temp.slice(-1)));
			else for (let j of temp) result.push(String(j));

			temp = [];
		}

	return result.join(',');
};
