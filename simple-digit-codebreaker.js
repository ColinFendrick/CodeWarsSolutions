const code = [5, 5, 5];

const tryCode = (indications) => {
  indications instanceof Array ? null : indications = [0, 0, 0];
  return code.map((e, i) => e + indications[i]);
};
