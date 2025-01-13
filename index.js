// Постфиксная && Префиксная инкрементация переменной 

// Постфиксная инкрементация
// ++
// 1. Возвращает текущее значение переменной
// 2. Увеличивает значение переменной на 1

// let num = 4
// console.log(num++)

// console.log(num);

// Префиксная инкрементация
// ++ - перед переменной
// 1. Увеличивает значение переменной на 1 и сразу отдает новое значение 

// let num = 4
// console.log(++num);


// Циклы в Js - позволяют выполнить повторяющиеся действия или обходить коллекции по заданным правилам(условиям)

// while (условие) {
//     тело цикла
// }

// let count = 1

// while(count < 0) {
//     console.log(count);
//     count++
// }

// Итерация - каждое выполнение блока кода внутри цикла 

// do {выполняемый код} while (условие)

// let count2 = 1
// do {
//     console.log(count2);
//     count2++
// } while(count2 < 0)

// Отличие while от do{} while() 
// while(){} - запускается в случае если наше условие истинно 
// do{} while() - запускается один раз даже если условие не истинно/false

// Бесконечный цикл
// while(true) {
//     console.log('Yahoooo');  //НЕ ЗАПУСКАТЬ
// }

// for(Начало; Условие; Шаг){выполняемый код}

// for(let count = 1; count <= 10; count++) {
//     console.log(count);
// }


// break && continue
// break - завершает цикл
// for(let num = 0; num < 10; num++) {
//     if(num === 6) {
//         console.log('Получили нужное нам значение');
//         break
//     }
//     console.log('Итерируемое значение =>', num);
    
// }


// continue - пропускает итерации цикла

// for(let num = 0; num < 10; num++) {
//     if(num === 7) {
//         console.log('Получили нужное нам значение');
//         continue
//     }
//     console.log('Итерируемое значение =>', num);
    
// }

// Работа в убывающем порядке в цикле

// for(let num = 10; num > 0; num--) {
//     console.log(num);
// }

// for(let num = -10; num >= -20; num--) {
//     console.log(num);  
// }

// let num = 0
// let text = ''
// let row = (text-1);
// while(num <= 5) {

//     console.log(text += '*');
//     num++
// }

// let text = '';
// let num = 5;
// let row = (n-1); 
// for(i=1; i <= n; i++)
// {
//     text = text.trim();
//     a = ' '.repeat(row) + text + (i > 1 ? ' ' : '') + '*';
//     console.log(text);
//     row--;
// }
