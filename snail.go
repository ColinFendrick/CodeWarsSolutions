package kata

// Snail ...
func Snail(snaipMap [][]int) []int {
	l := len(snaipMap[0])
	if l == 0 {
		return []int{}
	} else if l == 1 {
		return []int{snaipMap[0][0]}
	}

	h, v := 0, 0
	var result []int

	for h = 0; h < l; h++ {
		result = append(result, snaipMap[0][h])
	}
	for v = 1; v < l; v++ {
		result = append(result, snaipMap[v][l-1])
	}
	for h = l - 2; h >= 0; h-- {
		result = append(result, snaipMap[l-1][h])
	}
	for v = l - 2; v > 0; v-- {
		result = append(result, snaipMap[v][0])
	}

	if l > 2 {
		inner := [][]int{}

		for _, e := range snaipMap[1 : l-1] {
			inner = append(inner, e[1:l-1])
		}

		result = append(result, Snail(inner)...)
	}

	return result
}
