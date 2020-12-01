package kata

import "math"

func ruler(a, b [2]int) float64 {
	if a[0] == 0 || b[0] == 0 {
		return math.Inf(1)
	}
	return math.Sqrt(math.Pow(float64(a[0]-b[0]), 2) + math.Pow(float64(a[1]-b[1]), 2))
}

// PeacefulYard ...
func PeacefulYard(yard []string, minDistance int) bool {
	var L, M, R [2]int
	for i, s := range yard {
		for j, c := range s {
			switch c {
			case 'L':
				L = [2]int{i + 1, j + 1}
			case 'R':
				R = [2]int{i + 1, j + 1}
			case 'M':
				M = [2]int{i + 1, j + 1}
			}
		}
	}
	return ruler(L, M) >= float64(minDistance) &&
		ruler(L, R) >= float64(minDistance) &&
		ruler(M, R) >= float64(minDistance)
}
