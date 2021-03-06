from collections import deque
def dbl_linear(n):
    h = 1
    i = 0
    q1, q2 = deque([]), deque([])
    while True:
        if i >= n:
            return h
        q1.append(2*h+1)
        q2.append(3*h+1)
        h = min(q1[0], q2[0])
        if h == q1[0]:
            h = q1.popleft()
        if h == q2[0]:
            h = q2.popleft()
        i += 1
