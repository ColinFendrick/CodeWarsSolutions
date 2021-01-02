# to_camel_case = lambda string: ''.join(x.capitalize() for x in string.split())

import re

def to_camel_case(s):
  words = re.compile("[^A-Za-z]+").split(s)
  return "".join(w.lower() if i is 0 and w.islower() else w.title() for i, w in enumerate(words))

# def to_camel_case(s):
#   return s[0] + s.title().translate(None, "-_")[1:] if s else s