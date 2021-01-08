# KEY = list(
# 	zip(
# 		('I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM',
# 		 'M'), (1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000)
# 	)
# )

# def solution(roman):
# 	n = 0
# 	while len(roman):
# 		for entry in KEY[::-1]:
# 			if roman[0:2] == entry:
# 				n += KEY[entry]
# 				roman = roman[0:2]
# 			elif roman[0:1] == entry:
# 				n += KEY[entry]
# 				roman = roman[0:1]
	
# 	return n


KEY = (
    ('M', 1000), ('CM', 900), ('D', 500), ('CD', 400), ('C', 100),
    ('XC', 90), ('L', 50), ('XL', 40), ('X', 10), ('IX', 9), ('V', 5),
    ('IV', 4), ('I', 1)
)


def solution(roman):
	result = 0
	index = 0
	for rom, arab in KEY:
		while roman[index: index+len(rom)] == rom:
			result += arab
			index += len(rom)
	return result
