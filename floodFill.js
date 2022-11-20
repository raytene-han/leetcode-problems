/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

 var floodFill = function(image, sr, sc, color, startColor=image[sr][sc]) {
  if (image[sr][sc] === color || image[sr][sc] !== startColor) return image;

  image[sr][sc] = color;

  const m = image.length;
  const n = image[0].length;

  const neighbors = [
      [sr + 1, sc],
      [sr - 1, sc],
      [sr, sc + 1],
      [sr, sc - 1]
  ].filter(([a, b]) => (a >= 0 && a < m && b >= 0 && b < n));

  if (neighbors.length > 0) {
      neighbors.map(([a, b]) => floodFill(image, a, b, color, startColor));
  }

  return image;
};