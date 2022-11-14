/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  const convertedString = s.replace(/[\W_]+/g,'').toLowerCase();

  for (let i = 0; i < Math.floor(convertedString.length / 2); i++) {
      if (convertedString[i] !== convertedString[convertedString.length - i - 1]) {
          return false;
      }
  }

  return true;
};