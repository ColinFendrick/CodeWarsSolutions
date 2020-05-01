# def last_digit(n1, n2):
#     if not n1 or not n2:
#         return 1
#     return int(str(n1 ** (n2 % 4 if n2 % 4 else 4))[-1])


def last_digit(n1, n2):
    return pow(n1, n2, 10)
