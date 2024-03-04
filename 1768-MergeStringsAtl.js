// compare the length of the arrays
// concatenate values
// if a string is longer than the other
// use slice at the latest position
// return the concatenated string

var mergeAlternately = function (word1, word2) {
  const lengthDiff = Math.min(word1.length, word2.length)
  let i
  let result = ''

  for (i = 0; i < lengthDiff; i++) {
    result += word1[i] + word2[i]
  }
  return result + word1.slice(i) + word2.slice(i)
}

console.log(mergeAlternately('aaa', 'bbb'))
console.log(mergeAlternately('dddddd', 'bbb'))
console.log(mergeAlternately('aa', 'bbddddb'))
console.log(mergeAlternately('crlo', 'aah'))
