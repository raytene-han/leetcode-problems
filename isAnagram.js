/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const freq = {};

  for (let letter of s) {
      freq[letter] = freq[letter] + 1 || 1;
  }

  for (let letter of t) {
      if (!freq[letter]) return false;
      freq[letter] = freq[letter] - 1;
  }

  return Math.max(...Object.values(freq)) === 0;
};