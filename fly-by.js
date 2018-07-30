const flyBy = (lamps, drone) => 
	lamps.split('').map((lamp, ix) => 
		ix < drone.length ? 'o' : lamp).join('')
