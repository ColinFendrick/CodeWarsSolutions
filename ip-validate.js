// const isValidIP = str => {

// 	const octetCheck = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/
// 	const splitStr = str.split('.')
// 	if (splitStr.length !== 4) {
// 		return false
// 	}

// 	for (let i in splitStr) {
// 		if (!octetCheck.test(splitStr[i])) {
// 			return false
// 		}
// 	}

// 	return true
// }

const isValidIP = str => /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
