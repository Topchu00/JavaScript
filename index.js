// Типы данных в js
// всего 8 типов данных:
// 1) 7 примитивные типы данных:
    // 1) number
    // 2) string
    // 3) boolean
    // 4) null
    // 5) undefined
    // 6) BigInt
    // 7) symbol

// 2) 1 ссылочный тип данных:
    // object
//_________________________________________________________________________________________________

// Javascript - является динамически типизированным языком 
// let num;
// console.log(typeof num);

// num = 2;
// console.log(typeof num);

// num = ""
// console.log(typeof num)


//BigInt - позволяет работать с большими числами выше и меньше 9007199254740991
// console.log(BigInt(987654321987654) + BigInt(1));
// console.log(BigInt(987654321987654) + BigInt(4));

//Boolean - может быть только двумя значениями это (true / false) логический тип данных для выполнения условий  

// 0/null/undefined/''/""/`` = false
// console.log(Boolean());

// console.log(50 < 1);

// const age = prompt("Введите возраст: ")
// if(age >= 18) {
//     console.log("Добро пожаловать")
// }else {
//     console.log("Школьник")
// }
// console.log(age);


// String - тип данных являющейся строкой заключённой в (двойные/одинарные/обратные ковычки)

// let age = prompt("Введите возраст") 
// let name = `Bob ${age} лет` особый вид строк позволяющий подставлять данные динамически в текст
// let name = 'Bob'
// let name = "Bob"

// console.log(name);

// let text = `ff
// ff
// ff`


// Null && Undefined - Оба означают "пустоту", но отличие заключается в присвоении.

// let num = null;

// Object - Сложный тип данных который может хранить в себе коллекцию из большого количества данных.

// let obj = {
//     num: 56,
//     text: 'fsdf',

// }


//Symbol - тип данных уникальный идентификатор 

// let num1 = '1'
// let num2 = '1'

// console.log('nums result =>', num1 == num2); //true

// let text1 = Symbol('1')
// let text2 = Symbol('1')

// console.log('symbol result =>', text1 == text2); //false

// let obj1 = {}
// let obj2 = {}

// console.log('object result =>', obj1 == obj2); //false


// Преобразование типов - Процесс при котором данные преобразовываются из одного типа в другой.

// Явное преобразование типов:

// let num = 54.752
// console.log(num);
// console.log(String(num).replace('.', ' '));
// console.log(num.toString());

// let text = "54.32"
// let text = "hello"

// console.log(Number(text));
// console.log(+text)


// Неявное преобразование типов:

// console.log(1 + '1');

console.log('1' + [] + 0);