// This solution includes 2 varians of looking up for a requested gap.
// First one is faster but dirty: modifies loop counter within loop.

package kata

import "math"

func isPrime(x int) bool {
	if x%2 == 0 {
		return false
	}
	for i := 3; i <= int(math.Floor(math.Sqrt(float64(x)))); i += 2 {
		if x%i == 0 {
			return false
		}
	}
	return true
}

// Gap ...
func Gap(g, m, n int) []int {
	if n-m < g {
		return nil
	}

	for i := m; i <= n-g; i++ {
		if isPrime(i) {
			for j := i + 1; j <= i+g; j++ {
				if isPrime(j) {
					if j-i == g {
						return []int{i, i + g}
					}
					break
				}
			}
		}
	}
	return nil
}
