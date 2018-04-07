from itertools import combinations


def power(lst):
    return [list(b) for a in range(len(lst) + 1) for b in combinations(lst, a)]
