package kata

import "strings"

// Arrange ...
func Arrange(s string) string {
	f := strings.Fields(s)

	for i := 1; i < len(f); i += 2 {
		if len(f[i]) < len(f[i-1]) {
			f[i], f[i-1] = f[i-1], f[i]
		}

		f[i-1] = strings.ToLower(f[i-1])
		f[i] = strings.ToUpper(f[i])

		if i+1 < len(f) {
			if len(f[i]) < len(f[i+1]) {
				f[i], f[i+1] = f[i+1], f[i]
			}

			f[i] = strings.ToUpper(f[i])
			f[i+1] = strings.ToLower(f[i+1])
		}
	}
	return strings.Join(f, " ")
}
