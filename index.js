// Методы массивов

// push - для вставки какого-то элемента в конец массива

// const arr = [1, 2, 3, 4, 5]
// arr.push(6)

//  pop - удалить элемент в конце массива
// const arr = [1, 2, 3, 4, 5]
// arr.pop()

// shift - для удаления первого элемента массива
// const arr = [1, 2, 3, 4, 5]
// arr.shift()

// unshift - добавляет элемент в начало массива
// const arr = [1, 2, 3, 4, 5]
// arr.unshift(0)

// map - Позвволяет перебрать каждый элемент массива и на выходе возвращает новый массив
// const arr = [1, 2, 3, 4, 5]
// const arrCopy = arr.map((item, idx, array) => {
    // console.log('item =>', item);
    // console.log('idx =>', idx);
    // console.log('array =>', array);
    // return item
// })

// arr.push(1)
// arr.pop()
// console.log(arr);
// console.log(arrCopy);
// console.log(arr == arrCopy);


// filter - Позвволяет перебрать каждый элемент массива и в зависимости от условия возвращает новый массив 

// const arr = [1, 2, 3, 4, 5]
// const arrCopy = arr.filter((item, idx, array) => item % 2 == 0)


// console.log(arr);
// console.log(arrCopy);

// forEach - Позвволяет перебрать каждый элемент массива но не возвращает новый массив

// const nums = [1, 2, 3, 4, 5]

// const result = nums.forEach((item, idx) => {
//     console.log('item and idx =>', `${item}-${idx}`);
//     if(idx == 2) item ++ 
//     if(item == 5) item -- 
// })

// nums.push(4)
// nums.shift()

// console.log('nums =>', nums);
// console.log('result =>', result);

// find - Позволяет по условию найти нужный элемент массива

// const animals = ['cat', 'dog', 'fish', 'lion', 'monkey']

// const findAnimal = animals.find((item) => item === 'cat')

// console.log(findAnimal);

// splice - Позволяет удалить элементы массива начиная от указонного  start какое-то количество элементов

// const animals = ['cat', 'dog', 'fish', 'lion', 'monkey']

// animals.splice(3, 1)
// console.log(animals);

// Начиная со 2 элемента массиваб удаляем 0 элементов и добавляем новые 3 элемента
// animals.splice(2, 0, 'shark')
// console.log(animals);


// Удаление всех элементов массива 

// const animals = ['cat', 'dog', 'fish', 'lion', 'monkey']

// animals.splice(1)
// console.log(animals);


// reverse - получаем исходный массив в обратном порядке

// const nums = [1, 2, 3, 4, 5]

// nums.reverse()
// console.log(nums);


// concat - Объеденяет массивы и возвращает новый массив

// const nums = [1, 2, 3, 4, 5]
// const animals = ['cat', 'dog', 'fish', 'lion', 'monkey']

// const result = nums.concat(animals, [1, true], [{}])
// console.log(result);


// 1. Дан массив сотрудников. Нужно найти всех сотрудников с зарплатой больше 100_000 и у которых должность "Senior".( объект из 5 сотрудников )
// const persons = [
//     {
//         name: 'Topchu',
//         salary: 50000,
//         post: 'jr'
//     },

//     {
//         name: 'Ramazan',
//         salary: 160000,
//         post: 'senior'
//     },

//     {
//         name: 'Azat',
//         salary: 90000,
//         post: 'senior'
//     },

//     {
//         name: 'Azim',
//         salary: 180000,
//         post: 'senior'
//     },

//     {
//         name: 'Rustam',
//         salary: 130000,
//         post: 'mid'
//     }
// ]

// const result = persons.filter((item) => item.salary > 100000 && item.post == 'senior')

// console.log(result);


// 2. Напиши функцию, которая проверяет, является ли слово палиндромом (читается одинаково слева направо и справа налево).

// const word = ['ш', 'а', 'л', 'а', 'ш']

// const reverseword = word.filter((array) => {
//     if(array = word.reverse())
//         return true
// })

// console.log(reverseword);


// 3. Дан массив чисел. Нужно посчитать, сколько в нем четных и нечетных чисел.

// const nums = [1, 3, 6, 7, 4, 8, 2, 9, 10, 5, 12]

// const even_numbers = nums.filter((item) => item % 2 == 0)
// const odd_numbers = nums.filter((item) => item % 2 != 0)

// console.log('Количество чётных чисел: ', even_numbers.length);
// console.log('Количество нечётных чисел: ', odd_numbers.length);



// 4. Дан массив. Найди элемент, который встречается чаще всего.

// const animals = ['cat', 'dog', 'cat', 'rat', 'elephant', 'eagle', 'cat', 'bird', 'dog', 'bull']

// const findAnimal = animals.find((item) => item === 'cat')

// console.log(findAnimal);



// 6. Дан массив чисел. Найди сумму четных и нечетных чисел по отдельности.

// const nums = [1, 3, 6, 7, 4, 8, 2, 9, 10, 5, 12]
// let sum = 0

// const even_numbers = nums.filter((item) => item % 2 == 0)
// const odd_numbers = nums.filter((item) => item % 2 != 0)

// sum += even_numbers

// console.log('Сумма чётных чисел: ', sum);

