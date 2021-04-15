function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[seqIdx]) {
      if (seqIdx === sequence.length - 1) {
        return true;
      } else {
        seqIdx++;
        continue;
      }
    } else if (i === array.length - 1) {
      return false;
    }
  }
  return seqIdx === sequence.length;
}

//complexity: time O(n) where n is length of big array, space O(1)
