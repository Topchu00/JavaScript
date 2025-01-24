// 1. Выведите столбец четных чисел в промежутке от 0 до 100.

// for(let i = 0; i <= 100; i++) {
//     if(i % 2 == 0) {
//         console.log(i);
        
//     }
    
// }



// 2.  Дан массив с элементами [2, 5, 9, 15, 0, 4] С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// const arr = [2, 5, 9, 15, 0, 4]

// for(let i = 0; i <= arr.length; i++) {
//     if(arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
        
//     }
// }

// 3. Дан объект с числовыми значениями. Найдите сумму всех значений. Используйте цикл for...in для перебора свойств объекта.

// const obj = {
//     num1: 3, 
//     num2: 5, 
//     num3: 9,
//     num4: 13,
//     num5: 4,
//     num6: 7
// }
// let sum = 0

// for(let i in obj) {
//     sum += obj[i]
// }

// console.log(sum);


// 4. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// const numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let sum = 0 

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 0) {
//         sum += numbers[i];
//     }
// }

// console.log(sum);


// 5. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// let Dayweek = prompt("Введите цифру от 1 до 7")

// function Calendar(day) {
//     if(day == 1) {
//         return "Понедельник"
//     }else if (day == 2) {
//         return"Вторник";
        
//     }else if (day == 3) {
//         return "Среда";
        
//     }else if (day == 4) {
//         return "Четверг";
        
//     }else if (day == 5) {
//         return "Пятница";
        
//     }else if (day == 6) {
//         return "Суббота";
        
//     }else if (day == 7) {
//         return "Воскресенье";
        
//     }
// }

// alert(Calendar(Dayweek))


// 6. С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str

// let str = ''
// for(let i = 9; i >= 1; i--) {
//     str += i
    
// }

// console.log(str);


// 7. С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.

// let str = ''

// for(let i = 1; i < 10; i++) {
//     str += -${i}
// }

// str += '-'

// console.log(str);


// 8. Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

// let n = 8; // Размер массива (можно изменить на нужное значение)
// let arr = [];

// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//         str += i;
//     }
//     arr[i - 1] = str; // Прямое присваивание элемента массива
// }

// console.log(arr);


// 9. Найдите сумму всех чисел от 1 до 100

// let sum = 0
// for(let i = 0; i <= 100; i++) {
//     sum += i
// }
// console.log(sum);


// 10. Создайте функцию countProperties(obj), которая принимает объект и возвращает количество его собственных свойств.

// function countProperties(obj) {
//     let count = 0;
//     for (let key in obj) {
//       if (obj[key] !== undefined || key in obj) {
//         count++;
//       }
//     }
//     return count;
//   }
  

// const numericValues = {
//     age: 20,
//     height: 175,
//     weight: 70,
//     salary: 50000,
//     experienceYears: 3,
//     projectsCompleted: 15,
//     rating: 4.8,
//     tasksPerDay: 10
// };

// console.log(countProperties(numericValues));
