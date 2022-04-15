// 1. Write a function that takes two input `numA` and `numB` and returns the sum of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make first test fail and see if you get the result of second test. yes
// 5. If not fix it using the test framework(try...catch) we learned in the testing framework video.

let sum = (numA, numB) => numA + numB

// Abstraction
let test = (message, callback) => {
  try {
    callback()
    console.log(`PASS`, message)
  }
  catch (error) {
    console.log(error)
    console.log(`FAIL`, message)
  }
}

// Assertion Library
let expect = (actual) => {
  return {
    toBe: function (expected) {
      if (typeof actual !== expected) {
        throw new Error(`${typeof actual} is not equal to ${expected}`)
      }
    }
  }
}

test(`Adding two numbers`, () => {
  expect(sum(10, 10)).toBe(`string`)
})
test(`Adding two numbers`, () => {
  expect(sum(13, 20)).toBe(`number`)
})

// #### Multiply two numbers

// 1. Write a function that takes two input `numA` and `numB` and returns the multiplication of both numbers.
// 2. After writing the function write 5 tests for above function with different values
// 3. Throw an error when the arguments passed in not a number.
// 4. Make first test fail and see if you get the result of second test.
// 5. If not fix it using the test framework(try...catch) we learned in the testing framework video.

let mul = (numA, numB) => numA * numB

test(`multiply 2 numbers`, () => {
  expect(mul(10, `a`)).toBe(`number`)
})
