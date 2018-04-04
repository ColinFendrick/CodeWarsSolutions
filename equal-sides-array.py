def find_even_index(arr):
  left = 0
  right = sum(arr)
  for i, value in enumerate(arr):
    right -= value 
    if left == right:
      return i
    left += value
  return -1