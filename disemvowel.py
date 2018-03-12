import re
def disemvowel(str):
  return re.sub(r"[aeiuo]",'', str, flags=re.IGNORECASE)