const rankOfElement = (arr, i) => {
  let answer = 0
  for (let j = 0; j < i; j++) {
    if (arr[j] <= arr[i]) {
      answer++
    }
  }
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      answer++
    }
  }
  return answer
}