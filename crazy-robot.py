def finaldist_crazyrobot(moves, init_pos):
		final_pos = [init_pos[0], init_pos[1]]
		for move in moves:
				if move[0] == 'L':
						final_pos[0] -= move[1]
				if move[0] == 'R':
						final_pos[0] += move[1]
				if move[0] == 'U':
						final_pos[1] += move[1]
				if move[0] == 'D':
						final_pos[1] -= move[1]
		return (((final_pos[0] - init_pos[0]) ** 2 + (final_pos[1] - init_pos[1]) ** 2) ** 0.5)
