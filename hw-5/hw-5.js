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

function multiplyNumbers(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return num1 * num2;
    }

  }
  
  console.log(multiplyNumbers(4, 5));
  console.log(multiplyNumbers('Привет', 5));
//   Задание 5

function cubeNumber() {

    let num = prompt('Введите число:');
    if (isNaN(num)) {
      return 'Переданный параметр не является числом';
    } else {
      let result = num * num * num;
      return `${num} 'в кубе равняется' ${result}`;
    }

  }
  
  console.log(cubeNumber());
//   Задание 6

let circle1 = {

    radius: 5,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }

  };
  
  let circle2 = {

    radius: 10,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }

  };
  
  console.log(circle1.getArea()); 
  console.log(circle1.getPerimeter()); 
  console.log(circle2.getArea()); 
  console.log(circle2.getPerimeter()); 
//   Задание 7