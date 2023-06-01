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

