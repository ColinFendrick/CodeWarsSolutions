DENSITY = {'H':1.36,'W':1.00,'A':.87,'O':.8}


def separate_liquids(glass):
		if not glass: return []
		res = sorted(reduce(lambda x, y: x+y, glass), key=lambda x: DENSITY[x])

		return [res[i:i+len(glass[0])] for i in range (0, len(res), len(glass[0]))]