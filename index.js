// Условия в js
// Прописываются с помощью конструктора if else 

// const userName = prompt("Введите желаемый никнейм")
// const userAge = prompt("Введите свой возраст")

// console.log(userName);
// console.log(userAge);

// if(userAge >= 18) {
//     console.log("Добро пожаловать!")
// }else if (userAge == 16) {
//     console.log("Сервис недоступен...")
// }else {
//     window.close()
// }



// Конструктор switch case 

// const userAge = prompt("Введите свой возраст")

// switch(Number(userAge)) {
//     case 16:
//         alert("Добро пожаловать 16!");
//         break;
    
//     case 17:
//         alert("Добро пожаловать 17!");
//         break;
    
//     case 18:
//         alert("Добро пожаловать 18!");
//         break;
//     default: 
//     alert("Сервис недоступен...")
// }

// switch(true) {
//     case userAge >= 18:
//         alert("Добро пожаловать!");
//         break;
    
//     case userAge == 17:
//         alert("несовершеннолетний");
//         break;
    
//     case userAge < 17:
//         alert("школьник");
//         break;
//     default: 
//     alert("Сервис недоступен...")
// }



// Тернарный оператор 

// const userAge = prompt("Введите свой возраст")

// userAge >= 18 ? 
//     alert("Добро пожаловать!") : 
//         userAge < 12 ?
//             alert("Ты ребёнок") :
//                 alert("Сервис недоступен...");

// if(userAge == 18) {
//     console.log("Добро пожаловать!");
// }else {
//     console.log("Сервис недоступен...");
// }



// Логические операторы в js 

// 1. && (два амперсанта) - Означает "и", и отдаёт true в случае если два условия являются истинными

// const userAge = prompt("Введите свой возраст")

// if(userAge >= 1 && userAge < 14) {
//     alert("Ребёнок")
// }else if(userAge >= 14 && userAge < 18) {
//     alert("Подросток")
// }else if (userAge >= 18 && userAge < 40) {
//     alert("Взрослый")
// }else if (userAge >= 40 && userAge < 120) {
//     alert("Пожилой")
// }else {
//     alert("Неопределено")
// }


// 2. // - означает "или", возвращает первое истинное значение если хотя бы одно из условий истинно 

// const product = prompt("Введите название овощя или фрукта")

// if(product === 'яблоко' || product === 'banana' || product === 'pineapple') {
//     alert("Это фрукт")
// }else if (product === 'potato' || product === 'carrot') {
//     alert('Это овощь')
// }else {
//     alert("Неопределено...")
// }


// 3. ! - означает "не", и возвращает обратное логическое значение

const product = prompt("Введите название овощя или фрукта")

if(product != 'banana') {
    console.log("Не банан");
}else if (product !== 'apple') {
    console.log("Не яблоко");
}

console.log(!Boolean(null))
console.log(!0)
console.log(!1)
console.log(!true)
console.log(!false)