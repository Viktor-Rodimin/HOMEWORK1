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

function checkEvenNunb(num) {
    if (num % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
  }
  
  console.log(checkEvenNunb(4)); 
  console.log(checkEvenNunb(7)); 
//   Задание 2


function printSquare(num) {
    console.log(num * num);
  }
  
  printSquare(4); 
  printSquare(7);
//   Задание 3.1

function outputEvenNumb(num) {
    if (num % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
  }
  
  console.log(outputEvenNumb(4)); 
  console.log(outputEvenNumb(7));
// Задание  3.2

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
//   Задание 4
