import unittest
import math

def sol_equa(n):
    result = []

    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i != 0:
            continue

        j = n / i
        y = (j - i) / 4
        x = i + 2 * y

        if x >= 0 and y >= 0 and (j == x + 2 * y) and (i == x - 2 * y) and isinstance(x, (int, float)) and isinstance(y, (int, float)):
            result.append([x, y])

    return sorted(result, reverse=True)
