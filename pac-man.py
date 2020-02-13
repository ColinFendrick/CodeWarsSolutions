def pac_man(N, PM, enemies):
    d = [[0, N], [0, N]]
    for pos in enemies:
        for i, x in enumerate(pos):
            if PM[i] > x:
                d[i][0] = max(d[i][0], x+1)
            else:
                d[i][1] = min(d[i][1], x)
    return (d[0][1]-d[0][0]) * (d[1][1]-d[1][0]) - 1
