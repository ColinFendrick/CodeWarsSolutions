function validatePIN(pin) {
	if ((pin.length === 4 && !isNaN(pin[0]) && !isNaN(pin[1]) && !isNaN(pin[2]) && !isNaN(pin[3]))
    || (pin.length === 6 && !isNaN(pin[0]) && !isNaN(pin[1]) && !isNaN(pin[2]) && !isNaN(pin[3])
      && !isNaN(pin[4]) && !isNaN(pin[5]))) {
		return true;
	} else {
		return false;
	}
}