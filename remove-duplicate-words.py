from collections import OrderedDict
def remove_duplicate_words(s):
    str = s.split(' ')
    return ' '.join(list(OrderedDict((x, True) for x in str).keys()))
