function getMinNumber(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(getMinNumber(8, 4)); 
  console.log(getMinNumber(6, 6));
//   Задание 1

function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
  }
  
  console.log(checkEvenOdd(4)); 
  console.log(checkEvenOdd(7)); 
//   Задание 2

function greetUser() {
    const age = parseInt(prompt("Сколько вам лет?"));
  
    if (age < 0) {
      console.log("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
      console.log("Привет, друг!");
    } else {
      console.log("Добро пожаловать!");
    }
  }
  
  greetUser();
//   Задание 3
