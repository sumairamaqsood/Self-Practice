const person = {
  name: 'Alice',
  age: 30,
  isStudent: false,
  greet: function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old `);
  },
};

console.log(person);
console.log(person.name);
console.log(person.isStudent);

person.greet(); // we do not console this coz its a function

//! Shorthand Method

const name1 = 'Alice';
const age = 25;
const person1 = {
  name1,
  age,
};
console.log(person1);

//! Shorthand for Methods: You can define functions (methods) without using the function keyword.

const person2 = {
  greet() {
    console.log('Hello!');
  },
};
person2.greet();

const company = {
  name: 'Tech',
  address: {
    city: 'San Francisco',
    zip: '15482',
  },
};
console.log(company.address.zip);
