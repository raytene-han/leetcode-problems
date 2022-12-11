/**
 * @param {number} n
 * @return {number}
 */

 var climbStairs = function(n) {
  let ways = Array.from({length: n + 1}).fill(0);

  ways[0] = 0;
  ways[1] = 1;
  ways[2] = 2;

  for (let i = 3; i <= n; i++) {
      ways[i] = ways[i - 1] + ways[i - 2];
  }

  return ways[n];
};