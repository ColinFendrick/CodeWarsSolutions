export class Challenge {
static validBraces(braces) {
    while (/\(\)|\[\]|\{\}/g.test(braces)) braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
    return !braces.length;
  }
}
