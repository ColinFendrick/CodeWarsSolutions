def valid_parentheses(string):
  balance = 0
  for item in string:
    if item == "(":
      balance = balance + 1
    if item == ")":
      balance = balance - 1
    if balance < 0:
      return False
  if balance != 0:
    return False
  return True