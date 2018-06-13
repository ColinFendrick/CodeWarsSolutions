def find_ball(scales):
    def find_ball_helper(balls):
        leng = len(balls)
        if leng == 1:
            return balls[0]
        left_pan = balls[:leng / 2]
        right_pan = balls[leng / 2:]
        w = scales.get_weight(left_pan, right_pan)

        if w < 0:
            return find_ball_helper(left_pan)

        if w > 0:
            return find_ball_helper(right_pan)
    return find_ball_helper(range(8))
