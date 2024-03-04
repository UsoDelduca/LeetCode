/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

*/

/* !!!!!! This solution does not work on LeetCode !!!!!! */

// create a new result array for the booleans
// find the Max value in the candies array and set it as a variable (max)
// loop through the candies array
// add the extra candies to the current kid
// check if the added candies match or surpass the Max value
var kidsWithCandies = function (candies, extraCandies) {
  let result = []
  let max = Math.max(...candies)

  for (let i = 0; i < candies.length; i++) {
    candies[i] + extraCandies >= max
      ? (result[i] = 'true')
      : (result[i] = 'false')
  }
  return result
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))
console.log(kidsWithCandies([12, 1, 12], 10))
