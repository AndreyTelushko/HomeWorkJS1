// Задание №3 - передать строковый параметр в диалоговое окно. 
// Например, вывести «Привет, Алевтина!», где имя — это передаваемый параметр.

// const name = 'Andrey';
// alert(`Привет, ${name}`);


// Задание №4 - вызвать диалоговое окно с заголовком «Как вас зовут?» и подсказкой «Имя» в поле ввода.
// Затем вывести имя, которое ввели.

// let name = prompt("Как вас зовут?", "Имя");
// alert(`Привет ${name}`);


// Задание №5 - написать функцию, выводящую в диалоговом окне текст и переменную.
// Например, «Привет, Алевтина».
// Где «Алевтина» — это внешняя переменная.

// function show_text(user_name){
//     alert(`Привет, ${user_name}`);
// }
// let user_name = prompt("Как вас зовут?", "Имя");
// show_text(user_name);


// Задание №6 - вывести на экран в диалоговом окне текст с сообщением “Вы уверены?” и кнопками «ОК» , «Отмена».

// if(confirm("Вы уверены?"))
//     {
//     alert("Ок");
//     }
// else
//     {
//     alert("Отмена");
//     }


// Задание №7 - перепишите код, используя конструкцию switch-case,
//  =запрашивая возраст пользователя через диалоговое окно.

// const age = prompt("Сколько вам лет?");
// switch (age) {
//     case 18:
//       alert("Вы совершеннолетний, все можно!");
//       break;
//     case 10:
//       alert("Вам надо учить уроки!");
//       break;
//     case 30:
//       alert("Ложитесь спать, завтра на работу");
//       break;
//     default:
//       alert("Мы не знаем что Вам делать");
//       break;
//   }


let name = prompt("Как вас зовут?", "Имя");
alert(`Привет ${name}`);
