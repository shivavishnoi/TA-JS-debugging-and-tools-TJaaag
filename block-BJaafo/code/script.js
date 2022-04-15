// function nameDisplay(first, last) {
//   return first + ' ' + last
// }

// let result = nameDisplay(`shiv`, `vishnoi`)
// let expected = `shiva vishnoi`

// if (result != expected) {
//   throw new Error('not matching')
// }
// // console.log(`first fail`)
// result = nameDisplay(`raj`, `sharma`)
// expected = `raj sharma`

// if (result != expected) {
//   throw new Error('not matching')
// }

let total = (amount, taxRate) => amount + (amount * taxRate)

let result = total(10, 1)
console.log(result)

let expected = 21

if (result != expected) throw new Error('not matching')

result = total(20, 1)
expected = 40
if (result != expected) throw new Error('not matching')
else console.log(result)

