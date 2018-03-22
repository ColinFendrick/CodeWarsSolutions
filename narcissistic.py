def narcissistic(n):
  return sum(int(a) ** len(str(n)) for a in str(n)) == n