// set a "window start" variable
// set a max value to -Infinity (to pass negative value test cases)
// set a "soFar" variable for current sum
// check if end-start is equal to k-1 (to check is there is a valid window)
// store average value in a variable
// update "max"
// move the window starting point
// return max

var findMaxAverage = function (nums, k) {
  let max = -Infinity
  let soFar = 0
  let windowStart = 0

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    soFar += nums[windowEnd]

    if (windowEnd - windowStart === k - 1) {
      let avg = soFar / k
      max = Math.max(max, avg)
      soFar -= nums[windowStart]
      windowStart++
    }
  }
  return max
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
