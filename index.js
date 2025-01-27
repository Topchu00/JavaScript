// Контекст - Js

// const user = {
//     name: 'Emir',
//     age: '14',

//     sayHello () {
//         console.log(`Hello. My name is ${this. name}. I'm ${this.age} years old`);
        
//     }
// }

// user.sayHello()


// Конструктор new
// class 

// class User {
//     skin = 'black'
//     hair = 'black'

//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     sayHello () {
//         console.log("Hello my name is " + this.name);
        
//     }
// }


// const topchu = new User("Topchu", 16)
// const rus = new User("Rustam", 40)

// console.log(topchu);
// console.log(rus);

// rus.sayHello()
// topchu.sayHello()



// function createUser (name, age) {
//     let cthis = {}
//     cthis.skin = 'black'
//     cthis.hair = 'black'

    
//     cthis.name = name
//     cthis.age = age

//     return cthis
// }


// const nursuluu = createUser("Nursuluu", 18)

// console.log(nursuluu);




// function createUser (name, age) {
//     this.name = name
//     this.age = age

//     return
//     // return this // { name: "Azim", age:23}
// }

// const userAzim = new createUser("Azim", 23)

// console.log(userAzim);



// Массивы в Js
// Тип данных - Jbject

// Способы объявления массива

// 1. С помощью квадратных скобок []

// const arr = []

// 2. С помощью конструктора new Array

// const arr = new Array()

// console.log((arr));

// const arr = ['aisha', 18, {}, null, true]

// console.log(arr);

// const arr1 = []
// const arr2 = []

// console.log(arr1 == arr2);

// Методы массивов

// const arr = ['aisha', 18, {}, null, true]

// push - добавляет в конец массива
// arr.push(21)

// unshift - добавляет в начало массива
// arr.unshift('homie')

// shift - удаляет в начале массива
// arr.shift()

// pop - удаляет в конце массива
// arr.pop()

// // map
// let num = 0
// arr.map((item, index, array) => {
    // console.log('item =>', item);
    // console.log('index =>', index);
    // console.log('array =>', array);
    
// })

// for(let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
    
// }
// console.log(arr);


// const getUsers = async () => {
//     const req = await fetch('https://jsonplaceholder.typicode.com/users')
//     const res = await req.json()
    
    
// }

// getUsers()

