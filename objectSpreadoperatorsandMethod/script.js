// ! CLONING/COPYING AN OBJECT

const original = { name: 'Alice', age: 25 };

const clone = { ...original }; // yahn pe mene poora object utha k copy kar hy

console.log(clone);

//! MERGING OBJECTS

const obj1 = { name: 'Alina', age: 25 };

const obj2 = { age: 30, city: 'newyork' };

//obj2's age property overwrites obj1's age because it comes later in the spread.

const merge = { ...obj1, ...obj2 };
console.log(merge);

//! Adding updating properties
const user = { name: 'Bob', age: 36 };
const updateuser = { ...user, city: 'London' };

console.log(updateuser);

//! Removing property using destructuring

const person = { name: 'Ammy', age: 25, city: 'Bankok' };
//Extract city to keep the rest in

const { city, ...rest } = person;

console.log(rest);

//! Cloning in nested objects

const original1 = { name: 'Alice', address: { city: 'Paris' } };
const shallowCopy = { ...original1 };
shallowCopy.address.city = 'London';
console.log(shallowCopy);
