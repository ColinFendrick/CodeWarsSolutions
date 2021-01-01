from math import sqrt

def calc_pyth(a=None, b=None):
	if a == None:
		a = float(input("a: "))
	if b == None:
		b = float(input("b: "))

	c = a**2 + b**2
	return c, sqrt(c)

print(
	calc_pyth(None, 20)
)
