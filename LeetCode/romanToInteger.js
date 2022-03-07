/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (string) => {
  spec = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  cases = {
    M: 1000,
    C: 100,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    D: 500,
  };

  Object.keys(spec).map((key) => {
    return (string.split(key).length - 1) * spec[key];
  });

  specCasesList = Object.keys(spec).map((key) => {
    return (string.split(key).length - 1) * spec[key];
  });
  specCasesList.reduce((prev, val) => prev + val, 0);
  var newString = string;
  for (key in spec) {
    var newString = newString.replaceAll(key, "");
  }
  Object.keys(cases).map((keyy) => {
    return (newString.split(keyy).length - 1) * cases[keyy];
  });
  casesList = Object.keys(cases).map((keyy) => {
    return (newString.split(keyy).length - 1) * cases[keyy];
  });
  casesList.reduce((prev, val) => prev + val, 0);
  const result =
    casesList.reduce((prev, val) => prev + val, 0) +
    specCasesList.reduce((prev, val) => prev + val, 0);
  return result;
};
