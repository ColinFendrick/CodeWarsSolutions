def bingo(ticket, win):
    count = 0

    for mini in ticket:
        for letter in mini[0]:
            if ord(letter) == mini[1]:
                count += 1
                break

    if count >= win:
        return 'Winner!'
    return 'Loser!'
