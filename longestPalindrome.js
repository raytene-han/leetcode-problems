/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  const freq = {};
  let longest = 0;
  let odd = 0;

  for (let letter of s) {
      freq[letter] = (freq[letter] || 0) + 1;
  }


  for (let val of Object.values(freq)) {
      if (val % 2 === 0) {
          longest += val;
      } else {
          longest += (val - 1);
          odd = 1;
      }
  }

  return longest + odd;
};