// two pointers
// start lastZeroIndex outside of array
// loop through nums array
// check if each position is a zero and no zeroes have been found yet
// when the first zero is found, give it the index (i)
// else, when nums[i] is not zero and we have already found a zero
// store the number in a temp variable
// store the zero in the nums[i] position
// store the number on the lastZeroIndex
// move lastZeroIndex to the next position

var moveZeroes = function (nums) {
  let lastZeroIndex = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && lastZeroIndex === -1) {
      lastZeroIndex = i
    } else if (nums[i] !== 0 && lastZeroIndex !== -1) {
      let temp = nums[i]
      nums[i] = nums[lastZeroIndex]
      nums[lastZeroIndex] = temp
      lastZeroIndex += 1
    }
  }
  console.log(nums)
}

moveZeroes([1, 0, 13, 23, 0, 4])
