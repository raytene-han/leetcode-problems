/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
  const vowels = 'aeiouAEIOU';
  const vowelLocations = [];
  let output = "";

  for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) vowelLocations.push(i);
  }

  let index = vowelLocations.length - 1;
  for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
          output += s[vowelLocations[index]];
          index--;
      } else {
          output += s[i];
      }
  }

  return output;
};