def check_three_and_two(array):
  two, three = False, False
  for el in array:
    if array.count(el) == 2:
      two = True
    if array.count(el) == 3:
      three = True
    if two == three == True:
      return True
  return False


    
