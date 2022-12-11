function mergeSortedArrays(arr1, arr2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let merged = [];

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      merged.push(arr1[pointer1]);
      pointer1++;
    } else {
      merged.push(arr2[pointer2]);
      pointer2++;
    }
  }

  if (pointer1 === arr1.length) {
    merged.push(...arr2.splice(pointer2));
  } else {
    merged.push(...arr1.splice(pointer1));
  }

  return merged;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return mergeSortedArrays(left, right);
}