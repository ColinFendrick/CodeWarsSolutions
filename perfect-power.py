import math
def isPP(n):
  ln = int(math.log(n)/math.log(2)) + 1
  y = []

  for i in range(n + 1):
    if (i <= 1):
      continue
    li = int(math.log(i)/math.log(2))
    mxi = ln / li + 1
    for it in range(mxi):
      if (it <= 1):
        continue
      if i ** it == n:
        y.append(i,it)

  if len(y) < 1:
    return None
  else:
    return list(y[0])

