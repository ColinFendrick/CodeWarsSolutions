# import re

# def calc(expr):
#   tokens = expr.split(' ')
#   numberStack = []
#   for token in tokens:
#     if re.match('\d+.?\d*?', token):
#       numberStack.append(float(token))
#     else:
#       if len(numberStack) > 0:
#         b = numberStack.pop()
#       # if len(numberStack) > 0:
#         a = numberStack.pop

#         print(a, b)

#       if (token == '+'):
#         numberStack.append(a + b)
#       if (token == '-'):
#         numberStack.append(a - b)
#       if (token == '*'):
#         numberStack.append(a * b)
#       if (token == '/'):
#         numberStack.append(a / b)
        
      
#   return numberStack[0] if len(numberStack) > 0 else 0

import operator

def calc(expr):
  operators = {
    '+': operator.add,
    '-': operator.sub,
    '*': operator.mul,
    '/': operator.div,
  }
  stack = []
  for s in expr.split():
    op = operators.get(s)
    if op is not None:
      b, a = stack.pop(), stack.pop()
      stack.append(op(a, b))
    else:
      stack.append(float(s))
  return stack[-1] if stack else 0