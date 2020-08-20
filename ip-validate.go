package kata

import (
	"strconv"
	"strings"
)

// IsValidIP ...
func IsValidIP(ip string) bool {
	nums := strings.Split(ip, ".")
	if len(nums) != 4 {
		return false
	}
	for _, value := range nums {
		n, err := strconv.Atoi(value)
		if err != nil || n < 0 || n > 255 || len(value) != len(strconv.Itoa(n)) {
			return false
		}
	}

	return true
}
