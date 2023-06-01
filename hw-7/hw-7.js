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