import re

def calc(expr):
  tokens = expr.split(' ')
  numberStack = []
  for token in tokens:
    if re.match('\d+.?\d*?', token):
      numberStack.append(float(token))
    else:
      if len(numberStack) > 0:
        b = numberStack.pop()
      if len(numberStack) > 0:
        a = numberStack.pop

      if (token == '+'):
        numberStack.append(a + b)
      if (token == '-'):
        numberStack.append(a - b)
      if (token == '*'):
        numberStack.append(a * b)
      if (token == '/'):
        numberStack.append(a / b)
        
      
  return numberStack[0] if len(numberStack) > 0 else 0
