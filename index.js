// Копирование объектов

// const name = 'Azim'
// const cloneName = name

// console.log('cloneName === name', cloneName === name);

// const user = {
//     name: "Azat",
//     age: 25,
//     password: '123456'
// }

// const cloneUser = user
// cloneUser.name = "Madina"

// console.log('cloneuser', cloneUser);
// console.log('user', user);

// Первый способ копирования объектов через цикл for in 

// const cloneUser = {}

// for(let key in user) {
//     cloneUser[key] = user[key]
//     // console.log(cloneUser);
// }

// cloneUser.email = 'asdfsfsdf'

// console.log('cloneuser', cloneUser);
// console.log('user', user);


// Второй способ копирования объектов через метод assign

// const user = {
//     name: "Azat",
//     age: 25,
//     password: '123456'
// }

// const userId = {
//     id: 12
// }

// const userStatus = {
//     status: 'mentor'
// }

// // Object.assign(user, userId, userStatus)

// const newUser = {
//     name: 'Azim'
// }
// Object.assign(newUser, user, userStatus, userId)

// console.log('newUser', newUser);


// Третий способ копирования объектов через спредоператор

// const user = {
//     name: "Azat",
//     age: 25,
//     password: '123456'
// }

// const userId = {
//     id: 21
// }

// const newUser = {...user, ... userId}
// // const newUser = {...user.age}
// newUser.name = "Azim"
// console.log('user', user);
// console.log('newUser', newUser);



// НЕЛЬЗЯ ТАК ДЕЛАТЬ!!
// const user = {
//     name: "Azat",
//     age: 25,
//     password: '123456'
// }

// const newUser = user

// newUser.name = 'Madina'

// console.log('user', user);
// console.log('newUser', newUser);






// this

// a = 'Hello world'

// console.log(this.alert("hello world"));

// console.log(this === window);
// name = 'Rustam'
// function hello() {
//     console.log(this.name);
    
// }

// const person = {
//     name: "Azim",
//     sayHello : hello
// }

// const persontwo = {
//     name: "Madina",
//     sayHello : hello
// }

// person.sayHello()
// persontwo.sayHello()
// hello()



// const sayHello = () => {
//     console.log("Hello world");
// }


// sayHelloFunc()

// function sayHelloFunc() {
//     console.log("Hello world");
    
// }

// sayHelloFunc()


// Передать контекст

// function sayHello(email, gender) {
//     console.group(`${this.name} Info`)
//     console.log(`Hello ${this.name}. age: ${this.age}, password: ${this.password}`);
//     console.log('email: ' + email);
//     console.log('gender: ' + gender);
//     console.groupEnd();
    
// }

// const userAzat = {
//     name: 'Azat',
//     age: 23,
//     password: '1234',
//     // hello: sayHello
// }

// const userAzim = {
//     name: "Azim",
//     age: 25,
//     password: '123456',
//     hello: sayHello  // bind(userAzat)        // this не является userAzim, а userAzat
// }

// userAzim.hello.bind(userAzat, 'asdasd', 'asdasd')() 
// userAzim.hello.call(userAzat, 'asdasd', 'asdasd')
// userAzim.hello.apply(userAzim, ['asdasd', 'asdasd'])


// userAzim.hello.call(userAzat)

// userAzim.hello()
// userAzat.hello()





// Конструктор, оператор "new"

// function User(name) {
//     // this {}
//     this.name = name
//     this.status = 'student'
//     this.group = 'js-15'

//     // return {} 
// }

// // const studentRamazan = new User('Ramazan')

// const students = ['Ramazan', 'Topchubai', 'Aisha', 'Rustam']
// const studentsObjArr = []
// for(let i = 0; i < students.length; i++) {
//     studentsObjArr.push(new User(students[i]))
// }

// console.log(studentsObjArr);
