function SortDescending(arr) {
    const length = arr.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  const numbers = [10, 5, 8, 1, 7];
  const sortedDescending = SortDescending(numbers.slice());
  console.log(sortedDescending); // Output: [10, 8, 7, 5, 1]
  