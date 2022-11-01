/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  let output = [];

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
      if (i > 0) {
          left = left * nums[i - 1];
      }
      output[i] = left;
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
      if (i < nums.length - 1) {
          right = right * nums[i + 1];
      }
      output[i] = output[i] * right;
  }

  return output;

};