// OBJECTS EXERCISES


// 1. Is plain object
// ------------------
// Task description: Write a method that verifies an argument is a plain object, not an array or null

const isPlainObject = (element) => {
    // your code

  };

  const data1 = { a: 1 };
  
console.log("is plain object: ", isPlainObject(data1)); // true



// 2. Make pairs
// -------------
// Task description: Write a method that returns a deep array like [[key, value]]

const makePairs = (object) => {
    // your code

  };

  const data2 = { a: 1, b: 2 };
  
console.log("make pairs: ", makePairs(data2)); // [['a', 1], ['b', 2]]



// 3. Without
// -------------
// Task description: Write a method that returns a new object without provided properties

const without = (object, ...args) => {
    // your code

  };

  const data3 = { a: 1, b: 2 };
console.log("without: ", without(data3, 'b')); // { a: 1 }



// 4. Is empty
// -------------
// Task description: Write a method that makes a shallow check is object empty

const isEmpty = (object) => {
    // your code

  };

  const data4 = { a: 1, b: undefined };
  const data5 = { a: undefined };
  console.log("is empty: ", isEmpty(data4)); // false
  console.log("is empty: ", isEmpty(data5)); // true


// 5. Is equal
// -------------
// Task description: Write a method that makes a shallow compare of two objects

const isEqual = (firstObject, secondObject) => {
    // your code

  };

  const data6 = { a: 1, b: 1 };
  const data7 = { a: 1, b: 1 };
  const data8 = { a: 1, b: 2 };
  console.log("is equal: ", isEqual(data6, data7)); // true
  console.log("is equal: ", isEqual(data6, data8)); // false


// 6. Invoke
// ---------
// Task description: Write a method that invokes an array method on a specific path 

const invoke = (object, path, func, args) => {
    // your code

  };

const data9 = { a: { b: [1, 2, 3] } }
console.log("invoke: ", invoke(data9, 'a.b', 'splice', [1, 2])); // [2, 3]



// 7. Is empty deep
// ----------------
// Task description: Write a method that makes a deep check is an object empty  

const isEmptyDeep = (element) => {
    // your code

  };
  
const data10 = { a: { b: undefined } };
console.log("is empty deep: ", isEmptyDeep(data10)); // true
  


// 8. Is equal deep
// ----------------
// Task description: Write a method that makes a deep compare of two objects 


const isEqualDeep = (element) => {
    // your code

  };

const data11 = { a: 1, b: { c: 1 } };
const data12 = { a: 1, b: { c: 1 } };
const data13 = { a: 1, b: { c: 2 } };

console.log("is equal deep: ", isEqualDeep(data11, data12)); // true
console.log("is equal deep: ", isEqualDeep(data11, data13)); // false
  


// 9. Intersection
// ----------------
// Task description: Write a method that finds shallow intersections of objects 

const intersection = (firstObject, secondObject) => {
    // your code

  };

const data14 = { a: 1, b: 2 };
const data15 = { c: 1, b: 2 };

console.log("intersection: ", intersection(data14, data15)); // { b: 2 }
  


// 10. Intersection deep
// ---------------------
// Task description: Write a method that finds all intersections of objects

const intersectionDeep = (firstObject, secondObject) => {
    // your code

  };
  
const data16 = { a: 1, b: { c: 3 } };
const data17 = { c: 1, b: { c: 3 } };
  
console.log("deep intersection: ", intersectionDeep(data16, data17)); // { b: { c: 3 } }
  