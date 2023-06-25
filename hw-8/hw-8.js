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

function printDate() {
    console.log(new Date().toString());
  }
  
  let counter = 0;
  const interval = setInterval(() => {
    printDate();
    counter += 3;
    if (counter >= 30) {
      clearInterval(interval);
      console.log('30 секунд прошло');
    }
  }, 3000);
//   Задание 3

function delayForSecond(callback) {
    setTimeout(callback, 1000);
  }
  
  delayForSecond(function () {
    console.log('Привет, Глеб!');
  });
//   Задание 4


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi('Глеб');
  });
//   Задание 5



let p0 = 1000; 
let p = 1200; 
let years = 0; 

while (p0 < p) {
  p0 += p0 * 0.02 + 50; 
  years++; 
}

console.log(`Городу понадобится ${years} лет, чтобы достичь населения ${p}`);