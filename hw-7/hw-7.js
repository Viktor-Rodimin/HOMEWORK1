let line = "js";
console.log(line.toUpperCase());
// Задание 1


function searchStart(arr, prefix) {

return arr.filter((s) => s.toLowerCase().startsWith(prefix.toLowerCase()));
  }

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));
// Задание 2

let num = 32.58884;

let floorNum = Math.floor(num);
console.log(floorNum);
// Задание 3.1
let ceilNum = Math.ceil(num);
console.log(ceilNum);
// Задание 3.2
let roundNum = Math.round(num);
console.log(roundNum);
// Задание 3.3

const numbers = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
console.log(`Наименьшее число: ${min}`);
console.log(`Наибольшее число: ${max}`);
// Задание 4

function randomInteger(min, max) {

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert( randomInteger(1, 10) );
// Задание 5

function getRandomArrNumbers(n) {
  const length = Math.floor(n / 2);
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (n + 1)));
  }
  return arr;
}
getRandomArrNumbers(7);
getRandomArrNumbers(12);
// Задание 6

function getRandomInt (min, max) {
  return Math.floor (Math.random() * (max - min + 1)) + min;
}
getRandomInt (2, 22);
// Задание 7

const date = new Date();
console.log(date.toLocaleDateString());
// Задание 8 

const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate.toLocaleDateString());
// Задание 9