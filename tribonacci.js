const tribonacci = (signature, n) => {
  if (n < signature.length) {
    return (n === 0) ? [] : signature.slice(0, n);
  }
  
  for (let i = signature.length; i < n; i += 1) {
    signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
  }

  return signature;
}
