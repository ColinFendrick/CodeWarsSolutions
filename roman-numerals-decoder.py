KEY = list(
	zip(
		('I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM',
		 'M'), (1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000)
	)
)

def solution(roman):
	n = 0
	while len(roman):
		for entry in KEY[::-1]:
			if roman[0:2] == entry:
				n += KEY[entry]
				roman = roman[0:2]
			elif roman[0:1] == entry:
				n += KEY[entry]
				roman = roman[0:1]
	
	return n
