/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const magazineLetters = {};

  for (let letter of magazine) {
      magazineLetters[letter] = (magazineLetters[letter] || 0) + 1;
  }

  console.log(magazineLetters);

  for (let letter of ransomNote) {
      if (magazineLetters[letter] && magazineLetters[letter] > 0) {
          magazineLetters[letter] = magazineLetters[letter] - 1;
      } else {
          return false;
      }
  }

  return true;
};