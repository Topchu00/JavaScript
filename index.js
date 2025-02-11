// События (Events) JS - это механизм, который выполнять определенный код в отовет на действие пользователя или браузера

// const btn = document.getElementById('button')

// С помомщью метода addEventListener() мы "подписываемся" на какое-то событие.
// Это самое событие к которому мы хотим "подписаться" передается в качестве первого аргумента в виде строки
// Вторым аргументом передается функция которая будет вызвана когда произойдет это событие
// btn.addEventListener('click', function () {})
// btn.addEventListener('click', () => {})
// btn.addEventListener('click', myFunc)

// click - это событие которое происходит когда ползователь кликает на click
// btn.addEventListener('click', () => {
//     console.log('Событие click произошло')
// })

// dblclick - это событие которое происходит когда ползователь кликает на click два раза
// btn.addEventListener('dblclick', () => {
//     console.log('Событие dblclick произошло')
// })

// touchstart - это событие которое происходит когда пользователь касается элемента
// btn.addEventListener('touchstart', () => {
//     console.log('Событие touchstart произошло')
// })

// // mousedown - это событие которое происходит когда пользователь нажимает на элемент
// btn.addEventListener('mousedown', () => {
//     console.log('Событие mousedown произошло')
// })

// // mouseup - это событие которое происходит когда пользователь отпускает кнопку мыши
// btn.addEventListener('mouseup', () => {
//     console.log('Событие mouseup произошло')
// })

// // mouseenter - это событие которое происходит когда курсор мыши входит в область элемента 
// btn.addEventListener('mouseenter', () => {
//     console.log('Событие mouseenter произошло')
// })

// // mouseleave - это событие которое происходит когда курсор мыши покидает область элемента
// btn.addEventListener('mouseleave', () => {
//     console.log('Событие mouseleave произошло')
// })

// removeEventListener() - метод который удаляет обработчик события

// const btn = document.getElementById('button')
// const cyclicality = document.getElementById('cyclicality')

// cyclicality.innerHTML = 0

// const handleMouseEnter = () => {
//     console.log('started');

//     for (let i = 1; i < 1000; i++) {
//         cyclicality.innerHTML = i
//         if (i === 80) {
//             btnStart.removeEventListener('click', handleMouseEnter)
//             return;
//         }
//     }
// }

// btn.addEventListener('click', handleMouseEnter)

// DOMContentLoaded - это событие которое происходит когда загружается DOM дерево
// document.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM обнаружен');
// })

// const btn = document.getElementById('button')

// Объект события (Event Object) - это объект который содержит информацию о событии 
// При наступлении 

// btn.addEventListener('click', (event) => {
//     console.log(event);
// })

// const input = document.getElementById('input')
// const btn = document.getElementById('button')

// document.addEventListener('DOMContentLoaded', () => {
//     input.addEventListener('input', (event) => {
//         console.log(event.target.value);
//     })

//     btn.addEventListener('click', () => {
//         if(input.type === 'password') {
//             input.type = 'text'
//         }else {
//             input.type = 'password'
//         }
//     })
// })

// .document.addEventListener('keydown', (event) => {
//     if(event.key === 'Escape') {
//         window.close()
//     }
// })

// Делегирование событий (Event Delegation) - это техника которая заключается в том что мы вешаем событие на родительский элемент, и через родителя обрабатываем события дочерних элементов.

// const listWrapper = document.querySelector('.wrapper')

// listWrapper.addEventListener('click', (event) => {
//     console.log(event);

    // if(event.target.tagName === 'LI') {
    //     event.target.style = `
    //         background-color: black;

    //     `;
    // }
// })

// const listWrapper = document.querySelectorAll('li')

// listWrapper.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         event.target.style = `
//             background-color: black;

//         `;
//     })
// })