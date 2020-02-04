from collections import Counter
def is_valid_walk(walk):
    counts = Counter(walk)
    if (len(walk) == 10 and counts['n'] == counts['s'] and counts['e'] == counts['w']):   
      return True
    else:
      return False
