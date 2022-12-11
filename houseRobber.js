/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  let twoBehind = 0;
  let oneBehind = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] + twoBehind > oneBehind) {
          max = nums[i] + twoBehind;
      } else {
          max = oneBehind;
      }

      twoBehind = oneBehind;
      oneBehind = max;
  }

  return max;
};