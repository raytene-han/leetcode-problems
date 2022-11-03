/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
  let sum = a;

  for (let i = 0; i < Math.abs(b); i++) {
      if (b > 0) sum += 1;
      else sum -= 1;
  }

return sum;
};