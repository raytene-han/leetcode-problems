/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let max = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
      const currProfit = prices[right] - prices[left];

      if (currProfit > max) {
          max = currProfit;
      } else if (currProfit <= 0) {
          left++;
          right = left;
      }
      right++;
  }

  return max;
};