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
  
