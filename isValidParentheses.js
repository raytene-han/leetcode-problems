/**
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(s) {
  const openBrackets = {
      "(": ")",
      "{": "}",
      "[": "]",
  }

  const bracketStack = [];

  for (let bracket of s) {
      const stackLength = bracketStack.length;
      const topBracket = bracketStack[stackLength - 1];

      if (openBrackets[topBracket] === bracket) {
          bracketStack.pop();
      } else {
          bracketStack.push(bracket)
      }
  }

  return bracketStack.length === 0;
};