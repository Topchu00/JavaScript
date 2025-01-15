// функции - js 
// Функции - это переиспользуемый блок кода в js.

// const color = prompt('Напишите название цвета')

// if(color === 'red') {
//     let animal = 'monkey'
//     alert(animal + ' is ' + color);
// }else if(color === 'yellow') {
//     let animal = 'monkey'
//     alert(animal + ' is ' + color);
// }else if(color === 'white') {
//     let animal = 'monkey'
//     alert(animal + ' is ' + color);
// }else {
//     alert(animal + 'color is unknown');
// }


// Виды объявления функций
// 1. С помощью ключевого слова function - Function Decloration



// function monkeyColorDefinition () {
//     console.log("hello world");   
// }
// Для того чтобы функция отработала, нужно ее вызвать по ее названию и после названия поставить круглые скобки
// monkeyColorDefinition()


// Параметры и Аргументы функций
// Параметры - некие переменные объявляемые внутри круглых скобок у функции 
// Аргументы - передаваемые значения для параметров при вызове функции 

// function monkeyColorDefinition (name = 'Unknown', surname = 'Unknown') {
//     console.log("hello", name, surname);   
// }

// monkeyColorDefinition()


// const color = prompt('Напишите название цвета')

// if(color === 'red') {
//     let animal = 'monkey'
//     alert(animal + ' is ' + color);
// }else if(color === 'yellow') {
//     let animal = 'monkey'
//     alert(animal + ' is ' + color);
// }else if(color === 'white') {
//     let animal = 'monkey'
//     alert(animal + ' is ' + color);
// }else {
//     alert(animal + ' color is unknown');
// }

// let animal = prompt('Напишите название животного')
// let color = prompt('Напишите название цвета')
// function monkeyColorDefinition(beast, color) {
//     alert("color of " + beast + " is " + color);
//     console.log("color of ", beast, " is ", color);
// }

// monkeyColorDefinition(animal, color)




// Область видимости:  
// 1.Глобальная
// 2.Функциональная

// let name = "Azat"
// let surname = "Sheishenov"

// function scope() {
//     let name = 'Aisha'
//     let surname = "Esengulov"
//     console.log(name, surname);
// }


// scope()

// console.log(name, surname);

// let name = "Azat"
// let surname = "Sheishenov"

// function scopeIncludeScope(data) {
//     console.log(data);
    
// }

// function scope(user, fullname) {
//     let data = {
//         user: user,
//         fullname: fullname
//     }
//     scopeIncludeScope(data)
// }

// scope(name, name + " " + surname)



// 2. Функции-Выражения(Function Expression)

// const expressionFunction = function(name, surname) {
//     console.log("hello", name, surname);
    
// }

// expressionFunction('topchu', 'orozbekov')

// Отличие Function Expression от Function Decloration


// const expressionFunction = function(name, surname) {
//     console.log("hello", name, surname);
    
// }

// expressionFunction('topchu', 'orozbekov')



// function scopeIncludeScope(data) {
//     console.log(data);
    
// }

// 3. Стрелочные функции | Arrow function
// ()