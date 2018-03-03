def series_sum(n):
    return '{:.2f}'.format(sum(1.0 / a for a in range(1, n * 3, 3)))