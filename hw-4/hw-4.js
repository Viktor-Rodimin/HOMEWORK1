for (let i = 0; i < 2; i++) {
    console.log("привет");
  }
//   Задание 1

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
//   Задание 2

for (let i = 7; i <= 22; i++) {
    console.log(i);
  }
//   Задание 3

let obj = {'Николай': 200, 'Василий':300, 'Петр': 400};

for(key in obj){
    document.write([key]+ ' - Зарплата'+ obj[key]+'долларов'+'<br>');
}
// Задание 4

var n = 1000;
var num = 0;
while (n > 50) {
    num++;
    n /= 2;
}
console.log(n);
console.log(num);
// Задание 5

let friday = 5
let day = friday
while(day <= 31) {
    console.log ('Пятница,' + day + 'число . Необходтио подготовить отчет.');
    day += 7
}
// Задание 6