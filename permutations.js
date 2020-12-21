const permutations = string => {
	let permArr = [],
		usedChars = [];
  
	const arr = string.split('');
  
	const permute = function(array){
		let i, ch;
		for (i = 0; i < array.length; i++) {
			ch = array.splice(i, 1)[0];
			usedChars.push(ch);
			if (array.length === 0) {
				permArr.push(usedChars.slice());
			}
			permute(array);
			array.splice(i, 0, ch);
			usedChars.pop();
		}
    
		return permArr;
	};
  
	const result = permute(arr);
  
	for (let i = 0; i < result.length; i++) {
		let str = '';
		for(let j = 0; j< result[i].length; j++){
			str += result[i][j];
		}
		result[i] = str;
	}
  
	return result.filter((item, pos) => result.indexOf(item) == pos);
};