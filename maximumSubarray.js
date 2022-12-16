/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let currentMax = nums[0];
  let globalMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
      if (currentMax + nums[i] > nums[i]) {
          currentMax += nums[i];
      } else {
          currentMax = nums[i];
      }

      if (currentMax > globalMax) {
          globalMax = currentMax;
      }
  }

  return globalMax;
};