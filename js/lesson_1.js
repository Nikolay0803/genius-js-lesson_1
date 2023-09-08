// Домашня робота
//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка
// повинна показати “Іван”).
// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(city);
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //привіт 1;
// console.log(`привіт ${"name"}`); //привіт name;
// console.log(`привіт ${name}`); //привіт Olga;
//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));
//Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log((10*0.1 + 0.2*10)/10);
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random() * (4 - 2) + 2);
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);
//вивести в консоль message великими літерами
// console.log(message.toUpperCase());
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
// let user = {};
// user.name = "Olga";
// user.age = 25;
// user.city = "Kyiv";
// console.log(user);
// delete user.city;
// user["Like flowers"] = true;
// console.log(user);
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта
// for (key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// let min = prompt("Введіть хвилину");

// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {
//   console.log("Четверта чверть");
// }

// const value = prompt('Введіть назву товару').toLowerCase();
// let cost;

// switch (value) {
//   case "яблуко":
//     cost = 10;
//     alert(`${value} коштує ${cost}`);
//     break;
//   case "грушка":
//     cost = 30;
//     alert(`${value} коштує ${cost}`);
//     break;
//   case "вишня":
//     cost = 50;
//     alert(`${value} коштує ${cost}`);
//     break;
//   case "кавун":
//     cost = 70;
//     alert(`${value} коштує ${cost}`);
//     break;
//   case "чорниця":
//     cost = 90;
//     alert(`${value} коштує ${cost}`);
//     break;
//   case "диня":
//     cost = 110;
//     alert(`${value} коштує ${cost}`);
//     break;

//   default: alert(`Товару ${value}, немає в наявності`);
// }


