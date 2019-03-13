const comp = (a1, a2) => 
  !(!a1 || !a2 || a1.length !== a2.length) && a1.map(x => x * x).sort().toString() === a2.sort().toString()
