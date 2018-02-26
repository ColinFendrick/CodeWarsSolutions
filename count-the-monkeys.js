function monkeyCount(n) {
  return Array.from({ length: n }, (v, i) => i + 1)
}

//Refactor

function monkeyCount(n) {
  let answer = []
  for (i = 1; i <= n; i++) {
    answer.push(i)
  }
  return answer
}