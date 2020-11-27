package kata

func reverse(s1 string) string {
	s2 := ""
	for i := len(s1); i > 0; i-- {
		s2 += string(s1[i-1])
	}
	return s2
}

// Revrot ...
func Revrot(s string, n int) string {
	if len(s) < n || n == 0 {
		return ""
	}
	result := ""
	for i := 0; i < len(s)/n; i++ {
		subs := s[0+n*i : n*(i+1)]
		y := 0
		for _, x := range subs {
			y += int((x - 48) * (x - 48) * (x - 48))
		}
		if y%2 == 0 {
			result += reverse(subs)
		} else {
			result += subs[1:] + subs[:1]
		}
	}
	return result
}
