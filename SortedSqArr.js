function sortedSquaredArray(array) {
  //using pointers
  let squares = [];
  let left = 0;
  let right = array.length - 1;

  for (let i = right; i >= 0; i--) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      squares[i] = array[left] * array[left];
      left++;
    } else {
      squares[i] = array[right] * array[right];
      right--;
    }
  }
  return squares;
}

//complexity: time O(n) where n is length of array, space O(n)
