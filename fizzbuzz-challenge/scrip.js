// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else {
//     console.log(i);
//   }
// }

//* OR everything thats divisible by 15 is divisible by both 3 and 15
// for (i = 1; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log('fizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else {
//     console.log(i);
//   }
// }

//* with while loop

let j = 1;
while (j <= 100) {
  if (j % 15 === 0) {
    console.log('fizzBuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(j);
  }
  j++;
}
