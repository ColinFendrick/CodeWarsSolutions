# from itertools import groupby

# def pick_peaks(arr):
#     res = {'pos': [], 'peaks': []}
#     if not arr:
#         return res

#     arr = dict(enum(list(j) for i, j in groupby(arr)))
#     keys = sorted(arr.keys())

#     for i in arr:
#         if i != keys[0] and i != keys[-1]:

#             current = arr[i][0]
#             previous = arr[keys[keys.index(i) + 1]][0]
#             post = arr[keys[keys.index(i) - 1]][0]

#             if current > post and current > previous:
#                 res['pos'] = res['pos'] + [i]
#                 res['peaks'] = res['peaks'] + [arr[i][0]]
#     return res


# def enum(a):
#     i = 0
#     for j in a:
#         if len(j) == 1:
#             yield(i, j)
#             i += 1
#         else:
#             yield(i, j)
#             i += len(j)

def pick_peaks(arr):
    pos = []
    prob_peak = False
    for i in range(1, len(arr)):
        if arr[i] > arr[i-1]:
            prob_peak = i
        elif arr[i] < arr[i-1] and prob_peak:
            pos.append(prob_peak)
            prob_peak = False
    return {'pos': pos, 'peaks': [arr[i] for i in pos]}
