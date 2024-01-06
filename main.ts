function findLongestCommonPrefix(strings: string[]): string {
  if (strings.length < 2) {
    return "";
  }
  return strings.reduce((accamulator, currentValue, index, array) => {
    let tempPrefix = "";
    for (let i = 0; i < currentValue.length; i++) {
      const currentChar = currentValue[i];
      if (
        array.some((s, indexSome) => {
          return s[i] === currentChar && indexSome !== index;
        })
      ) {
        tempPrefix += currentChar;
      } else {
        break;
      }
    }
    if (tempPrefix.length > accamulator.length) {
      return tempPrefix;
    }
    return accamulator;
  }, "");
}

const inputArray: string[] = ["a", "aa", "aaa", "foo", "foot", "xxxxx"];
const result: string = findLongestCommonPrefix(inputArray);
console.log("RESULT ===>>>", result);
