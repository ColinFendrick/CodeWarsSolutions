def de_nico(key, msg):
    numeric_key = [key.index(char) for char in sorted(key)]
    key_index = [numeric_key.index(i) for i in range(len(key))]
    split_msg = [msg[i:i + len(key)] for i in range(0, len(msg), len(key))]

    output_msg = ''

    for part in split_msg:
        for idx in key_index:
            try:
                output_msg += part[idx]
            except IndexError:
                pass
    return output_msg.strip(' ')
