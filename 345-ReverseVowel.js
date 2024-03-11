// use two pointers
// one from the 0 index
// another from latest index
// change the string into an array
// loop using the indexes (i and j)
// check if is not a vowel
// if not a vowel, increase i, decrease j
// if i is a vowel
// store in a temp variable
//if j is a vowel
// store j on i
// store temp on j
// increase i, decrease j
// join the final string and display

// function to check if its a vowel
function isVowel(c) {
  return (
    c == 'a' ||
    c == 'A' ||
    c == 'e' ||
    c == 'E' ||
    c == 'i' ||
    c == 'I' ||
    c == 'o' ||
    c == 'O' ||
    c == 'u' ||
    c == 'U'
  )
}

var reverseVowels = function (s) {
  let i = 0
  let j = s.length - 1
  let newStr = s.split('')

  while (i < j) {
    if (!isVowel(newStr[i])) {
      i++
      continue
    }
    if (!isVowel(newStr[j])) {
      j--
      continue
    }

    let temp = newStr[i]
    newStr[i] = newStr[j]
    newStr[j] = temp
    i++
    j--
  }
  let result = newStr.join('')
  return result
}

console.log(reverseVowels('bola'))
