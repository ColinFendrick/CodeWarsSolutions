import re

def is_valid_IP(str):
  return True if re.search(
    '^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$', str
  ) else False