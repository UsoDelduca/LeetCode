// set two pointers
// iterate over s using while
// if there is a match, move both pointers
// if there is no match, move second pointer
// check if second pointer has gone over all chars
// return false - no subsequence
// return true - it is subsequence

var isSubsequence = function (s, t) {
  let p1 = 0
  let p2 = 0

  while (p1 < s.length) {
    if (s[p1] === t[p2]) {
      p1++
      p2++
    } else {
      p2++
      if (p2 > t.length) {
        return false
      }
    }
  }
  return true
}

console.log(isSubsequence('acb', 'rahbgdc'))
