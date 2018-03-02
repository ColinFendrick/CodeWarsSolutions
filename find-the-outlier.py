def find_outlier(integers):
    even = odd = None
    even_count = odd_count = 0
    for a in integers:
        if not a % 2:
            even = a
            even_count += 1
        else:
            odd = a
            odd_count += 1
        if even_count and odd_count > 1:
            return even
        elif odd_count and even_count > 1:
            return odd