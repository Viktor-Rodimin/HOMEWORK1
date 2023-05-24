let password = 'пароль';

let enterPassword = prompt('Введите пароль');

if (enterPassword === password) {
  console.log('Пароль введен верно');  
}
 else {console.log('Пароль введен неправильно');}
//  задание 1

let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно')
}
else {
    console.log('Неверно');
}
// задание 2

let d = 50;
let e = 120;
if (d > 100 || e > 100) {
    console.log ('Верно');
}
else{
    console.log('Неверно');
}
// задание 3

let o = '2';
let p = '3';
alert(parseInt(o) + parseInt(p));
// задание 4



let monthNumber = 12;
if (monthNumber > 12) {
  console.log('Ошибка: номер месяца должен быть от 1 до 12');
} else {
  switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        Console.log('Зима');
      break;
    case '3':
    case '4':
    case '5':
        Console.log('Весна');
      break;
    case '6':
    case '7':
    case '8':
        Console.log('Лето');
      break;
    case '9':
    case '10':
    case '11':
        Console.log('Осень');
      break;
    default:
      console.log("Ошибка: номер месяца должен быть от 1 до 12");
  }

}

// Задание 5





let i = 1;
let n = 5 (prompt('Сколько раз сказать привет?'))
while (i <= n) {
    alert ('Привет.');
    i++;
}