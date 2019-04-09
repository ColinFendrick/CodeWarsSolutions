const rot13 = str =>
  `${str}`.replace(/[a-zA-Z]/gi, s =>
    String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13)))