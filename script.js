let user = {
    name: "John",
    age: 30,
    isAmin: true
};
user["City of Residence"] = "Moscow";
user.age = 40;
delete user["City of Residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");