const validBraces = braces => {
  while (/\(\)|\[\]|\{\}/g.test(braces)) braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
  return !braces.length;
};
