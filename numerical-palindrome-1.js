function palindrome(num) {
	if (typeof num !== 'number' || num < 0)
		return 'Not valid';

	else
		return num.toString().split('').reverse().join('') === num.toString();

}
