const findMissingLetter = arr => {
  const upperCase = arr[0] === arr[0].toUpperCase();
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  if (upperCase) { alphabet = alphabet.map(letter => letter.toUpperCase()); }
  let alphaIndex = alphabet.findIndex(el => el === arr[0]);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === alphabet[alphaIndex]) {
      alphaIndex++
    } else {
      return alphabet[alphaIndex];
    };
  };
};
