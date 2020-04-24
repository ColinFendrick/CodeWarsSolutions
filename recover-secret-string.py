
# from functools import reduce
# from itertools import zip_longest as zlo

# def recoverSecret(triplets):	
#   first, last = '', ''
#   checker = list(zip(*triplets))
  
#   for i in checker[0]:
#     if i not in (checker[1] + checker[2]):
#       first = i
  
#   for i in checker[2]:
#     if i not in (checker[0] + checker[1]):
#       last = i    

#   while True:
#     triplets = [[x for x in y if x != first[-1]] for y in triplets]
#     checker  = list(zlo(*triplets))

#     if len(checker) > 1:
#       for i in checker[0]:
#         if i not in list(reduce(lambda x,y: x + y, checker[1:])): 
#           first += i
#           break
#     else:
#       return first + last


def fix(l, a, b):
  if l.index(a) > l.index(b):
    l.remove(a)
    l.insert(l.index(b), a)

def recoverSecret(triplets):
  r = list(set([i for l in triplets for i in l]))
  for l in triplets:
    fix(r, l[1], l[2])
    fix(r, l[0], l[1])
  return ''.join(r)
