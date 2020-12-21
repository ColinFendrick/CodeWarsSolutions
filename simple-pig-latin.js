const pigIt = str =>
	str.split(' ').map((word) => word.substr(1) + word.substr(0, 1) + 'ay').join(' ');

// //Refactor
// const pigIt = str => {
// 	let words = str.split(' ');
// 	let vowels = ['a', 'e', 'i', 'o', 'u'];
// 	let newStrings = [];
// 	for (let i = 0; i < words.length; i++) {
// 		newStrings.push(words[i].substr(1) + words[i].substr(0, 1) + 'ay');
// 	};
// 	return newStrings.join(' ');
// };
