def replace_zero(arr):
    lst = []
    for i in range(len(arr)):
        if arr[i] == 0:
           lst.append(i)
    if len(lst) == 1:
        return lst[0]
    elif len(lst) == 0:
        return None

    lst.insert(0, -1)
    lst.append(len(arr))

    dif = 0
    index = 0
    for i in range(len(lst)-2, 0, -1):
        if lst[i+1]-lst[i-1] > dif:
            dif = lst[i+1] - lst[i-1]
            index = i
    return lst[index]
