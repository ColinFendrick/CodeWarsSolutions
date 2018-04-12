import re


def solve(s):
      return max(
      sum(ord(consonant) for consonant in consonants)-(len(consonants)*96) 
      for consonants in re.findall('[^aeiou]+', s, re.I))