# to_camel_case = lambda string: ''.join(x.capitalize() for x in string.split())

import re
word_regex_pattern = re.compile("[^A-Za-z]+")

def to_camel_case(st):
  words = word_regex_pattern.split(st)
  return "".join(w.lower() if i is 0 and w.islower() else w.title() for i, w in enumerate(words))