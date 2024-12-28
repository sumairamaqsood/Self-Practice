// for (i = 0; i <= 10; i) {
//   console.log(' number is ' + i);
// }

// for (i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log(' number is ' + i);
//   }
// }
// ! Nested for loop

// for (let i = 1; i <= 5; i++) {
//   console.log('Number ' + i);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through array

const name = ['sara', 'bob', 'ellen', 'elo'];

for (let i = 0; i < name.length; i++) {
  if (i === 0) {
    console.log('sara is my best friend');
  } else {
    console.log(name[i]);
  }
}
