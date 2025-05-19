// "33" => 33
let score = "33"
// console.log(Number(score));

// "33abc" -> NaN (Not a number)
score = "33abc"
// console.log(Number(score));

// =>NaN
score = undefined
// console.log(Number(score));

// => 0
score = null
// console.log(Number(score));

// true => 1; false => 0
score = true
// console.log(Number(score));

// 1=> true; 0=> false; ""=>false
score = ""
// console.log(Boolean(score));

score = true
let string1 = String(score)
// console.log(String(score))
// console.log(typeof string1)


// OPERATIONS

let value = 3
let negValue = -value;
console.log(negValue);
// vhi normal operations jo hr language me hote h.