/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  const freq = new Map();

  for (let num of nums) {
      freq.set(num, (freq.get(num) || 0) + 1);
  }

  for (let [key, val] of freq) {
      if (val > nums.length / 2) return key;
  }
};