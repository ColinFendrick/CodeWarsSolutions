def tribonacci(signature, n):
  result = signature[:n]
  for x in range(n - 3): 
    result.append(sum(result[-3:]))
  return result