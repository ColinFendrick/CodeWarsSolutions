def divisors(int):
  return [a for a in range(2, int) if int % a == 0] or ('%d is prime' % int)