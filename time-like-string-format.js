const solution = n => {
	let str = n.toString();
	if ((typeof n !== 'number') || (str.length > 4) || (str.length < 3))
		alert('error');
	 else if (str.length === 3)
		return str[0] + ':' + str[1] + str[2];
	 else if (str.length === 4)
		return str[0] + str[1] + ':' + str[2] + str[3];

};
