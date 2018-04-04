def find_even_index(arr):
  left, right = 0, sum(arr)
  for i, value in enumerate(arr):
    right -= value 
    if left == right:
      return i
    left += value
  return -1