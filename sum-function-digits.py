NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598,
        1306, 1676, 2427, 2646798, 12157692622039623539]


def sum_dig_pow(a, b):
    return filter(lambda c: a <= c <= b, NUMS)