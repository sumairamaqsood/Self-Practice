//New Array
/*
1) Arrays are a type of object. (Why fruit is an object was my ques)
* fruit is an array but arrays in JavaScript are a type of object, which is why typeof fruit returns "object".
2) When you use new Array(), it creates an instance of the Array object. But object literal we commonly use cos new array is more verbose than array literals,
* new Array() is an older way of creating arrays; using array literals ([]) is  preferred.
3) The typeof operator returns "object" for arrays because arrays are objects with special properties and methods designed to handle ordered data.
4) const vs function: const stores data, while function encapsulates reusable logic.


*/
let x;
const fruit = new Array('Apple', 'Mango', 'Banana');
console.log(fruit);
console.log(typeof fruit);
console.log(Array.isArray(fruit));

//array literals More Easy way to declare an Array
const numbers = [1245, 1245, 12588];
numbers.push(10); // Adds at the end
// numbers.unshift(101010); // Adds at the start
//numbers.slice(1245);
//numbers.fill(125200000);
//console.log(numbers.length);
//console.log(typeof numbers); // Output : Object
console.log(numbers);

//Tough Chalenge Revision

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];
// solution1
const arr3 = arr1.slice(0, 4).concat(arr2);
// solution 2 ?more Easy way

const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1); // 4th index pe 1 value ko katdo to yh ek 5 ko kat raha hay
console.log(arr4);
