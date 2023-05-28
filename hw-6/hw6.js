let massiv0  = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < massiv0.length; i++) {
  if (massiv0[i] === 10) {
    break;
  }
  console.log(massiv0[i]);
}
// Задание 1

let massiv1 = [1, 5, 4, 10, 0, 3];
let position = massiv1.indexOf(4);
console.log(position);
// задание 2

let massiv3 = [1, 3, 5, 10, 20];
let result = massiv3.join(' ');
console.log(result);
// Задание 3



let massiv4 = [];
for (let i = 0; i < 3; i++) {
  let inMassiv4 = [];
  for (let j = 0; j < 3; j++) {
    inMassiv4.push(1);
  }
  massiv4.push(inMassiv4);
}
console.log(massiv4);
// Задание 4

let massiv5 = [1, 1, 1];
massiv5.push(2, 2, 2);
console.log(massiv5);
// Задание 5

let massiv6 = [9, 8, 7, 'a', 6, 5];
massiv6.sort();
massiv6.splice(massiv6.indexOf('a'), 1);
massiv6 = massiv6.filter(item => typeof item === 'number');
console.log(massiv6);
// Задание 6

const massiv7 = [9, 8, 7, 6, 5];
const userInput = parseInt(prompt("Введите число от 1 до 10"));

if (massiv7.includes(userInput)) {
  console.log(`Число ${userInput} содержится в массиве`);
} else {
  console.log(`Число ${userInput} не содержится в массиве`);
}
// Задание 7

const line = 'abcdef';
const reversedLine = str.split('').reverse().join('');

console.log(reversedLine);
// Задание 8

const massiv8 = [[1, 2, 3],[4, 5, 6]];
const vievMassiv8 = massiv8.flat();

console.log(vievMassiv8);
//  Задание 9
