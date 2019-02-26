const formatDuration = num => {
	let seconds = num; let minutes = 0; let hours = 0; let days = 0; let years = 0; 

	if (seconds === 0) {
		return "now";
	}
	
	else if (seconds === 1) {
		return "1 second";
	}
	
	else if (seconds < 60) {
		return seconds + " seconds"; 
	}
	
	if (seconds >= 60) {
		minutes = (num - num % 60) / 60;
		seconds  = seconds - (minutes * 60); 
	} 
	
	if (minutes >= 60) {
		hours = (minutes - minutes % 60) / 60;
		minutes = minutes - (hours * 60); 
	}
	
	if (hours >= 24) {
		days = (hours - hours % 24) / 24; 
		hours = hours - (days * 24); 
	}
	
	if (days > 365) {
		years = (days - days % 365) / 365;
		days = days - (years * 365); 
	}
	
	const sentenceArr = [];   
	const unitNames = ["years", "days", "hours", "minutes", "seconds"]; 
	const unitNums = [years, days, hours, minutes, seconds]; 
	
	for (const i in unitNums) {
		if (unitNums[i] !== 0) {
			if (unitNums[i] === 1) { 
				sentenceArr.push(unitNums[i] + " " + unitNames[i].slice(0, -1) + ", ");
			} else {
				sentenceArr.push(unitNums[i] + " " + unitNames[i] + ", "); 
			}
		}
	}

  if (sentenceArr.length === 1) {
		return sentenceArr[0].slice(0, -2); 
	}

  const last = " and " + sentenceArr[sentenceArr.length - 1].slice(0, -2); 
  const second = sentenceArr[sentenceArr.length - 2].slice(0, -2); 
  sentenceArr.splice(sentenceArr.length - 2, 2, second, last); 
	
  return sentenceArr.join(""); 
};
