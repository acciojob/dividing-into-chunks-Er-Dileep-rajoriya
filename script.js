const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > n) {
      // If adding the next element exceeds n, push the current subarray to result
      result.push(currentSubarray);
      // Reset the current subarray and sum
      currentSubarray = [];
      currentSum = 0;
    }
    
    // Add the current element to the subarray
    currentSubarray.push(arr[i]);
    currentSum += arr[i];
  }

  // Push the last subarray if it has elements
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));

