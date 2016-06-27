// Minimum -Write a function min that takes two arguments and returns their minimum

function min (a, b) {
  if (a <= b) {
    return a
  } else {
    return b
  }
}

console.log(min(0, 10))
console.log(min(0, -10))

// Whether a positive whole number is even or odd:
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
// The function should accept a number parameter and return a Boolean.

function isEven (num) {
  num = Math.abs(num)
  if (num === 0) {
    return true
  } else if (num === 1) {
    return false
  } else {
    return isEven(num - 2)
  }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))

// Bean counting
// You can get the Nth character, or letter, from a string by writing "string".charAt(N),
// similar to how you get its length with "s".length. The returned value will be a
// string containing only one character (for example, "b").
// The first character has position zero, which causes the last one to be found at
// position string.length - 1. In other words, a two-character string has length 2,
// and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument
// and returns a number that indicates how many uppercase “B” characters are in the string.
// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters).
// Rewrite countBs to make use of this new function.

function countChar (str, char) {
  return str.split('').reduce(function (count, elem) {
    if (elem === char) {
      count += 1
    }
    return count
  }, 0)
}

function countBs (str) {
  return countChar(str, 'B')
}

console.log(countBs("BBC"))
console.log(countChar("kakkerlak", "k"))
