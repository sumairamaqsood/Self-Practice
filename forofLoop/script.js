//Iterating over an array

const fruits = ['banana', 'apple', 'cherry', 'water melon'];
for (const fruit of fruits) {
  console.log(fruit);
}

// iterating over string
const str = 'helllo bunny ';
for (const strr of str) {
  console.log(strr);
}

// iterating over a Map

const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
for (const [key, value] of map) {
  console.log(key, value);
}
