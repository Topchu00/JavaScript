// Prototype js

// const animal = new Object({
//     name: 'cat',
//     hasTail: true,
//     move () {
//         console.log('Moving...');        
//     } 
// })


// Object.prototype.hunt = function() {
//     console.log('Hunting...');
// }

// const text = new String('test')

// const animal = new Object({
//     move () {
//         console.log('Moving...');        
//     },
    
//     hunt () {
//         console.log('Hunting...');   
//     },

//     eat () {
//         console.log('Eating...');
//     },

//     run () {
//         console.log('Running');
//     }
// })

// const cat = Object.create(animal);

// cat.color = 'black'

// const kitty = Object.create(cat)

// const obj = {}

// const arr = ['a', 'b', 'c']

// const num1 = 42

// const num2 = new Number(42)

// const animal = new Object({
//     move () {
//         console.log('Moving...');        
//     },
    
//     hunt () {
//         console.log('Hunting...');   
//     },

//     eat () {
//         console.log('Eating...');
//     },

//     run () {
//         console.log('Running');
//     },

//     color: 'black'
// })

// const cat = {
//     name: 'Башмак',
//     age: 3
// }

// Object.setPrototypeOf(cat, animal)

// console.log(Array.prototype);

// Array.prototype.myMap = () => {
//     console.log('My map');
// }

// Array.prototype.myMap = function(callback) {
//     const result = []

//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }

//     return result;
// }

// const arr = [1, 2, 3, 4, 5, 6]

// const test = arr.myMap((item, idx, array) => {
//     console.log('item => ', item);
//     console.log('idx => ', idx);
//     console.log('array => ', array);

//     return item * 3;
// })

// console.log(test);

// Array.prototype.myReverse = function (callback) {
//     const result = []

//     for (let i = this.length - 1; i >= 0; i--) {
//         result.push(callback(this[i]))
//     }

//     return result
// }

// const arr = [1, 2, 3, 4, 5]

// const test = arr.myReverse((item) => {
//     return item
// })

// console.log(test);


// Array.prototype.mySort = function (callback) {
//     const result = []

//     function sort(x, y) {
//         if(x < y) {
//             return -1
//         }else if (x > y) {
//             return 
//         } 
//     }
    
// }


// arr = ['bad', 'apple', 'cat', 'either', 'duck']

// arr.sort()
// console.log(arr);
