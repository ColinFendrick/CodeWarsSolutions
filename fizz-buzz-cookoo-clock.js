function fizzBuzzCuckooClock(time) {
  let min = time.slice(-2)
  let hour = time.slice(0, 2)
  switch (min) {
    case '30':
      return 'Cuckoo'
    case '00':
      switch (hour) {
        case '00':
        case '12':
          return 'Cuckoo '.repeat(12).trim()
        default:
          return 'Cuckoo '.repeat(hour % 12).trim()
      }
    default:
      if (min % 3 === 0 && min % 5 === 0) {
        return 'Fizz Buzz'
      } else if (min % 3 === 0) {
        return 'Fizz'
      } else if (min % 5 === 0) {
        return 'Buzz'
      } else {
        return 'tick'
      }
  }
}