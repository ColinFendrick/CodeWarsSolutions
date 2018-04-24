def find_next_prime_in_range(a, b):
		for p in range(a, b):
				for q in range(2, p):
						if p % q == 0:
								break
				else:
						return p
		return None

def minimum_number(numbers):
		sigma = sum(numbers)
		next_prime = find_next_prime_in_range(sigma, sigma ** 2)
		return next_prime - sigma
		