function fizzbuzz(n) {
  let output = []
  for (i=1; i<=n; i++) {
    if (i%3 === 0 && i%5 !== 0) {output.push("Fizz")}
    else if (i%3 !== 0 && i%5 === 0) {output.push("Buzz")}
    else if (i%3 === 0 && i%5 === 0) {output.push("FizzBuzz")}
    else {output.push(i)}
  }
  return output
}
let fizzify = fizzbuzz