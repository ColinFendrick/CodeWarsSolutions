def valid_parentheses(string):
    balance = 0
    for char in string:
        if char == '(': balance += 1
        if char == ')': balance -= 1
        if balance < 0: return False
    return True if balance == 0 else False