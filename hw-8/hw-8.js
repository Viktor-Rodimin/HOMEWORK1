const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 people.sort((a, b) => a.age - b.age);
 
 console.log(people);
//  Задание 1

function isPositive(num) {
    return num > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }
  
  console.log(filter([3, -4, 1, 9], isPositive));
  
  const human = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  
  console.log(filter(human, isMale));
//   Задание 2

const interval = setInterval(() => {
    console.log(new Date().toLocaleString());
  }, 3000);
  
  setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло');
  }, 30000);
//   Задание 3

function delayForSecond(callback) {
    setTimeout(callback, 1000);
  }
  
  delayForSecond(function () {
    console.log('Привет, Глеб!');
  });
//   Задание 4


