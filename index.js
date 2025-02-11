// Окружение в js
// window - глобальный объект, который представляет окно браузера

// BOM - Browser Object Model - объекты предоставляемые браузерной средой

// DOM - Document Object Model - объекты предоставляемые браузером для работы с HTML документом

// console.log(document);

// const node = document.childNodes;

// console.log(node);

// querySelectorAll позволяет получить все элементы по указанному css селектору

// Получение тегов html в js по названию тега
// const body = document.querySelectorAll('body'); 

// console.log(body);


// const divs = document.querySelectorAll('div');

// console.log(divs);

// Коллекции в js не являются массивами

// Не сработает
// divs.map(item => {
//     console.log(item);
// })

// for of
// for (let item of divs) {
//     console.log(item);
// }


// Получение тегов html в js по классу
// const divs = document.querySelectorAll('.box');

// console.log(divs);

// Получение тегов html в js по id
// const div = document.querySelectorAll('#box');

// console.log(div);

// Комбинированный поиск
// const p = document.querySelectorAll('.box > p');

// console.log(p);

// const div = document.querySelectorAll('[data-item]');

// console.log('data item => ', div);

// querySelector позволяет получить первый элемент по указанному css селектору

// const box = document.querySelector('.box');

// getElementsByClassName позволяет получить все классы элемента

// const box = document.getElementsByClassName('box')

// console.log(box);

// box.map(item => {
//     console.log(item);
// })

// getElementById позволяет получить элемент по id

// const box = document.getElementById('box'); 

// console.log(box);

// getElementsByTagName позволяет получить все элементы по тегу

// const div = document.getElementsByTagName('div')

// console.log(div);


// Создание элементов

// const div = document.createElement('div');
// const p = document.createElement('p');
// const input = document.createElement('input');

// console.log(div);
// console.log(p);
// console.log(input);

// innerHtml - позволяет установить html содержимое элемента

// const box = document.querySelector('#box');
// const div = document.createElement('div');

// div.innerHTML = '<div><p>Text from <span>JS</span></p></div>';


// append - позволяет добавить элемент в конец родительского элемента
// prepend - позволяет добавить элемент в начало родительского элемента
// berfore - позволяет добавить элемент перед указанным элементом
// after - позволяет добавить элемент после указанного элемента

// box.append(div);

// const box = document.querySelector('#box');
// const p = document.createElement('p');

// p.innerHTML = 'Text from JS';
// p.style.color = 'green';

// box.append(p);

// box.prepend(p);

// box.before(p);

// box.after(p);

// const box = document.querySelector('#box');

// textContent - позволяет установить текстовое содержимое элемента

// box.innerHTML = '<div>animal color is <span>black</span></div>'
// box.textContent = '<div>animal color is <span>black</span></div>'