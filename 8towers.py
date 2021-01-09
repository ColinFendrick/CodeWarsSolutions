def tower_combination(x):
  if x == 0 or x ==1:
    return 1
  else:
    return (x*tower_combination(x-1))
