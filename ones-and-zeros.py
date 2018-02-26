def binary_array_to_number(arr):
  binary = ""
  for i in arr:
    binary += str(i)   
  return int(binary, 2)