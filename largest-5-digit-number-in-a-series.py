def solution(digits):
  return max(int(digits[a:a + 5]) for a in range(len(digits) - 4))