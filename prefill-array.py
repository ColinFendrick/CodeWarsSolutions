def prefill(n=0,v=None):
    try:
        return [v] * int(n)
    except:
        raise TypeError(str(n) + ' is invalid')