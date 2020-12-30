import math


def sol_equa(n):
	res = []
	for i in range(1, int(math.sqrt(n)) + 1):
		if n % i == 0:
			j = n // i
			if (i + j) % 2 == 0 and (j - i) % 4 == 0:
				x = (i + j) // 2
				y = (j - i) // 4
				res.append([x, y])

	return res

# def sol_equa(n):
#   return [[(n/i + i)/2,(n/i - i)/4] for i in range(1, int(n ** 0.5) + 1)
#   if n % i == 0 and (n/i + i) % 2 ==0 and (n/i - i) % 4 ==0]
