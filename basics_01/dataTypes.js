// There are 2 types of data types on the basis of how they are stored in the memory.
// 1. Primitive
    // 7 types - are call by value
    // String
    // Number
    // Boolean
    // null
    // undefined
    // Symbol
    // BigInt
// 2. Non-primitive - Reference Type
    // Array
    // Objects
    // Functions

// JS is a dynamically typed language. All the checks are done at runtime. Typescript is a statically typed language as all the 
// checks are made in compile time. can go through -> https://dev.to/hexnickk/js-interview-in-2-minutes-static-vs-dynamic-typing-2d5k
// For all the non-primitive data types, the typeof returns object in all cases.

//  Interview question - what us type null ===> object.

let bigg = 98459037646854098604790n
console.log(typeof bigg)