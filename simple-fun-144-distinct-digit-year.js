function distinctDigitYear(year) {
	let answer;
	for (let newYear = year + 1; newYear < 9001; newYear++) {
		let digitOne = newYear.toString()[0];
		let digitTwo = newYear.toString()[1];
		let digitThree = newYear.toString()[2];
		let digitFour = newYear.toString()[3];
		if ((digitOne !== digitTwo) && (digitOne !== digitThree) && (digitOne !== digitFour) && (digitTwo !== digitThree) &&
      (digitTwo !== digitFour) && (digitThree !== digitFour)) {
			answer = newYear;
			return answer;
		}

	}


}