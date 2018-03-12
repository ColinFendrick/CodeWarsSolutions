import re
def disemvowel(str):
  return re.sub(r"[AEIOUaeiou]",'', str)