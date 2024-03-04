// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// chek if str1 + str1 is not equal to str2 + str1
// if true, return the empty string
// get the length of both strings
// loop to have the prefix length
// return the GCD

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 != str2 + str1) {
    return ''
  }

  let len1 = str1.length
  let len2 = str2.length

  while (len2 != 0) {
    let temp = len2
    len2 = len1 % len2
    len1 = temp
  }
  console.log('Length of String #1 ater loop: ', len1)
  return str1.substring(0, len1)
}

console.log(gcdOfStrings('ABCABC', 'ABC'))
console.log(gcdOfStrings('ABABABABAB', 'AB'))
// console.log(gcdOfStrings('ABCABC', 'ABC'));
