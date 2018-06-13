def find_ball(scales):
		ix = -1
		wgt = scales.get_weight([0, 1, 2], [3, 4, 5])
		if wgt == 1:
				wgt = scales.get_weight([3], [4])
				if wgt == 1:
						ix = 4
				elif wgt == -1:
						ix = 3
				else:
						ix = 5
		elif wgt == -1:
				wgt = scales.get_weight([0], [1])
				if wgt == 1:
						ix = 1
				elif wgt == -1:
						ix = 0
				else:
						ix = 2
		else:
				wgt = scales.get_weight([6], [7])
				if wgt == 1:
						ix = 7
				else:
						ix = 6
		return ix
				
		
