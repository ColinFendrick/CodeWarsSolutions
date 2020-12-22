const humanReadable = s => ('0' + Math.floor(s / 3600)).slice(-2) + ':' + ('0' + Math.floor((s / 60) % 60)).slice(-2) + ':' + ('0' + Math.floor(s % 60)).slice(-2);
