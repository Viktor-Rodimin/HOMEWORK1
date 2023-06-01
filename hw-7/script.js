function getSeason() {
    let month = prompt("Введите номер месяца (от 1 до 12):");
    if (month < 1 || month > 12) {
      alert("Неправильный номер месяца");
    } else if (month >= 3 && month <= 5) {
      alert("Весна");
    } else if (month >= 6 && month <= 8) {
      alert("Лето");
    } else if (month >= 9 && month <= 11) {
      alert("Осень");
    } else {
      alert("Зима");
    }
  }
  

  function gameWords() {
  let gameWords = ['Яблоко', 'Груша', 'Виноград', 'Персик', 'Клубника', 'Апельин', 'Мандарин',];
  gameWords = gameWords.sort(() => Math.random() - 0.5 );

  alert(gameWords);

  let firstQuestion = prompt('Чему равнялся первый элемент массива?');
  let secondQuestion = prompt('Чему равнялся последний элемент массива?');
  if (gameWords [0].toUpperCase() === firstQuestion.toUpperCase() && gameWords[6].toUpperCase() === secondQuestion.toUpperCase()) {
    alert ('Вы ответили верно');
  }
  else if (gameWords[0].toUpperCase() === firstQuestion.toUpperCase() && gameWords[6].toUpperCase() !== secondQuestion.toUpperCase() || gameWords[0].toUpperCase() !== firstQuestion.toUpperCase() && gameWords[6].toUpperCase() === secondQuestion.toUpperCase()) {
    alert('Один правильный ответ -вы близки к победе!');
  }
  else {
    alert('Вы ответили не верно');

  }
  }