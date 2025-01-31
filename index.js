// Деструктуризация в Js

// Деструктуризация - это удобный способ извлечь необходимые свойства из объекта или массива и присвоить их переменным

// const obj1 = {
//     name: 'Kenny',
//     age: 25,
//     country: 'Canada',
//     job: {
//         position: 'junior frontend develop',
//         experience: '1 year',
//         salary: '$600'
//     }
// }

// const obj2 = {
//     name: 'John',
//     age: 30,
//     country: 'USA',
//     job: {
//         position: ' middle frontend develop',
//         experience: '3 years',
//         salary: '$5000'
//     }
// }


// let a = 52
// b = 22
// c = 123

// console.log(a);
// console.log(b);
// console.log(c);

// const {name, age, country, job: {position, experience, salary}} = obj

// console.log(job); // при вложенной деструктуризации теряется доступ к свойству job

// console.log(position, experience, salary);


// Деструктурирующее присваивание с переименованием переменных
// const {name: obj1Name} = obj1
// const {name: obj2Name} = obj2

// console.log(obj1Name);
// console.log(obj2Name);


// Деструктуризация массива

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [a, b, c, d, e, f, g, h, i] = arr  // первая переменная === первый элемент массива

// console.log(a, b, c, d, e, f, g, h, i);

// const arr = [[1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]]  // элементы что не нужны можно пропустить не присваивая в переменную

// const [[a, b, c], [o, t, , , , y]] = arr

// console.log(a);
// console.log(c);

// console.log(o);
// console.log(t);
// console.log(y); 

// const arr = [{name: 'Kira', age: 18}, {name: 'John', age: 30}]

// const [{name: kira, age: kiraAge}, {name: john, age:johnAge}] = arr

// console.log(kira, kiraAge);
// console.log(john, johnAge);

// const arr = [
//     {
//         name: 'Kira',
//         experience: {
//             frontend: '1 year',
//             backend: '0.5 year'
//         },
//         companies: ['Google', 'Yandex', 'Apple'],
//         companiesSalary: {
//             google: 1000,
//             yandex: 500,
//             apple: 2000
//         }
//     }
// ]

// const [{name, experience: {frontend, backend}, companies: [google, yandex, aple],  companiesSalary: {apple}}] = arr

// console.log(name, frontend, backend, google, yandex, aple, apple);


// rest и spread оператор в js

// ... - rest оператор
// ... - spread оператор

// const obj1 = [
//     {
//         name: 'Kira',
//         experience: {
//             frontend: '1 year',
//             backend: '0.5 year'
//         },
//         companies: ['Google', 'Yandex', 'Apple'],
//         companiesSalary: {
//             google: 1000,
//             yandex: 500,
//             apple: 2000
//         }
//     }
// ]

// const obj2 = {...obj1}

// obj2.name = 'John'

// console.log(obj1);
// console.log(obj2);

// rest оператор

// const [{name, companies, ...otherProperties}] = obj1

// companies.push('Microsoft')

// console.log(name, companies);
// console.log(otherProperties);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [a, b, ...otherElements] = arr
// console.log(a, b);
// console.log(otherElements);

// const calcAllValues = (...args) => {
//     let num = 0
//     for (let i = 0; i <args.length; i++) {
//         num += args[i]
//     }
//     return num
// }

// const result = calcAllValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

// console.log(result);



// spread оператор

// const obj1 = {
//     name: 'Kira',
//     experience: {
//         frontend: '1 year',
//         backend: '0.5 year'
//     },
//     companies: ['Google', 'Yandex', 'Apple'],
//     companiesSalary: {
//         google: 1000,
//         yandex: 500,
//         apple: 2000
//     }
// }

// const obj2 = {
//     address: 'London',
//     phone: '123456789'
// }

// const obj3 = {...obj1, ...obj2, age: 25, country: 'USA'}

// console.log(obj3);

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr2 = [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const arr3 = [...arr1, ...arr2]

// console.log('arr1 => ', arr1);
// console.log('arr2 => ', arr2);
// console.log('arr3 =>', arr3);


// const obj1 = {
//     name: 'Kira',
//     experience: {
//         frontend: '1 year',
//         backend: '0.5 year'
//     },
//     companies: ['Google', 'Yandex', 'Apple'],
//     companiesSalary: {
//         google: 1000,
//         yandex: 500,
//         apple: 2000
//     }
// }

// const obj2 = {
//     address: 'London',
//     phone: '123456789'
// }

// const ExampleFunction = ({name, experience, phone, ...otherData}) => {
//     console.log('name =>', name);
//     console.log('experience =>', experience);
//     console.log('phone =>', phone);
//     console.log('otherData =>', otherData);
// }

// const result = ExampleFunction({...obj1, ...obj2, age:25, country: 'USA'})  // spread в использовании с функциями

// console.log('test', true, false, {}, [], 12, 54, 'Hello world', 'Test', 1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.error('test', true, false, {}, [], 12, 54, 'Hello world', 'Test', 1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.warn('test', true, false, {}, [], 12, 54, 'Hello world', 'Test', 1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.info('test', true, false, {}, [], 12, 54, 'Hello world', 'Test', 1, 2, 3, 4, 5, 6, 7, 8, 9)

