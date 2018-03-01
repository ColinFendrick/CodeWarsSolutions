from collections import Counter

def find_it(seq):
    for k, v in Counter(seq).items():
        if v % 2:
            return k