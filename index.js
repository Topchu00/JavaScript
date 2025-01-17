// Отличие Function Decloration от Function Expression

// SayHello("sadfsdf")
// function SayHello(name) {
//     console.log(name);  
// }

// SayHello("sdfsdf")


// Возврат каких-то данных из функции
// Ключевое слово return позволяет вернуть результат выполнения кода из функции 

// function getAnimalColor(animal = 'unknown', color = 'unknown') {
//     return `${animal} color is ${color}`    
//     return true 
// }

// let animalcolor = getAnimalColor('Dog', 'black')

// console.log("variable animalColor => ", animalcolor);

// const returnUndefined = (userAge) => {
//     if(userAge < 18) {
//         return;
//     }

//     console.log("Добро пожаловать");
    
// }

// const age = prompt("Введите возраст")

// console.log(returnUndefined(age));


// Рекурсивные функции - это функции, которые вызывают сами себя

// let count = 0
// let finish = 100
// const recursionFunction = () => {
//     console.log(count);
//     count += 1
//     if(count <= finish) {
//         recursionFunction()
//     }else {
//         return;
//     }
// }

// recursionFunction()

// let user = prompt("Введите значение")
// if (user === 180) console.log("Success user is 180");

// const anonimFunction = function () {return 180}

// const anonimFunction = () => (180 * 5 / 12 + 300)
// let result = anonimFunction()
// console.log(result)

// function anonimFunction (num1, num2) {
//     return (180 * num1 / 12 + 300 + num2)
// }

// let getResult = anonimFunction
// let getResult1 = anonimFunction
// let getResult2 = anonimFunction
// console.log(getResult(2, 3));
// console.log(getResult1(12, 32));
// console.log(getResult2(3 , 4));


// console.log(getResult);
// console.log(getResult1);
// console.log(getResult2);



// Массивы - это некий объект который может хранить в себе коллекцию из разных значений

// 1. Способ создания массивов через []
// const arr = ['Aisha', 'Nursuluu', 'Topchu']
// console.log(arr[0]);

// 2. Способ создания массивов с помощью конструктора new Array
// const arr = new Array(1,2, {}, 4, true, '233')
// console.log(arr);


// Перебор массива с помощью циклов

// const arr = ['Aisha', 'Nursuluu', 'Topchu']

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.map(el => {
//     console.log(el);
// })
