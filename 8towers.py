def towerCombination(x):
  if x == 0 or x ==1:
    return 1
  else:
    return (x*towerCombination(x-1))