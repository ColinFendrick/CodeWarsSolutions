package kata

// ContainAllRots ...
func ContainAllRots(strng string, arr []string) bool {
	for i := 0; i < len(strng); i++ {
		popout := false
		rotation := strng[i:] + strng[:i]

		for _, j := range arr {
			if j == rotation {
				popout = true
				break
			}
		}
		if !popout {
			return false
		}
	}
	return true
}
