def tribonacci(signature, n):
  result = []
  for x in range(3, n):
    print(sum(signature[x - 3:x]))
    signature.append(sum(signature[x - 3:x]))
  return signature